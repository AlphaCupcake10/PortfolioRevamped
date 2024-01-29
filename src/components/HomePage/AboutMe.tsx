import { useEffect, useRef } from "react";
import ME1 from "../../assets/Me1.png?url";
import ME from "../../assets/Me.png?url";
// import ME from "../assets/Me.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "../common/ScrollIndicator";
import useIntersectionObserver from "../../hooks/useInterSectionObsever";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe()
{
    const age = "XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI";
    const about_me = "ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME";
    const alias = "IAMALPHACUPCAKE10IAMALPHACUPCAKE10IAMALPHACUPCAKE10";
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
                        xPercent:-5 - 2 * index
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

    let isIntersecting = useIntersectionObserver(imageRef,{threshold:.7});

    return (
        <div className="relative">
            <ScrollIndicator>
                <h1 className="text-xs opacity-50">Heyy Vsauce</h1>
            </ScrollIndicator>
            <div className='overflow-x-clip 2xl:-mb-[24rem] xl:-mb-[15rem] lg:-mb-[4rem] hidden lg:block'>
                <div ref={parentRef} className='w-max'>
                    <div ref ={refs[0]} className="overflow-y-clip">
                        <h3 ref ={insideRefs[0]} className='text-xl tracking-[50px] font-extrabold'>{age}</h3>
                    </div>
                    <div ref ={refs[1]} className="overflow-y-clip">
                        <h3 ref ={insideRefs[1]} className='mt-4 text-9xl font-extrabold'>{about_me}</h3>
                    </div>
                    <div ref ={refs[2]} className="overflow-y-clip">
                        <h3 ref ={insideRefs[2]} className='-mt-4 text-9xl font-extrabold opacity-75'>{alias}</h3>
                    </div>
                    <div ref ={refs[3]} className="overflow-y-clip">
                        <h3 ref ={insideRefs[3]} className='-mt-4 text-9xl font-extrabold opacity-50'>{bday}</h3>
                    </div>
                    <div ref ={refs[4]} className="overflow-y-clip">
                        <h3 ref ={insideRefs[4]} className='mt-4 text-xl tracking-[50px] font-extrabold'>{age}</h3>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto flex flex-row items-end gap-8 px-8">
                <div className='w-full lg:w-3/4'>
                    <div className="overflow-y-clip">
                        <h1 ref={MeRef[0]} className='text-xl sm:text-5xl font-extrabold mt-1'>LAKSHMAN <span className='gradient-text'>SUNDAR</span></h1>
                    </div>
                    <hr className='border-primary border-2 mt-4'/>
                    <div className="mt-4 flex flex-wrap gap-1">
                        {
                            ["3D Generalist","Frontend Developer","Designer","Game Developer"].map((value,index)=>{
                                return <div key={index} className="cursor-pointer fill-hover relative grow border-2 border-white/10 rounded-lg flex p-2 lg:p-4 justify-center hover:grow-[2] duration-300 text-xs"><span>{value}</span></div>
                            })
                        }
                    </div>
                    <p ref={MeRef[1]} className='text-justify mt-6 text-xs font-light md:text-base mb-4'>
                        Currently working as a freelance artist, constantly interested in a challenge. I am a kind of person who likes to view things from a neutrally different and virtually inclined perspective. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo nisl, luctus at risus eu, fermentum porta nulla.
                    </p>
                    <div className="flex gap-4">
                        <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/alphacupcake10/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clipPath="url(#clip0_17_68)">
                                    <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="currentColor"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_68">
                                    <rect width="48" height="48" fill="currentColor"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a className="hover:text-primary transition-colors" href='https://linktr.ee/AlphaCupcake10' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="currentColor" d="M18.89,32H21v8c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8H4.89c-1.52,0-2.48-1.64-1.75-2.97 L15.25,7.16c0.76-1.37,2.74-1.37,3.5,0l4.85,9.74l-6.46,12.13C16.41,30.36,17.37,32,18.89,32z"/><path fill="currentColor" d="M43.11,32H35v8c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8h2.11c1.52,0,2.48-1.64,1.75-2.97L24.3,16.9 l4.95-9.74c0.76-1.37,2.74-1.37,3.5,0l12.11,21.87C45.59,30.36,44.63,32,43.11,32z"/></svg>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 overflow-y-clip hidden lg:block relative">
                    <div className="group" ref={imageRef}>
                        <img className={`absolute top-0 left-0 z-10 w-full h-full duration-700 ${isIntersecting?"opacity-0":""}`} src={ME} alt="" />
                        <img className='w-full h-full white-outline' src={ME1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}