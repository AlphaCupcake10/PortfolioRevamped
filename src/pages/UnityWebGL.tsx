import { useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { TransitionLink, usePageLoader } from '../contexts/PageLoaderContext';
import Button from '../components/common/Button';

export default function UnityWebGL()
{
    const { unityProvider, loadingProgression, isLoaded , addEventListener, removeEventListener} = useUnityContext({
        loaderUrl: "Build/Build/Build.loader.js",
        dataUrl: "Build/Build/Build.data",
        frameworkUrl: "Build/Build/Build.framework.js",
        codeUrl: "Build/Build/Build.wasm",
    })

    const pageLoaderContext = usePageLoader();
    useEffect(()=>{
        pageLoaderContext?.setHasToRefresh(true);
    },[]);

    const handleQuit =() => {
        console.log("Quit Game");
        pageLoaderContext?.navigateTo("/");
    }
    
    useEffect(() => {
        if(addEventListener && handleQuit)
        addEventListener("QuitGame", handleQuit);
        return () => {
            removeEventListener("QuitGame", handleQuit);
        };
    }, [addEventListener, removeEventListener, handleQuit]);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
            document.exitFullscreen();
            }
        }
    }

    return (
    <>
        {/* <Navbar margin/> */}
        {!isLoaded && (
            <div className='w-full h-screen bg-black flex flex-col justify-center items-center'>
            <div className='max-w-sm w-full'>
                <div className="flex justify-between opacity-50">
                    <h1>Loading...</h1>
                    <h1>{`${loadingProgression * 100}%`}</h1>
                </div>
                <div className="h-2 bg-primary/50">
                    <div style={{width:`${loadingProgression * 100}%`}} className="duration-700 h-full bg-primary"></div>
                </div>
            </div>
        </div>
        )}
        
        <div className={`${isLoaded?"block":"hidden"} flex flex-col z-20 relative justify-center`}>
            <div className="h-64 sm:h-96 z-30 relative md:h-screen">
                <Unity
                    unityProvider={unityProvider}
                    className={`h-full w-full`}
                />
            </div>
        </div>
        <div className="sm:hidden p-8">
            <h1 className="text-xl font-bold">For Best Experience</h1>
            <p className="opacity-70">Toggle fullscreen and change to landscape</p>
            <Button className="mt-8 w-full" onClick={()=>toggleFullScreen()} color={"primary"}>Toggle Fullscreen</Button>
            <TransitionLink to={'/'}><Button className="mt-2 w-full" color={"secondary"}>Exit</Button></TransitionLink>
        </div>
    </>
  )
}