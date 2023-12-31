import { useRef, useEffect, ReactNode } from "react";
import BG from "../assets/BG.jpg?url";
import BGFront from "../assets/Front.png?url";
import BGFront2 from "../assets/Front2.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBG(props:{children:ReactNode})
{

    const headingRef = useRef<HTMLHeadingElement>(null);
    const BGFront2Ref = useRef<HTMLImageElement>(null);
    const BGFrontRef = useRef<HTMLImageElement>(null);
    const mainDiv = useRef<HTMLDivElement>(null);
    
    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            gsap.fromTo(
                mainDiv.current,{
                    y:1,
                },
                {
                    scale:0.5,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"top 0%",
                        end:"bottom -100%",
                        scrub:true,
                        // markers:true
                    }
                }
            )

            gsap.fromTo(
                headingRef.current,{
                    y:50,
                },
                {
                    y:-500,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"30% 35%",
                        end:"60% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                BGFrontRef.current,{
                    yPercent:0
                },
                {
                    yPercent:-20,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                BGFront2Ref.current,{
                    yPercent:0
                },
                {
                    yPercent:-30,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            );

            gsap.from(mainDiv.current,
                {
                    opacity:0,
                    ease: "power4.out",
                    duration:4,
                },
            );
            [BGFrontRef,BGFront2Ref].forEach((ref,index)=>{
                gsap.from(ref.current,
                    {
                        y:-200,
                        ease: "power4.out",
                        duration:4,
                        delay:.2*index
                    },
                )
            })
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);

    return (
        <>
            <div ref={mainDiv} className='relative flex h-screen flex-col justify-center items-center overflow-clip border-2 border-white/10 shadow-lg rounded-b-2xl'>
                <img className='absolute top-0 w-full h-full object-cover' src={BG} alt="" />
                <img ref={BGFront2Ref} className='absolute top-0 w-full h-full object-cover' src={BGFront2} alt="" />
                <div className='absolute top-0 w-full h-full' ref={BGFrontRef}>
                    <img className='w-full h-full object-cover' src={BGFront} alt="" />
                    <div className="h-48 bg-background"></div>
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-background to-background/50 opacity-80"></div>
                <div className='' ref={headingRef}>
                    {props.children}
                </div>
            </div>
        </>
    )
}