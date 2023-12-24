import Navbar from '../components/Navbar';
import Designation from '../components/Designation';
import BG from "../assets/BG.png?url";
import BGFront from "../assets/Front.png?url";
import BGFront2 from "../assets/Front2.png?url";
import Button from '../components/common/Button';
import AboutMe from '../components/AboutMe';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from '../components/Skills';
gsap.registerPlugin(ScrollTrigger);

function HomePage()
{
    const refs = [useRef<HTMLHeadingElement>(null),useRef<HTMLDivElement>(null)];
    const BGFrontRef = useRef<HTMLImageElement>(null);
    const BGFront2Ref = useRef<HTMLImageElement>(null);
    
    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            gsap.fromTo(
                refs[0].current,{
                    yPercent:0
                },
                {
                    yPercent:-300,
                    scrollTrigger:{
                        trigger:refs[0].current,
                        start:"top 40%",
                        end:"bottom 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                refs[1].current,{
                    yPercent:10
                },
                {
                    yPercent:-10,
                    scrollTrigger:{
                        trigger:refs[1].current,
                        start:"top 100%",
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
        <Navbar />
        <div className='md:container md:mx-auto flex h-screen flex-col justify-center items-center'>
            <img ref={BGFront2Ref} className='absolute top-0 -z-10 w-full h-full object-cover' src={BGFront2} alt="" />
            <div className='absolute top-0 w-full h-full -z-20' ref={BGFrontRef}>
                <img className='w-full h-full object-cover' src={BGFront} alt="" />
                <div className="h-48 bg-background"></div>
            </div>
            <img className='absolute top-0 -z-30 w-full h-full object-cover' src={BG} alt="" />
            <div className="-z-10 w-full h-full absolute top-0 left-0 bg-gradient-to-t from-background to-background/50"></div>
            <div className='flex flex-col justify-center items-center' ref={refs[0]}>
                <h1 className='text-xl md:text-4xl opacity-75'>Hey, I am</h1>
                <h1 className='text-3xl md:text-7xl font-extrabold uppercase'>AlphaCupcake10</h1>
                <div className='bg-red flex gap-5 mt-4'>
                    <Button color='primary' className='md:w-48'>EXPLORE IN 3D</Button>
                    <Button color='secondary' className='md:w-48'>ABOUT ME</Button>
                </div>
            </div>
        </div>
        <Designation mainDivRef={refs[1]} className='sm:-mt-48 z-10'/>
        <AboutMe/>
        <Skills/>
        <footer className='bg-primary p-4 flex justify-center text-xs md:text-base'>Designed & Developed by AlphaCupcake10 ©</footer>
    </>
  )
}

export default HomePage;