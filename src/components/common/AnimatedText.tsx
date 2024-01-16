import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useInterSectionObsever";

export default function AnimatedText(props:{text:string,delay?:number,refresh?:boolean})
{
    const textRef = useRef<HTMLSpanElement>(null);

    let isVisible = useIntersectionObserver(textRef);

    useEffect(()=>{
        mount()
    },[props])
    useEffect(()=>{
        if(props.refresh)
            mount()
    },[isVisible])


    async function mount()
    {
        if(!textRef.current)return;
        //animate out
        for(let index = 0; index < textRef.current.children.length ; index ++)
        {
            textRef.current.children[index].className = "anim-char-out";
        }
        
        await new Promise(resolve =>{
            if(!textRef.current)return;
            setTimeout(resolve, 200 + textRef.current.children.length * 25)
        })
        let extra = 0;
        if(props.delay)extra = props.delay;
        //split text
        let html = props.text.split("").map((val,index)=>{return `<span class='anim-char-in' style='animation-delay: ${index * 25 + extra}ms;'>${val}</span>`;}).join("");
        textRef.current.innerHTML = html;
    }

    return (
        <span className="" ref={textRef}></span>
    )
}