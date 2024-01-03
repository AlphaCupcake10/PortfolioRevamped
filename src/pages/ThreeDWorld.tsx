import Navbar from '../components/Navbar';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from 'react';
import Experience3D from '../components/models/Experience3D';

function ThreeDWorld()
{
    const sectionRef = useRef<HTMLDivElement>(null);
    return (
    <>
        <Navbar />
        <div ref={sectionRef} className="h-[600vh] relative">
            <div className="mx-auto sticky top-0 h-screen pointer-events-none">
                <Canvas camera={{ fov: 25}} className='touch-none w-full grow'>
                    <hemisphereLight groundColor={0x6457c7} color={0xffffff} intensity={2.5}/>
                    <Environment preset="city" />
                    <Experience3D scrollRef={sectionRef}/>
                    {/* <ContactShadows opacity={.4} scale={5} blur={2.4} position-y={-.75}/> */}
                </Canvas>
            </div>
        </div>
    </>
  )
}

export default ThreeDWorld;