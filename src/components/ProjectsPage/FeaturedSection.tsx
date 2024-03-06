import { useEffect, useRef, useState } from 'react';
import BUZZUPBG from '../../assets/Buzzup.jpg'
import Button from '../common/Button'
import { TransitionLink } from '../../contexts/PageLoaderContext';
import { Canvas } from '@react-three/fiber';
import Bee from '../models/Bee';

export default function FeaturedSection()
{
    const [phaseIndex,setPhaseIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null)
    const phases = ['GAEM','BUZZUP',"CHROMA"];

    useEffect(()=>{
        deltaPhase(0);
        resetTimer();
    },[])

    const isTransitioning = useRef(false);
    const intervalId = useRef<any>(0);

    function resetTimer()
    {
        clearInterval(intervalId.current);
        intervalId.current = setInterval(()=>{
            deltaPhase(1)
        },5000)   
    }

    function deltaPhase(delta:number)
    {
        if(isTransitioning.current)return;
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, (500));
        setPhaseIndex(prev=>{
            prev += delta;
            prev %= phases.length;
            if(prev < 0)prev = phases.length - 1;
            return prev;
        })
    }
    function setPhase(val:number)
    {
        if(isTransitioning.current)return;
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, (500));
        setPhaseIndex(prev=>{
            prev = val;
            prev %= phases.length;
            if(prev < 0)prev = phases.length - 1;
            return prev;
        })
    }

  return (
    <>
        <section className="h-screen flex flex-col items-center justify-between p-4 sm:pt-36 pb-16">
            <h1 className='z-20 font-bold opacity-70'>FEATURED PROJECTS</h1>
            <div className="container mx-auto flex justify-evenly md:justify-between items-end md:items-center z-20 h-128 pointer-events-none">
                <svg onClick={()=>{deltaPhase(-1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M30 12L19.4142 22.5858C18.6332 23.3668 18.6332 24.6332 19.4142 25.4142L30 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg onClick={()=>{deltaPhase(1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M18 12L28.5858 22.5858C29.3668 23.3668 29.3668 24.6332 28.5858 25.4142L18 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {/* <div className="w-full absolute origin-left h-1 bg-primary scale-x-50 bottom-0"/> */}
            <div className="flex z-20 gap-4">
                {
                    phases.map((value,index)=>
                    {
                        if(phaseIndex == 1)
                        {
                            return <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-[#faa214]":"bg-[#faa214]/50"}`} key={value}></div>
                        }
                        return(
                            <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-primary":"bg-primary/50"}`} key={value}></div>
                        )
                    })
                }
            </div>
            <div className="absolute top-0 left-0 h-full w-full overflow-clip z-10">
            <div style={{translate:`-${(phaseIndex)}00vw 0`}} className="w-[300vw] h-full flex transition-all duration-500">
                <div className="w-[100vw] h-full relative flex flex-col justify-center items-center">
                    <div className="absolute top-0 left-0 h-3/4 w-full bg-gradient-to-b from-background to-transparent -z-10"/>
                    <video src={"https://github.com/AlphaCupcake10/PortfolioRevamped/raw/main/src/assets/Gaem.mp4"} className="absolute top-0 left-0 -z-20 w-full h-full object-cover" autoPlay muted loop/>
                    <h1 className='text-5xl lg:text-8xl font-bold tracking-tighter text-center'>ABYSSAL DESCENT</h1>
                    <h1 className='text-4xl lg:text-6xl font-bold opacity-70 tracking-tighter'>RUNS ON WEBGL</h1>
                    <TransitionLink to={'/game'}>
                        <Button color='primary' className='mt-8 w-48'>PLAYTEST NOW</Button>
                    </TransitionLink>
                </div>
                <div className="w-[100vw] h-full relative flex flex-col md:flex-row sm:justify-center items-center p-4 lg:px-32 xl:px-64">
                    {/* <ModelCanvas className=''/> */}
                    <div className='w-full h-96' ref={ref}>
                        <Canvas camera={{fov:35,position:[0,0,6]}}>
                            <Bee CanvasRef={ref}/>
                        </Canvas>
                    </div>
                    <img src={BUZZUPBG} className="absolute top-0 left-0 -z-20 w-full h-full object-cover"/>
                    <div className="w-full flex flex-col justify-center">
                        <h1 className='animate left font-black text-6xl md:text-9xl leading-tight'>BUZZUP<span className='accent-gradient background-clip-text'>.</span></h1>
                        <h1 className='animate left delay-1 font-extrabold text-2xl md:text-5xl leading-tight'>It's an <span className='accent-gradient background-clip-text'>Audio Thing.</span></h1>
                        <p className='animate left delay-2 font-light opacity-70 text-sm md:text-base mt-2'>Combine images and audio for a vibrant, new social experience!</p>
                        <div className="flex gap-4 mt-4">
                            <a href='https://buzzup-phi.vercel.app/' target='_blank' className='bg-[#faa214] w-64 rounded-xl px-4 py-2.5 md:py-4 md:px-6 hover:scale-105 transition-transform active:scale-95 text-xs md:text-base grid place-content-center'>VISIT</a>
                        </div>
                    </div>
                </div>
                <div className="w-[100vw] h-full relative flex flex-col justify-center items-center">
                    <div className="absolute top-0 left-0 h-3/4 w-full bg-gradient-to-b from-background to-transparent -z-10"/>
                    <video src={"https://github.com/AlphaCupcake10/PortfolioRevamped/raw/main/src/assets/Banner.mp4"} className="absolute top-0 left-0 -z-20 w-full h-full object-cover" autoPlay muted loop/>
                    <h1 className='text-5xl lg:text-8xl font-bold tracking-tighter text-center'>QUANTUM THRUST</h1>
                    <h1 className='text-2xl lg:text-5xl font-bold opacity-70 tracking-tighter'>A BLENDER ANIMATION</h1>
                    <a target='_blank' href="https://youtu.be/91xYJy3Mzm4?si=r9pUXB2j3fMVU1Nq">
                        <Button color='primary' className='mt-8 w-48'>WATCH</Button>
                    </a>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}