import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

export default function useSmoothScroll()
{
    useEffect(()=>{
        const lenis = new Lenis();

        // lenis.on('scroll', (e:any) => {
        //     console.log(e);
        // });

        let id:number = 0;

        function raf(time:number) {
            lenis.raf(time);
            id = requestAnimationFrame(raf);
        }

        id = requestAnimationFrame(raf);

        return ()=>{
            cancelAnimationFrame(id);
        }

    },[])
}