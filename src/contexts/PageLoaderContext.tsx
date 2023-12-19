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
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }, [])
    

    async function navigateTo(to:To)
    {
        if(location.pathname == to)return;
        if(isLoading)return;
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        navigator(to);
        // await new Promise(resolve => setTimeout(resolve, 50));
        setIsLoading(false);
    }

    const value:PageLoaderContextType = {
        navigateTo
    }

    const duration_class = "duration-500";
    
    return <PageLoaderContext.Provider value={value}>
        <div className={`z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center pointer-events-none`}>
            <div className={`bg-primary ${isLoading?"scale-x-100 origin-left":"scale-x-0 origin-right"} pointer-events-auto absolute top-0 left-0 w-screen h-screen transition-transform ${duration_class}`}></div>
        </div>
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
