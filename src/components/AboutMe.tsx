import { useEffect, useRef } from "react";
import ME from "../assets/Me.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe()
{
    const age = "XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI";
    const about_me = "ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ";
    const alias = "IAMALPHACUPCAKE10IAMALPHACUPCAKE10IAMALPHACUPCAKE10IAMALPHACUPCAKE10";
    const bday = "0XA330XA330XA330XA330XA330XA330XA330XA33";

    const refs = [useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null)];

    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            refs.forEach((ref)=>{
                gsap.fromTo(
                    ref.current,{
                        xPercent:-10
                    },
                    {
                        xPercent:0,
                        scrollTrigger:{
                            trigger:ref.current,
                            start:"top 100%",
                            end:"bottom top",
                            scrub:true,
                            // markers:true
                        }
                    }
                )
            })

        }); // <- optional additional param, scopes all selector text inside the context to this component (default is document)
        
        return () => ctx.revert(); // cleanup! 
      }, []);


    return (
        <div className="lg:-mt-36">
            <div className='overflow-hidden -z-50 2xl:-mb-[30rem] xl:-mb-[22rem] lg:-mb-[10rem] hidden lg:block'>
                <div className='w-max'>
                    <h3 ref ={refs[0]} className='text-xl tracking-[50px] font-extrabold'>{age}</h3>
                    <h3 ref ={refs[1]} className='mt-4 text-9xl font-extrabold'>{about_me}</h3>
                    <h3 ref ={refs[2]} className='-mt-4 text-9xl font-extrabold opacity-75'>{alias}</h3>
                    <h3 ref ={refs[3]} className='-mt-4 text-9xl font-extrabold opacity-50'>{bday}</h3>
                    <h3 ref ={refs[4]} className='mt-4 text-xl tracking-[50px] font-extrabold'>{age}</h3>
                </div>
            </div>
            <div className="md:container md:mx-auto flex flex-col-reverse md:flex-row-reverse lg:flex-row items-end gap-8 px-8">
                <div className='w-full md:w-1/2'>
                    <hr className='border-primary border-2 mt-8'/>
                    <p className='text-justify mt-6 text-xs font-light md:text-base mb-12'>
                        Currently working as a freelance artist, constantly interested in a challenge. I am a kind of person who likes to view things from a neutrally different and virtually inclined perspective. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo nisl, luctus at risus eu, fermentum porta nulla.
                    </p>
                </div>
                <img className='w-full md:w-1/2 z-10' src={ME} alt="" />
            </div>
        </div>
    )
}