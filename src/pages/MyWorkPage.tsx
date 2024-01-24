import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Unity, useUnityContext } from "react-unity-webgl";
import { usePageLoader } from '../contexts/PageLoaderContext';

export default function MyWorkPage()
{
    const { unityProvider, loadingProgression, isLoaded ,unload } = useUnityContext({
        loaderUrl: "Build/Build/Build.loader.js",
        dataUrl: "Build/Build/Build.data",
        frameworkUrl: "Build/Build/Build.framework.js",
        codeUrl: "Build/Build/Build.wasm",
    })
    const pageLoaderContext = usePageLoader();
    useEffect(()=>{
        return ()=>{
                pageLoaderContext?.setHasToRefresh(true);
            }
    },[])
    return (
    <>
        <Navbar margin/>
        {!isLoaded && (
            <div className='w-full h-screen grid place-items-center'>
                <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
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