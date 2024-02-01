import { Canvas } from "@react-three/fiber"
import { Box, Environment, OrbitControls, Plane } from "@react-three/drei"
import { EffectComposer, N8AO } from "@react-three/postprocessing"
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier"
import Navbar from "../components/Navbar"

export default function ThreeDWorld() {
    return (
        <>
            <Navbar/>
            <div className="h-screen w-screen">
                <Canvas
                    className="h-screen w-screen"
                    shadows
                    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
                    camera={{ position: [0, 2, 20], fov: 32.5, near: 1, far: 100 }}
                >
                    <OrbitControls/>
                    <ambientLight intensity={1} />
                    <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
                    <directionalLight position={[0, 5, -4]} intensity={4} castShadow/>
                    <directionalLight position={[0, -15, -0]} intensity={4} color="red" castShadow/>
                    <Physics>
                        {
                            [0,0,0,0,0,0].map((val,index)=>{
                                return(
                                    <RigidBody key={index+val} colliders={"hull"} restitution={0}>
                                        <Box castShadow>
                                            <meshStandardMaterial roughness={0} color={0x0d64c1}></meshStandardMaterial>
                                        </Box>
                                    </RigidBody>
                                )
                            })
                        }

                        <CuboidCollider position={[0, -2, 0]} args={[200, 0.5, 200]}>
                            <Plane receiveShadow rotation={[Math.PI/180*-90,0,0]} position={[0,.49,0]} args={[400, 400]}>
                                <meshStandardMaterial color="grey"></meshStandardMaterial>
                            </Plane>
                        </CuboidCollider>
                    </Physics>
                    <Environment preset="city"/>
                    <EffectComposer disableNormalPass>
                        <N8AO color="black" aoRadius={2} intensity={2} />
                    </EffectComposer>
                </Canvas>
            </div>
        </>
    )
}
