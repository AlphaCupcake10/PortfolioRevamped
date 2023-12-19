import { useEffect, useRef, useState } from "react"
import { TransitionLink } from "../contexts/PageLoaderContext";
import Button from "./common/Button";
import { Canvas, } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Designation3D from "./models/Designation3D";


export default function Designation(props:{className?:string,mainDivRef?:React.RefObject<HTMLDivElement>})
{
    const title1Data = ['FRONT-END  DEVELOPER','3D  ANIMATOR',"GAME  DEVELOPER","UI  |  UX  DESIGNER"];
    let interval:number;
    
    const [phaseIndex,setPhaseIndex] = useState(0);
    const textRef = useRef<HTMLHeadingElement>(null);
    const frontTextRef = useRef<HTMLHeadingElement>(null);

    function startTimer()
    {
        clearInterval(interval);
        interval = setInterval(() => {
            setPhaseIndex((prev)=>{
                return (prev+1)%4;
            })
            return ()=>{
                clearInterval(interval);
            }
        },5500);
    }

    useEffect(()=>{
        startTimer();
    },[])
    useEffect(()=>{
        if(!textRef.current)return;
        if(!frontTextRef.current)return;
        textRef.current.innerText = title1Data[phaseIndex];
        let index = 0;
        let html = textRef.current.innerText.split("").map((val)=>{return `<span class='animChar' style='animation-delay: ${index++ * 25}ms;'>${val}</span>`;}).join("");
        textRef.current.innerHTML = html;
        frontTextRef.current.innerHTML = html;
    },[phaseIndex])

    return (
      <div className={`h-64 md:h-screen relative ${props.className}`}>
        {/* Layer 1 */}
        <div className='absolute w-full h-full top-0 left-0 -z-10 flex flex-col items-center justify-center pointer-events-none'>
            <h2 className='md:text-4xl'>I am a</h2>
            <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold overflow-hidden'>
                <span ref={textRef}>ASD</span>
            </h1>
            <div className='bg-red flex gap-5 mt-4 relative z-20'>
                <TransitionLink to='/projects'><Button color='primary' className='md:w-48'>PROJECTS</Button></TransitionLink>
                <Button color='secondary' className='md:w-48'>CONTACT ME</Button>
            </div>
        </div>

        {/* Layer 2 */}
        <div ref={props.mainDivRef} className='absolute w-full h-full top-0 left-0 z-0 pointer-events-none'>
            <Canvas camera={{ fov: 35 , position:[0,0,8]}} className='touch-none w-full h-full'>
                <hemisphereLight groundColor={0x6457c7} color={0xffffff} intensity={2.5}/>
                <Environment preset="city" />
                <Designation3D phaseIndex={phaseIndex}/>
            </Canvas>
        </div>

        {/* Layer 3 */}
        <div className='absolute w-full h-full top-0 left-0 z-10 flex flex-col items-center justify-center'>
            <h2 className='md:text-4xl'>I am a</h2>
            <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold overflow-hidden strokeText opacity-70'>
                <span ref={frontTextRef}>ASD</span>
            </h1>
            <div className='bg-red flex gap-5 mt-4 relative z-20'>
                <TransitionLink to='/projects'><Button color='primary' className='md:w-48'>PROJECTS</Button></TransitionLink>
                <Button color='secondary' className='md:w-48'>CONTACT ME</Button>
            </div>
        </div>
      </div>
    )
}