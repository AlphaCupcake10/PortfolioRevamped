import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import Skills3D from "./models/Skills3D";

function Skills()
{
    const sectionRef = useRef<HTMLDivElement>(null);

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