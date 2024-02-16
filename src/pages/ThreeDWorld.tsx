import { Canvas } from "@react-three/fiber"
import Navbar from "../components/Navbar"
import Experience from "../components/models/Experience"

export default function ThreeDWorld() {
    return (
        <>
            <Navbar/>
            <div className="h-screen w-screen">
                <Canvas
                    camera={{position:[2,4,2],fov:35}}
                    className="h-screen w-screen"
                >
                    <Experience />
                </Canvas>
            </div>
        </>
    )
}
