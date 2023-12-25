import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import Skills3D from "./models/Skills3D";

gsap.registerPlugin(ScrollTrigger);

function Skills()
{
    const progressRef = useRef<HTMLHRElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            gsap.fromTo(
                progressRef.current,{
                    scaleX:0
                },
                {
                    scaleX:1,
                    scrollTrigger:{
                        trigger:sectionRef.current,
                        start:"top 0%",
                        end:"bottom 100%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);
    return (
        <div ref={sectionRef} className="h-[600vh] -z-10 relative">
            <div className="mx-auto sticky top-0 h-screen pointer-events-none">
                <Canvas camera={{ fov: 25}} className='touch-none w-full grow'>
                    <hemisphereLight groundColor={0x6457c7} color={0xffffff} intensity={2.5}/>
                    <Environment preset="city" />
                    <Skills3D scrollRef={sectionRef}/>
                    <ContactShadows opacity={.4} scale={5} blur={2.4} position-y={-.75}/>
                </Canvas>
            </div>
        </div>
  )
}

export default Skills;