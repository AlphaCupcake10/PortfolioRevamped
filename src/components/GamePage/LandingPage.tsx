import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { TransitionLink } from '../../contexts/PageLoaderContext'
import Cursor from '../common/Cursor'
import TextButton from '../common/TextButton'
import { useEffect, useRef, useState } from 'react'
import AbysalDescent from '../models/AbysalDescent'
import UserModal from './UserModal'
import { LeaderboardIcon , UserIcon , PlayIcon, ExitIcon} from './Icons'
import Footer from '../Footer'
import axios from '../../axios'
import { toast } from 'react-toastify'

function LandingPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function openModal() {
        setIsModalOpen(true);
    }

    const [data,setData] = useState<{
        username: string;
        time: number;
    }[]>([]);

    useEffect(() => {
        try {
            axios.get('/leaderboard').then((res) => {
                if(res.status !== 200)return;
                setData(res.data);
            });
        }
        catch (err) {
            toast.error('Failed to fetch leaderboard data');
            console.log(err);
        }
    }, [])

    
    return (
        <>
            <UserModal 
                className='' 
                isOpen={isModalOpen} 
                closeModal={() => setIsModalOpen(false)}
                isSignedIn={isSignedIn} 
                setisSignedIn={(val:boolean)=>{
                    setIsSignedIn(val);
                }}
            />
            <Cursor />
            <div className="h-screen fixed top-0 left-0 p-24 md:p-4 2xl:p-16 z-30 flex items-end justify-center w-full pointer-events-none">
                <div className='gap-8 flex items-end justify-center pointer-events-auto md:scale-50 2xl:scale-100'>
                    <ExitIcon />
                    <UserIcon onClick={()=>{
                        openModal();
                    }}/>
                    <LeaderboardIcon/>
                    <PlayIcon/>
                </div>
            </div>
            {/* PHONE VERSION */}
            <section className={`${isModalOpen?"hidden":""} md:hidden h-screen flex flex-col justify-center items-center`}>
                <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">ABYSSAL<br />DESCENT</h1>
            </section>
            {/* DESKTOP */}
            <section className="hidden md:block h-[1000vh] w-full relative z-10" ref={scrollRef}>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center strokeText leading-[.75]">ABYSSAL<br />DESCENT</h1>
                    <div className="flex h-0">
                        <div>
                            {
                                !isSignedIn && 
                                <TextButton className='mt-8 w-64 inline' onClick={()=>openModal()}>CREATE AN ACCOUNT</TextButton>
                            }
                            <TransitionLink to={'/game/play'}>
                                <TextButton className='mt-8 w-64'>PLAYTEST NOW</TextButton>
                            </TransitionLink>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[8vw] opacity-50 text-center leading-[.75] strokeText">A GAME-DEV</h1>
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75] strokeText">PROJECT</h1>
                </div>
                <div className="h-[100vh]"/>
                <div className="h-screen flex justify-start gap-4 container px-8 mx-auto">
                    <div className="h-full flex flex-col justify-center">
                        <h1 className="font-bold tracking-tighter text-[8vw] opacity-30 leading-[.75] strokeText">GENRE</h1>
                        <h1 className="font-bold tracking-tighter text-[15vw] leading-[.75] strokeText">PARKOUR</h1>
                        <h1 className="font-bold tracking-tighter text-[15vw] leading-[.75] strokeText">SCI-FI</h1>
                    </div>
                </div>
                <div className="h-[500vh]"/>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75] strokeText">ABYSSAL<br />DESCENT</h1>
                </div>
                
            </section>
            <div className="h-screen w-screen fixed z-0 top-0 left-0 pointer-events-none hidden md:block">
                <Canvas
                    camera={{ fov: 10, aspect: 1 }}
                    shadows
                >
                    <AbysalDescent scrollRef={scrollRef} />
                    <EffectComposer>
                        <Bloom mipmapBlur intensity={1.2} />
                    </EffectComposer>
                </Canvas>
            </div>
            <section className="hidden md:block h-[1000vh] w-full absolute top-0 left-0 bg-black -z-10" >
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">ABYSSAL<br />DESCENT</h1>
                    <div className="flex h-0"/>
                </div>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[8vw] opacity-50 text-center leading-[.75]">A GAME-DEV</h1>
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">PROJECT</h1>
                </div>
                <div className="h-screen flex justify-end gap-4 container px-8 mx-auto">
                    <div className="h-full w-1/2 flex flex-col justify-center">
                        <h1 className="opacity-70 tracking-tighter text-[3vw] leading-[.75]">ABOUT THE</h1>
                        <h1 className="font-bold tracking-tighter text-[6vw] leading-[.75]">PROJECT</h1>
                        <p className="mt-4 opacity-70">
                            A fast paced action thriller based on unsual physics with a Sci-Fi premise.
                            <br />
                            It started out as a project for The Brackeys Game Jam 2023.2. I decided to keep working on it after the jam. It eventually turned into a full fledged game with a story and a lot of content.
                        </p>
                    </div>
                </div>
                <div className="h-screen flex justify-start gap-4 container px-8 mx-auto">
                    <div className="h-full flex flex-col justify-center">
                        <h1 className="font-bold tracking-tighter text-[8vw] opacity-30 leading-[.75]">GENRE</h1>
                        <h1 className="font-bold tracking-tighter text-[15vw] leading-[.75]">PARKOUR</h1>
                        <h1 className="font-bold tracking-tighter text-[15vw] leading-[.75]">SCI-FI</h1>
                    </div>
                </div>
                <div className="h-screen flex justify-start gap-4 container px-8 mx-auto">
                    <div className="h-full w-[45%] flex flex-col justify-center">
                        <h1 className="mb-4 font-bold text-[3.5vw] leading-[1]">THE STORY SO FAR</h1>
                        <p className="mt-4 opacity-70">
                            In "Abyssal Descent," players explore a collapsing sci-fi facility where they gain telekinetic powers from a botched experiment. Battling rogue drones and navigating abnormal physics, they must use their newfound abilities to survive, solve puzzles, and uncover the facility's dark secrets before it's too late.
                        </p>
                    </div>
                </div>
                <div className="h-screen flex justify-end gap-4 container px-8 mx-auto">
                    <div className="h-full w-1/2 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold tracking-tighter text-[4vw] leading-[1]">TECH STACK</h1>
                        <div className="flex gap-4">
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">UNITY</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">NODEJS</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">EXPRESS</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">MONGODB</div>
                        </div>
                        <p className="mt-4 opacity-70">The game itself is made using Unity, but the backend is an Express Server with NodeJS and MongoDB to store information such as the leaderboard and userdata</p>
                    </div>
                </div>
                <div className="h-screen flex justify-end gap-4 container px-8 mx-auto">
                    <div className="h-full w-2/5 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold tracking-tighter text-[3vw] leading-[1]">MULTIPLATFORM PWA</h1>
                        <h1 className="mb-4 text-[1vw] leading-[1] opacity-70">All you need is a browser to install and run it.</h1>
                        <div className="flex gap-4">
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">WINDOWS</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">LINUX</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">ANDROID</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">IOS</div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex justify-end gap-4 container px-8 mx-auto">
                    <div className="h-full w-2/5 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold text-[4vw] leading-[1]">LEADERBOARD</h1>
                        <h1 className="mb-4 text-[1vw] leading-[1] opacity-70">Compete with your friends. </h1>
                        {
                            data.length > 0 && data.map((val,index) => {
                                if(index > 5)return;
                                return (
                                    <div className='flex justify-between' key={index}>
                                        <div>
                                            {index+1}. {val.username}
                                        </div>
                                        <div>
                                        <h1 className=''>{`${(Math.floor(val.time/60)).toString().padStart(2, '0')}:${(Math.floor(val.time%60)).toString().padStart(2, '0')}`}</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="h-screen"/>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">ABYSSAL<br />DESCENT</h1>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default LandingPage