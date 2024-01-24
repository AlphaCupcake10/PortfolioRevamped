import { useEffect, useRef, useState } from "react"
import { TransitionLink } from "../contexts/PageLoaderContext";
import Button from "./common/Button";
import AnimatedText from "./common/AnimatedText";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Designation3D from "./models/Designation3D";

export default function Designation()
{    
    const [textRef,setTextRef] = useState<string>("LOREM"); 

    const [phaseIndex,setPhaseIndex] = useState(0);

    const phases = ['FRONT-END  DEVELOPER','3D  ANIMATOR',"GAME  DEVELOPER","UI  |  UX  DESIGNER"];

    useEffect(()=>{
        deltaPhase(0);
        resetTimer();
    },[])

    const isTransitioning = useRef(false);
    const intervalId = useRef(0);

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
            setTextRef(phases[prev]);
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
            setTextRef(phases[prev]);
            return prev;
        })
    }

    return (
      <div className={`h-screen relative flex flex-col justify-center items-center -mb-12 z-10`}>
        {/* Layer 1 */}
        <div className='absolute w-full h-full top-0 left-0 flex-col items-center justify-center flex z-10 sm:z-auto'>
            <h2 className='md:text-4xl'>I am a</h2>
            <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold overflow-clip'>
                <AnimatedText text={textRef}/>
            </h1>
            <div className='bg-red flex gap-5 mt-4 relative'>
                <TransitionLink to='/projects'><Button color='primary' className='md:w-48'>MY WORK</Button></TransitionLink>
                <TransitionLink to='/contact'><Button color='secondary' className='md:w-48'>CONTACT ME</Button></TransitionLink>
            </div>
        </div>
        {/* Layer 2 */}
        <div className='absolute w-full h-full top-0 left-0 pointer-events-none'>
            <Canvas camera={{ fov: 35 , position:[0,0,8]}} className='touch-none w-full h-full'>
                <hemisphereLight groundColor={0x6457c7} color={0xffffff} intensity={2.5}/>
                <Environment preset="city" />
                <Designation3D phaseIndex={phaseIndex}/>
            </Canvas>
        </div>
        {/* Layer 3 */}
        <div className='absolute w-full h-full top-0 left-0 flex-col items-center justify-center hidden sm:flex'>
            <h2 className='md:text-4xl'>I am a</h2>
            <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold overflow-clip opacity-70 strokeText'>
                <AnimatedText text={textRef}/>
            </h1>
            <div className='bg-red flex gap-5 mt-4 relative'>
                <TransitionLink to='/projects'><Button color='primary' className='md:w-48'>MY WORK</Button></TransitionLink>
                <TransitionLink to='/contact'><Button color='secondary' className='md:w-48'>CONTACT ME</Button></TransitionLink>
            </div>
        </div>
        <div className="container mx-auto flex justify-evenly md:justify-between items-end md:items-center z-10 h-128 pointer-events-none">
            <svg onClick={()=>{deltaPhase(-1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M30 12L19.4142 22.5858C18.6332 23.3668 18.6332 24.6332 19.4142 25.4142L30 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg onClick={()=>{deltaPhase(1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M18 12L28.5858 22.5858C29.3668 23.3668 29.3668 24.6332 28.5858 25.4142L18 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="flex z-10 gap-4">
            {
                phases.map((value,index)=>
                {
                    return(
                        <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-primary":"bg-primary/50"}`} key={value}></div>
                    )
                })
            }
        </div>
      </div>
    )
}