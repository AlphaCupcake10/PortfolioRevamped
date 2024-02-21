import { Canvas } from "@react-three/fiber"
// import Navbar from "../components/Navbar"
import Experience from "../components/models/Experience"
import Button from "../components/common/Button";
import { TransitionLink } from "../contexts/PageLoaderContext";

export default function ThreeDWorld() {

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
            document.exitFullscreen();
            }
        }
    }

    return (
        <>
            {/* <Navbar className="z-50"/> */}
            <div className="flex flex-col z-20 relative justify-center">
                <div className="h-64 sm:h-96 z-30 relative md:h-screen flex items-center justify-center">
                    <div
                        className="z-10 w-full h-full"
                    >
                        <Canvas
                            camera={{fov:35,aspect:1}}
                        >
                            <Experience />
                        </Canvas>
                    </div>
                </div>
            </div>
            <div className="sm:hidden p-8">
                <h1 className="text-xl font-bold">For Best Experience</h1>
                <p className="opacity-70">Toggle fullscreen and change to landscape</p>
                <Button className="mt-8 w-full" onClick={()=>toggleFullScreen()} color={"primary"}>Toggle Fullscreen</Button>
                <TransitionLink to={'/'}><Button className="mt-2 w-full" color={"secondary"}>Exit</Button></TransitionLink>
            </div>
            {/* <div className="md:hidden p-8">
                <h1 className="text-xl font-bold">Pixel Ratio</h1>
                <p className="opacity-70">Lower pixel ratio for better performance.</p>
                {
                    ["Low","Medium","High"].map((item,index)=>(
                        <Button key={index} className="mt-2 w-full" onClick={()=>setGraphics(index)} color={graphics===index?"primary":"secondary"}>{item}</Button>
                    ))
                }
            </div> */}
        </>
    )
}
