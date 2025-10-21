import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useInterSectionObsever";

export default function AnimatedText(props:{text:string|Array<string>,delay?:number,refresh?:boolean,loop?:boolean}) {
    const textRef = useRef<HTMLSpanElement>(null);

    let isVisible = useIntersectionObserver(textRef);

    useEffect(() => {
        let currentIndex = 0;
        let running = true;
        let interval: number | undefined;

        async function showText(idx: number) {
            if (!running) return;
            await mount(idx);
        }

        function getTextCount() {
            return Array.isArray(props.text) ? props.text.length : 1;
        }

        showText(0);

        if (props.loop && getTextCount() > 1) {
            interval = window.setInterval(() => {
                currentIndex = (currentIndex + 1) % getTextCount();
                showText(currentIndex);
            }, 2000 + ((Array.isArray(props.text) ? props.text[currentIndex].length : props.text.length) * 25) + (props.delay || 0));
        } else if (props.loop) {
            interval = window.setInterval(() => {
                showText(0);
            }, 2000 + (typeof props.text === 'string' ? props.text.length * 25 : 0) + (props.delay || 0));
        }

        return () => {
            running = false;
            if (interval) clearInterval(interval);
        };
    }, [props]);
    useEffect(() => {
        if (props.refresh)
            mount();
    }, [isVisible]);


    async function mount(idx?: number) {
        if (!textRef.current) return;
        // animate out
        for (let index = 0; index < textRef.current.children.length; index++) {
            textRef.current.children[index].className = "anim-char-out";
        }

        await new Promise(resolve => {
            if (!textRef.current) return;
            setTimeout(resolve, 200 + textRef.current.children.length * 25)
        });
        let extra = 0;
        if (props.delay) extra = props.delay;
        let textToShow = typeof props.text === 'string' ? props.text : props.text[idx ?? 0] || '';
        let html = textToShow.split("").map((val, index) => {
            const char = val === " " ? "&nbsp;" : val;
            return `<span class='anim-char-in' style='animation-delay: ${index * 25 + extra}ms;'>${char}</span>`;
        }).join("");
        textRef.current.innerHTML = html;
    }

    return (
        <span className="" ref={textRef}></span>
    )
}