import { useEffect, useRef } from "react";
import ME from "../assets/Me1.png?url";
// import ME from "../assets/Me.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe()
{
    const age = "XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI";
    const about_me = "ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ";
    const alias = "IAMALPHACUPCAKE10IAMALPHACUPCAKE10IAMALPHACUPCAKE10IAMALPHACUPCAKE10";
    const bday = "0XA330XA330XA330XA330XA330XA330XA330XA33";

    const parentRef = useRef<HTMLDivElement>(null);
    const refs = [useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null)];
    const insideRefs = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
    
    const scrollIndicator = useRef<HTMLDivElement>(null);

    const MeRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            refs.forEach((ref,index)=>{
                gsap.fromTo(
                    ref.current,{
                        xPercent:-10 - 2 * index
                    },
                    {
                        xPercent:0,
                        scrollTrigger:{
                            trigger:parentRef.current,
                            start:"top 100%",
                            end:"bottom top",
                            scrub:true,
                            // markers:true
                        }
                    }
                )
            })
            insideRefs.forEach((ref,index)=>{
                gsap.from(
                    ref.current,{
                        xPercent:-10,
                        yPercent:100,
                        opacity:0,
                        delay:.35*index,
                        ease:"power4.out",
                        duration:2,
                        scrollTrigger:{
                            trigger:MeRef[0].current,
                            start:"top 100%",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })

            gsap.from(
                MeRef[0].current,{
                    yPercent:100,
                    opacity:0,
                    duration:2,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                MeRef[1].current,{
                    yPercent:100,
                    opacity:0
                },
                {
                    yPercent:0,
                    duration:2,
                    delay:.5,
                    opacity:1,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[1].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.from(
                imageRef.current,{
                    yPercent:100,
                    // opacity:0,
                    duration:2,
                    delay:0.5,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.to(
                scrollIndicator.current,{
                    yPercent:-100,
                    opacity:0,
                    duration:1,
                    delay:0,
                    ease: "power4.in",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
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
        <div className="lg:-mt-36">
            <div ref={scrollIndicator} className="mx-auto w-min scale-150 translate-y-[10vh]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="36" viewBox="0 0 16 36" fill="none">
                    {/* <path d="M1 7.8C1 5.18126 1 3.87188 1.58944 2.91001C1.91926 2.37178 2.37178 1.91926 2.91001 1.58944C3.87188 1 5.18126 1 7.8 1H8.2C10.8187 1 12.1281 1 13.09 1.58944C13.6282 1.91926 14.0807 2.37178 14.4106 2.91001C15 3.87188 15 5.18126 15 7.8V11C15 11.9288 15 12.3933 14.9487 12.7832C14.5942 15.4756 12.4756 17.5942 9.78316 17.9487C9.39326 18 8.92884 18 8 18V18C7.07116 18 6.60674 18 6.21684 17.9487C3.52444 17.5942 1.40579 15.4756 1.05133 12.7832C1 12.3933 1 11.9288 1 11V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/> */}
                    {/* <path d="M8 1V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> */}
                    <path d="M2 28L8 34L14 28" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </div>
            <div className='overflow-hidden 2xl:-mb-[28rem] xl:-mb-[20rem] lg:-mb-[8rem] hidden lg:block'>
                <div ref={parentRef} className='w-max'>
                    <div ref ={refs[0]} className="overflow-clip">
                        <h3 ref ={insideRefs[0]} className='text-xl tracking-[50px] font-extrabold'>{age}</h3>
                    </div>
                    <div ref ={refs[1]} className="overflow-clip">
                        <h3 ref ={insideRefs[1]} className='mt-4 text-9xl font-extrabold'>{about_me}</h3>
                    </div>
                    <div ref ={refs[2]} className="overflow-clip">
                        <h3 ref ={insideRefs[2]} className='-mt-4 text-9xl font-extrabold opacity-75'>{alias}</h3>
                    </div>
                    <div ref ={refs[3]} className="overflow-clip">
                        <h3 ref ={insideRefs[3]} className='-mt-4 text-9xl font-extrabold opacity-50'>{bday}</h3>
                    </div>
                    <div ref ={refs[4]} className="overflow-clip">
                        <h3 ref ={insideRefs[4]} className='mt-4 text-xl tracking-[50px] font-extrabold'>{age}</h3>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto lg:hidden px-8">
                <h3 className="text-2xl md:text-5xl font-extrabold">ABOUT <span className="gradient-text">ME.</span></h3>
            </div>
            <div className="md:container md:mx-auto flex flex-col-reverse md:flex-row-reverse lg:flex-row items-end gap-8 px-8">
                <div className='w-full md:w-3/4'>
                    <div className="overflow-clip">
                        <h1 ref={MeRef[0]} className='text-xl sm:text-5xl lg:text-6xl font-extrabold mt-1'>LAKSHMAN <span className='gradient-text'>SUNDAR</span></h1>
                    </div>
                    <hr className='border-primary border-2 mt-4'/>
                    <p ref={MeRef[1]} className='text-justify mt-6 text-xs font-light md:text-base mb-12'>
                        Currently working as a freelance artist, constantly interested in a challenge. I am a kind of person who likes to view things from a neutrally different and virtually inclined perspective. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo nisl, luctus at risus eu, fermentum porta nulla.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden">
                    <img ref={imageRef} className='w-full h-full' src={ME} alt="" />
                </div>
            </div>
        </div>
    )
}