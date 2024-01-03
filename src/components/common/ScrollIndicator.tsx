import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollIndicator(props:{children?:ReactNode})
{
    const scrollIndicator = useRef<HTMLDivElement>(null);

    useEffect(() => {        
        let ctx = gsap.context(() => {
            gsap.to(
                scrollIndicator.current,{
                    yPercent:-100,
                    opacity:0,
                    duration:1,
                    delay:0,
                    ease: "power4.in",
                    scrollTrigger:{
                        trigger:scrollIndicator.current,
                        start:"top 70%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )


        }); // <- optional additional param, scopes all selector text inside the context to this component (default is document)
        
        return () => ctx.revert(); // cleanup! 
    }, []);

    return (
        <div ref={scrollIndicator} className="flex flex-col justify-center items-center translate-y-[10vh]">
            {props.children}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="36" viewBox="0 0 16 36" fill="none" className="scale-150 -mt-4">
                {/* <path d="M1 7.8C1 5.18126 1 3.87188 1.58944 2.91001C1.91926 2.37178 2.37178 1.91926 2.91001 1.58944C3.87188 1 5.18126 1 7.8 1H8.2C10.8187 1 12.1281 1 13.09 1.58944C13.6282 1.91926 14.0807 2.37178 14.4106 2.91001C15 3.87188 15 5.18126 15 7.8V11C15 11.9288 15 12.3933 14.9487 12.7832C14.5942 15.4756 12.4756 17.5942 9.78316 17.9487C9.39326 18 8.92884 18 8 18V18C7.07116 18 6.60674 18 6.21684 17.9487C3.52444 17.5942 1.40579 15.4756 1.05133 12.7832C1 12.3933 1 11.9288 1 11V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/> */}
                {/* <path d="M8 1V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> */}
                <path d="M2 28L8 34L14 28" stroke="currentColor" strokeWidth="2"/>
            </svg>
        </div>
    )
}