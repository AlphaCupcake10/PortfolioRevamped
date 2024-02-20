import { Canvas } from "@react-three/fiber"
import Navbar from "../components/Navbar"
import Experience from "../components/models/Experience"

export default function ThreeDWorld() {
    return (
        <>
            <Navbar className="z-50"/>
            <div className="flex flex-col justify-center">
                <div className="h-64 sm:h-96 z-30 relative md:h-screen">
                    <Canvas
                            camera={{fov:35,aspect:1}}
                            className="h-full w-full z-10"
                            >
                        <Experience />
                    </Canvas>
                </div>
            </div>
            <div className="sm:hidden p-8">
                <h1 className="text-xl font-bold">For Best Experience</h1>
                <p className="opacity-70">Toggle fullscreen and change to landscape</p>
            </div>
        </>
    )
}
