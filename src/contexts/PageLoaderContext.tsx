import { useLenis } from "@studio-freight/react-lenis";
import React, { useContext, useEffect, useState } from "react";
import { LinkProps ,To,useLocation,useNavigate } from "react-router-dom";

type PageLoaderContextType = {
    navigateTo:(to:To)=>Promise<void>
}

const PageLoaderContext = React.createContext<PageLoaderContextType | null>(null);

export function usePageLoader()
{
    return useContext(PageLoaderContext);
}

export function PageLoaderProvider(props:{children:React.ReactNode})
{
    const navigator = useNavigate();
    const location = useLocation();
    const lenis = useLenis();
    const [isLoading,setIsLoading] = useState(false);
    const [isAnimating,setIsAnimating] = useState(false);
    const [loadingText,setLoadingText] = useState("");

    const displayText:{[key:string]:string} = {
        "/":"HOME",
        "/3D":"3D",
        "/mywork":"MY WORK",
        "/contact":"CONTACT",
    }

    async function navigateTo(to:To)
    {
        if(isLoading || isAnimating)return;
        if(location.pathname == to)return;
        setIsAnimating(true);
        setIsLoading(true);
        setLoadingText(to.toString());
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigator(to);
        setIsLoading(false);
        lenis.scrollTo(0);
    }
    useEffect(()=>{
        if(isAnimating)
        {
            setTimeout(() => {
                setIsAnimating(false);
            }, 2200);
        }
    },[isAnimating])

    const value:PageLoaderContextType = {
        navigateTo
    }
    
    return <PageLoaderContext.Provider value={value}>
        {
            isAnimating && (<div className={`z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center pointer-events-none`}>
                                <div className={`bg-primary screenWipe pointer-events-auto absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
                                </div>
                                <div style={{animationDelay:"200ms",translate:"100% 100%"}} className={`bg-primary screenWipe pointer-events-auto absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
                                </div>
                                <div style={{animationDelay:"100ms",translate:"100% 100%"}} className={`bg-background screenWipe pointer-events-auto absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
                                    <h1 className="text-xs lg:text-3xl font-bold inception-text">{displayText[loadingText]}</h1>
                                </div>
                            </div>) 
        }
        {props.children}
    </PageLoaderContext.Provider>;
}

export function TransitionLink(props:LinkProps)
{
    const pageLoader = usePageLoader();

    return <>
        <div onClick={()=>{pageLoader?.navigateTo(props.to);}}>
            {props.children}
        </div>
    </>
}
