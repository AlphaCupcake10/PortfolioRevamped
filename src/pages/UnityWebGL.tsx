import { useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { usePageLoader } from '../contexts/PageLoaderContext';

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

    return (
    <>
        {/* <Navbar margin/> */}
        {!isLoaded && (
            <div className='w-full h-screen bg-black grid place-items-center'>
            <div className="h-2 w-160 bg-primary/50">
                <div style={{width:`${loadingProgression * 100}%`}} className="duration-700 h-full bg-primary"></div>
            </div>
        </div>
        )}
        <Unity
            unityProvider={unityProvider}
            className={`${isLoaded?"block":"hidden"} h-screen w-full`}
            style={{ visibility: isLoaded ? "visible" : "hidden" }}
        />
    </>
  )
}