import { useRef, useEffect, ReactNode } from "react";
import BG from "../assets/BG.jpg?url";
import BGFront from "../assets/Front.png?url";
import BGFront2 from "../assets/Front2.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBG(props:{children:ReactNode})
{

    const refs = [useRef<HTMLHeadingElement>(null)];
    const BGFrontRef = useRef<HTMLImageElement>(null);
    const BGFront2Ref = useRef<HTMLImageElement>(null);
    
    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            gsap.fromTo(
                refs[0].current,{
                    y:50
                },
                {
                    y:-500,
                    scrollTrigger:{
                        trigger:refs[0].current,
                        start:"top 50%",
                        end:"bottom 0%",
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
                        trigger:BGFrontRef.current,
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
                        trigger:BGFront2Ref.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);

    return (
        <>
            <div className='md:container md:mx-auto flex h-screen flex-col justify-center items-center overflow-clip'>
                <img ref={BGFront2Ref} className='absolute top-0 -z-10 w-full h-full object-cover' src={BGFront2} alt="" />
                <div className='absolute top-0 w-full h-full -z-20' ref={BGFrontRef}>
                    <img className='w-full h-full object-cover' src={BGFront} alt="" />
                    <div className="h-48 bg-background"></div>
                </div>
                <img className='absolute top-0 -z-30 w-full h-full object-cover' src={BG} alt="" />
                <div className="-z-10 w-full h-full absolute top-0 left-0 bg-gradient-to-t from-background to-background/50"></div>
                <div className='' ref={refs[0]}>
                    {props.children}
                </div>
            </div>
        </>
    )
}