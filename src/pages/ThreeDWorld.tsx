import { Canvas } from "@react-three/fiber"
import Navbar from "../components/Navbar"
import Experience from "../components/models/Experience"
import { OrbitControls } from "@react-three/drei"

export default function ThreeDWorld() {
    return (
        <>
            <Navbar/>
            <div className="h-screen w-screen">
                <Canvas
                    camera={{position:[2,4,2]}}
                    className="h-screen w-screen"
                >
                    <OrbitControls/>
                    <Experience />
                </Canvas>
            </div>
        </>
    )
}
