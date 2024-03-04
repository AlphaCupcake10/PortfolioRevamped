import { useLenis } from "@studio-freight/react-lenis";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LinkProps, To, useLocation, useNavigate } from "react-router-dom";
import wat from "../assets/wat.png?url";
import axios from "../axios";

type PageLoaderContextType = {
    navigateTo: (to: To,force?:boolean) => Promise<void>
    setHasToRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const PageLoaderContext = React.createContext<PageLoaderContextType | null>(null);

export function usePageLoader() {
    return useContext(PageLoaderContext);
}

export function PageLoaderProvider(props: { children: React.ReactNode }) {
    const navigator = useNavigate();
    const reactLocation = useLocation();
    const lenis = useLenis();
    const [isLoading, setIsLoading] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [loadingText, setLoadingText] = useState("");
    const showCat = useRef<boolean>(false);
    const catIMG = useRef<HTMLImageElement>(null);

    const [hasToRefresh, setHasToRefresh] = useState(false);

    useEffect(() => {
        lenis?.on("scroll", (lenis) => {
            if (catIMG.current)
                if (lenis.targetScroll > 200 && !showCat.current) {
                    showCat.current = true;
                    catIMG.current.classList.add("translate-y-10");
                    catIMG.current.classList.remove("translate-y-full");

                }
                else if (lenis.targetScroll < 200 && showCat.current) {
                    showCat.current = false;
                    catIMG.current.classList.add("translate-y-full");
                    catIMG.current.classList.remove("translate-y-10");
                }
        })
    }, [lenis]);

    useEffect(() => {
        if (hasToRefresh) {
            window.location.href = window.location.href;
        }
    }, [reactLocation.pathname])

    const displayText: { [key: string]: string } = {
        "/": "HOME",
        "/3D": "3D",
        "/projects": "PROJECTS",
        "/contact": "CONTACT",
        "/game": "ABYSSAL DESCENT",
    }
    async function navigateTo(to: To,force:boolean=false) {
        if(!force)
        {
            if (isLoading || isAnimating) return;
            if (reactLocation.pathname == to) return;
        }
        setIsAnimating(true);
        setIsLoading(true);
        setLoadingText(to.toString());
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigator(to);
        setIsLoading(false);
        lenis.scrollTo(0);
    }
    useEffect(() => {
        if (isAnimating) {
            setTimeout(() => {
                setIsAnimating(false);
            }, 2100);
        }
    }, [isAnimating])

    const visitUpdate = async() => {
        if(localStorage.getItem("HasVisited") == null)
        {
            try
            {
                let response = await axios.get("/stats/incrementUniqueVisits");
                if(response.status == 200)
                {
                    localStorage.setItem("HasVisited", "true");
                }
            }
            catch(e)
            {
                console.error(e);
            }
        }
        let visitedTime = localStorage.getItem("LastVisited");
        if(visitedTime == null)
        {
            MakeCall();
            visitedTime = Date.now().toString();
            localStorage.setItem("LastVisited", visitedTime);
            return;
        }
        let timeDiff = Date.now() - parseInt(visitedTime);
        if(timeDiff > 1000 * 60 * 60 * 24)
        {
            MakeCall();
        }
        async function MakeCall()
        {
            try
            {
                let response = await axios.get("/stats/incrementDailyVisits");
                if(response.status == 200)
                {
                    localStorage.setItem("LastVisited", Date.now().toString());
                }
            }
            catch(e)
            {
                console.error(e);
            }
        }
    }

    useEffect(()=>{visitUpdate()}, []);

    const value: PageLoaderContextType = {
        navigateTo,
        setHasToRefresh
    }

    return <PageLoaderContext.Provider value={value}>
        {
            isAnimating && (
                <div className={`z-[8388636] fixed top-0 left-0 w-screen h-screen flex justify-center items-center pointer-events-none`}>
                    <div className={`bg-primary screenWipe pointer-events-auto absolute top-0 left-0 w-screen h-screen`}/>
                    <div style={{ animationDelay: "100ms", translate: "100% 100%" }} className={`bg-primary screenWipe pointer-events-auto absolute top-0 left-0 w-screen h-screen`}/>
                    <div style={{ animationDelay: "50ms", translate: "100% 100%" }} className={`bg-black screenWipe pointer-events-auto absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
                        <h1 className="text-lg md:text-3xl font-bold inception-text">{displayText[loadingText]}</h1>
                    </div>
                </div>
            )
        }
        <div ref={catIMG} onClick={() => { lenis.scrollTo(0) }} className={`group fixed right-0 translate-y-full duration-500 bottom-0 z-[45] hover:translate-y-0 transition-all`}>
            <img src={wat} className="relative z-10" alt="wat"/>
            <div
                className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all -z-10"
            >
                <div
                    className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-28 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2"
                >
                    <div className="rounded-sm bg-black py-1 px-2">
                        <p className="whitespace-nowrap">Scroll to Top</p>
                    </div>
                    <div
                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                    ></div>
                </div>
            </div>
        </div>
        {props.children}
    </PageLoaderContext.Provider>;
}

export function TransitionLink(props: LinkProps) {
    const pageLoader = usePageLoader();
    return <>
        <a href={props.to.toString()} tabIndex={0} className={props.className} onClick={(e) => { e.preventDefault(); pageLoader?.navigateTo(props.to); }}>
            {props.children}
        </a>
    </>
}
