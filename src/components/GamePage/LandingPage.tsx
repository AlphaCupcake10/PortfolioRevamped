import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { TransitionLink } from '../../contexts/PageLoaderContext'
import Cursor from '../common/Cursor'
import TextButton from '../common/TextButton'
import { useRef, useState } from 'react'
import AbysalDecent from '../models/AbysalDecent'
import Button from '../common/Button'
import UserModal from './UserModal'
import { LeaderboardIcon , UserIcon , PlayIcon} from './Icons'
import Footer from '../Footer'

function LandingPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function openModal() {
        setIsModalOpen(true);
    }

    return (
        <>
            <UserModal 
                className='' 
                isOpen={isModalOpen} 
                closeModal={() => setIsModalOpen(false)}
                isSignedIn={isSignedIn} 
                setisSignedIn={(val:boolean)=>{
                    setIsSignedIn(val);
                }}
            />
            <Cursor />
            <div className="h-screen fixed top-0 left-0 p-16 z-40 flex items-end justify-center w-full pointer-events-none">
                <div className='gap-8 flex items-end justify-center pointer-events-auto'>
                    <UserIcon onClick={()=>{
                        openModal();
                    }}/>
                    <LeaderboardIcon/>
                    <PlayIcon/>
                </div>
            </div>
            {/* PHONE VERSION */}
            <section className={`${isModalOpen?"hidden":""} md:hidden h-screen flex flex-col justify-center items-center`}>
                <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">ABYSSAL<br />DECENT</h1>
                <div className="flex flex-col gap-4 mt-8">
                    <span onClick={()=>openModal()}>
                            <Button className='w-64' color={'primary'}>CREATE AN ACCOUNT</Button>
                    </span>
                    <TransitionLink to={'/game/play'}>
                        <Button className='w-64' color={'secondary'}>PLAYTEST NOW</Button>
                    </TransitionLink>
                </div>
            </section>
            {/* DESKTOP */}
            <section className="hidden md:block h-[1000vh] w-full relative z-10" ref={scrollRef}>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center strokeText leading-[.75]">ABYSSAL<br />DECENT</h1>
                    <div className="flex h-0">
                        <div>
                            {
                                !isSignedIn && 
                                <TextButton className='mt-8 w-64 inline' onClick={()=>openModal()}>CREATE AN ACCOUNT</TextButton>
                            }
                            <TransitionLink to={'/game/play'}>
                                <TextButton className='mt-8 w-64'>PLAYTEST NOW</TextButton>
                            </TransitionLink>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75] strokeText">LOREM<br />IPSUM</h1>
                </div>
                <div className="h-[700vh]"/>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75] strokeText">ABYSSAL<br />DECENT</h1>
                </div>
            </section>
            <div className="h-screen w-screen fixed z-0 top-0 left-0 pointer-events-none hidden md:block">
                <Canvas
                    camera={{ fov: 10, aspect: 1 }}
                    shadows
                >
                    <AbysalDecent scrollRef={scrollRef} />
                    <EffectComposer>
                        <Bloom mipmapBlur intensity={1.2} />
                    </EffectComposer>
                </Canvas>
            </div>
            <section className="hidden md:block h-[1000vh] w-full absolute top-0 left-0 bg-black -z-10" >
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">ABYSSAL<br />DECENT</h1>
                    <div className="flex h-0"/>
                </div>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">LOREM<br />IPSUM</h1>
                </div>
                <div className="h-screen flex justify-end gap-4 container mx-auto">
                    <div className="h-full w-1/2 flex flex-col justify-center">
                        <h1 className="opacity-70 tracking-tighter text-[2vw] leading-[1]">WHAT IS</h1>
                        <h1 className="font-bold tracking-tighter text-[4vw] leading-[1]">ABYSSAL DECENT?</h1>
                        <p className="mt-4 opacity-70">
                            A fast paced action thriller based on unsual physics with a Sci-Fi premise.
                            <br />
                            It started out as a project for The Brackeys Game Jam 2023.2. I decided to keep working on it after the jam.It eventually turned into a full fledged game with a story and a lot of content.
                        </p>
                    </div>
                </div>
                <div className="h-screen flex justify-start gap-4 container mx-auto">
                    <div className="h-full w-1/2 flex flex-col justify-center">
                        <h1 className="font-bold tracking-tighter text-[18vw] text-center leading-[.75]">LOREM<br />IPSUM</h1>
                    </div>
                </div>
                <div className="h-screen flex justify-start gap-4 container mx-auto">
                    <div className="h-full w-2/5 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold tracking-tighter text-[4vw] leading-[1]">TECH STACK</h1>
                        <div className="flex gap-4">
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">UNITY</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">NODEJS</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">EXPRESS</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">MONGODB</div>
                        </div>
                        <p className="mt-4 opacity-70">The game itself is made using Unity, but the backend is an Express Server with NodeJS and MongoDB to store information such as the leaderboard and userdata</p>
                    </div>
                </div>
                <div className="h-screen flex justify-end gap-4 container mx-auto">
                    <div className="h-full w-1/2 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold tracking-tighter text-[4vw] leading-[1]">MULTIPLATFORM</h1>
                        <h1 className="mb-4 text-[1vw] leading-[1] opacity-70">All you need is a browser to run it.</h1>
                        <div className="flex gap-4">
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">WINDOWS</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">LINUX</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">ANDROID</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">IOS</div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex justify-end gap-4 container mx-auto">
                    <div className="h-full w-2/5 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold text-[4vw] leading-[1]">ONLINE</h1>
                        <h1 className="mb-4 text-[1vw] leading-[1] opacity-70">Compare your records in the Leaderboard, Allow cross-save between platforms</h1>
                        <div className="flex gap-4">
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">LEADERBOARD</div>
                            <div className="bg-background/50 p-3 border rounded border-text/10 grow text-center">CROSS-SAVES</div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex justify-end gap-4 container mx-auto">
                    <div className="h-full w-2/5 flex flex-col justify-center">
                        <h1 className="mb-4 font-bold text-[4vw] leading-[1]">FEEL THE RUSH</h1>
                        <h1 className="mb-4 text-[1vw] leading-[1] opacity-70">Manipulate Space and Time</h1>
                    </div>
                </div>
                <div className="h-screen"/>
                <div className="h-screen flex items-center justify-center flex-col gap-4">
                    <h1 className="font-bold tracking-tighter text-[15vw] text-center leading-[.75]">ABYSSAL<br />DECENT</h1>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default LandingPage