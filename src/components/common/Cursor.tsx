import { useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
export default function Cursor()
{
    const ref = useRef<HTMLDivElement>(null);
    useMousePosition(ref);
    // const mousePosition = useMousePosition();
    return(
        <div ref={ref} className='hidden md:block rounded-full blur-[20rem] opacity-70 -z-0 cursor bg-blue-600 h-[500px] aspect-square fixed'/>
    )
}