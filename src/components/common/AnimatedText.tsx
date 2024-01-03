import { useEffect, useRef } from "react";

export default function AnimatedText(props:{text:string})
{
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(()=>{
        mount()
    },[props.text])

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

        //split text
        let html = props.text.split("").map((val,index)=>{return `<span class='anim-char-in' style='animation-delay: ${index * 25}ms;'>${val}</span>`;}).join("");
        textRef.current.innerHTML = html;
    }

    return (
        <span className="" ref={textRef}></span>
    )
}