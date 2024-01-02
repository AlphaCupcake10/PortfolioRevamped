import { useEffect, useRef } from "react";
import ME from "../assets/Me1.png?url";
// import ME from "../assets/Me.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "./common/ScrollIndicator";
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
        }); // <- optional additional param, scopes all selector text inside the context to this component (default is document)
        
        return () => ctx.revert(); // cleanup! 
    }, []);

    return (
        <div className="lg:-mt-36">
            <ScrollIndicator />
            <div className='overflow-clip 2xl:-mb-[28rem] xl:-mb-[20rem] lg:-mb-[8rem] hidden lg:block'>
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
                <div className="w-full md:w-1/2 overflow-clip">
                    <img ref={imageRef} className='w-full h-full' src={ME} alt="" />
                </div>
            </div>
        </div>
    )
}