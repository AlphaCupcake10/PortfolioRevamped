import { useState, FormEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from '../common/Button';
import Input from '../common/Input';
import TextButton from '../common/TextButton';
import axios from '../../axios';

export default function UserModal(props: { className?: string, isOpen: boolean, closeModal: () => void, isSignedIn: boolean, setisSignedIn:(val:boolean)=>void}) {

    const [username, setUsername] = useState<InputState>({ value: "", hasError: false });
    const [password, setPassword] = useState<InputState>({ value: "", hasError: false });
    const [confirmPassword, setConfirmPassword] = useState<InputState>({ value: "", hasError: false });

    const [displayName, setDisplayName] = useState<string>("");

    const [isSignInPage, setIsSignInPage] = useState<boolean>(true);

    useEffect(()=>{
        GetUserName();
    },[])

    function checkUsername()
    {
        if (!username.value.match(/[\S\s]+[\S]+/)) {
            toast.error("Please enter a valid username", {
              position: "bottom-right",
            });
            setUsername((prev) => ({ ...prev, hasError: true }));
            return false;
        }
        return true;
    }

    function checkPassword()
    {
        if (!password.value.match(/[\S\s]+[\S]+/)) {
            toast.error("Please enter a valid password", {
                position: "bottom-right",
            });
            setPassword((prev) => ({ ...prev, hasError: true }));
            return false;
        }
        return true;
    }

    function checkConfirmPassword()
    {
        if (password.value !== confirmPassword.value) {
            toast.error("Passwords do not match", {
                position: "bottom-right",
            });
            setConfirmPassword((prev) => ({ ...prev, hasError: true }));
            return false;
        }
        return true;
    }

    const handleSignIn = async (event: FormEvent) => {
        event.preventDefault();
        toast.dismiss();

        if (checkUsername() && checkPassword())
        {
            try
            {
                let res = await axios.post('user/signin', {
                    username: username.value,
                    password: password.value
                });
                console.log(res);
                if(res.status !== 200)
                {
                    toast.error('Failed to sign in');
                    return;
                }
                toast.success('Signed in successfully');
                props.setisSignedIn(true);
                StoreToken(res.data.token);
                ClearFields();
            }    
            catch(err:any)
            {
                toast.error(err?.response?.data || 'Failed to sign in');
            }
        }
    }

    const handleSignUp = async (event: FormEvent) => {
        event.preventDefault();
        toast.dismiss();

        if (checkUsername() && checkPassword() && checkConfirmPassword()) {
            try
            {
                let res = await axios.post('user/signup', {
                    username: username.value,
                    password: password.value
                });
                if(res.status !== 201)
                {
                    toast.error('Failed to sign up');
                    return;
                }
                toast.success('Signed up successfully');
                props.setisSignedIn(true);
                StoreToken(res.data.token);
                ClearFields();
            }
            catch(err:any)
            {
                toast.error(err?.response?.data || 'Failed to sign up');
            }
        }
    }

    const handleSignOut = async () => {
        props.setisSignedIn(false);
        RemoveToken();
    }

    const handleDeleteUser = async () => {
        try
        {
            let token = GetToken();
            if(!token){
                handleSignOut()
                return;
            }
            let res = await axios.delete('user/', {
                headers: {
                    Authorization: `${token}`
                }
            });
            if(res.status !== 200)return;
            toast.success('Account deleted successfully');
            handleSignOut();
            ClearFields();
        }
        catch(err:any)
        {
            console.log(err);
            toast.error(err);
        }
    }

    async function GetUserName()
    {
        try
        {
            let token = localStorage.getItem('token');
            if(!token){
                props.setisSignedIn(false);
                return;
            }
            else
            {
                props.setisSignedIn(true);
            }
            let res = await axios.get('user/', {
                headers: {
                    Authorization: `${token}`
                }
            });

            if(res.status !== 200)return;
            setDisplayName(res.data.username);
        }
        catch(err:any)
        {
            console.log(err);
            toast.error(err);
        }
    }

    function StoreToken(token:string)
    {
        localStorage.setItem('token',token);
    }
    function GetToken()
    {
        return localStorage.getItem('token');
    }
    function RemoveToken()
    {
        localStorage.removeItem('token');
    }

    function ClearFields()
    {
        setUsername({ value: "", hasError: false });
        setPassword({ value: "", hasError: false });
        setConfirmPassword({ value: "", hasError: false });
    }

    return (
        <div className={`${props.className} backdrop-blur bg-background/80 transition-opacity duration-500 ${props.isOpen ? "" : "opacity-0 pointer-events-none"} w-screen h-screen fixed z-50`}>
            <svg className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-70 w-16 h-16 hover:text-primary duration-100 cursor-pointer hover:scale-105 active:scale-95" onClick={() => props.closeModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {
                props.isSignedIn ? (
                    <div className="flex flex-col justify-center items-center h-screen w-full md:w-128 mx-auto">
                        <h1 className="text-xl md:text-2xl">Signed in as</h1>
                        <h1 className="text-2xl md:text-4xl font-bold">{displayName}</h1>
                        <Button onClick={() => handleSignOut()} className="mt-8 w-64" color={'primary'}>SIGN OUT</Button>
                        <TextButton onClick={()=>handleDeleteUser()} className="mt-8 w-64">DELETE ACCOUNT</TextButton>
                    </div>
                ) : (
                    isSignInPage ? (
                        <div className="flex flex-col justify-center items-center gap-8 h-screen w-full md:w-128 mx-auto">
                            <h1 className="text-2xl md:text-4xl font-bold">Sign in to your account</h1>
                            <form onSubmit={handleSignIn} action='' className="p-2 md:p-8 flex flex-col gap-4 w-full">
                                <Input
                                    className="w-full"
                                    placeHolder="Enter Your Username"
                                    value={username.value}
                                    hasError={username.hasError}
                                    onChange={(e) => setUsername({ value: e.target.value, hasError: false })}
                                >
                                    Username
                                </Input>
                                <Input
                                    className="w-full"
                                    placeHolder="Enter Your Password"
                                    type="password"
                                    value={password.value}
                                    hasError={password.hasError}
                                    onChange={(e) => setPassword({ value: e.target.value, hasError: false })}
                                >
                                    Password
                                </Input>
                                <Button className="mt-8" color="primary">Sign in</Button>
                                <h1 className="text-center text-text/70">Don't have an account? <span className="text-accent hover:text-primary cursor-pointer" onClick={() => setIsSignInPage(prev => !prev)}>Sign up</span></h1>
                            </form>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-8 h-screen w-full md:w-128 mx-auto">
                            <h1 className="text-2xl md:text-4xl font-bold">Create an account</h1>
                            <form onSubmit={handleSignUp} action='' className="p-2 md:p-8 flex flex-col gap-4 w-full">
                                <Input
                                    className="w-full"
                                    placeHolder="Enter Your Username"
                                    value={username.value}
                                    hasError={username.hasError}
                                    onChange={(e) => setUsername({ value: e.target.value, hasError: false })}
                                >
                                    Username
                                </Input>
                                <Input
                                    className="w-full"
                                    placeHolder="Enter Your Password"
                                    type="password"
                                    value={password.value}
                                    hasError={password.hasError}
                                    onChange={(e) => setPassword({ value: e.target.value, hasError: false })}
                                >
                                    Password
                                </Input>
                                <Input
                                    className="w-full"
                                    placeHolder="Confrim Your Password"
                                    type="password"
                                    value={confirmPassword.value}
                                    hasError={confirmPassword.hasError}
                                    onChange={(e) => setConfirmPassword({ value: e.target.value, hasError: false })}
                                >
                                    Confirm Password
                                </Input>
                                <Button className="mt-8" color="primary">Sign up</Button>
                                <h1 className="text-center text-text/70">Already have an account? <span className="text-accent hover:text-primary cursor-pointer" onClick={() => setIsSignInPage(prev => !prev)}>Sign in</span></h1>
                            </form>
                        </div>
                    )
                )
            }
        </div>
    )
}