import { useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
export default function Cursor(props:{zIndex?: number})
{
    const ref = useRef<HTMLDivElement>(null);
    useMousePosition(ref);
    // const mousePosition = useMousePosition();
    return(
        <div style={{ zIndex: props.zIndex || 0}} ref={ref} className={`hidden md:block rounded-full blur-[20rem] opacity-70 cursor bg-blue-600 h-[500px] aspect-square fixed`}/>
    )
}