import Navbar from '../components/Navbar';
import Button from '../components/common/Button';
import AboutMe from '../components/AboutMe';
import { useEffect, useRef } from 'react';
import { TransitionLink } from '../contexts/PageLoaderContext';
import ParallaxBG from '../components/ParallaxBG';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from '../components/common/AnimatedText';
import video from '../assets/Banner.mp4?url'
import Footer from '../components/Footer';
gsap.registerPlugin(ScrollTrigger);

function HomePage()
{
    const heroTextRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        let ctx = gsap.context(() => {
            
            heroTextRef.forEach((ref,index)=>{
                if(!ref.current)return;
                gsap.from(ref.current,
                    {
                        y:-200,
                        opacity:0,
                        ease: "power4.out",
                        duration:4,
                        delay:.5 + index*.25
                    },
                )
            })
        },);
    

        return () => ctx.revert(); // cleanup! 
    
    }, []);

    const cardClass = "border-2 p-4 h-36 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";

    return (
    <>
        <Navbar />
        <ParallaxBG>
            <div className='flex flex-col justify-center items-center'>
                <div ref={heroTextRef[2]} className='overflow-y-clip'><h1 className='text-xl md:text-4xl opacity-75'>Hey, I am</h1></div>
                <div ref={heroTextRef[1]} className='overflow-y-clip'><h1 className='text-3xl md:text-7xl font-extrabold uppercase'><AnimatedText delay={200} text='AlphaCupcake10'/></h1></div>
                
                <div ref={heroTextRef[0]} className='bg-red flex gap-5 mt-4'>
                    <TransitionLink to='/3D'>
                        <Button color='primary' className='md:w-48'>EXPLORE IN 3D</Button>
                    </TransitionLink>
                    <TransitionLink to='/contact'>
                    <Button color='secondary' className='md:w-48'>CONTACT ME</Button>
                    </TransitionLink>
                </div>
            </div>
        </ParallaxBG>
        <AboutMe/>
        <div ref={servicesRef} className="h-128 bg-gradient-to-t from-primary to-accent grid items-center justify-center">
            <h1 className='text-xl sm:text-5xl lg:text-8xl font-extrabold mt-1 overflow-clip'>
                <AnimatedText refresh text='MY SERVICES'/>
            </h1>       
        </div>
        <div className="relative py-48">
            <div className="absolute right-0 top-0 h-full w-full lg:w-4/5 -z-10">
                <video src={video} className="w-full h-full object-cover" autoPlay muted loop/>
                <div className="bg-gradient-to-r from-background to-transparent top-0 left-0 absolute w-full h-full"/>
            </div>
            <div className='mx-auto container h-full flex flex-col justify-center p-4'>
                <h1 className='text-4xl lg:text-8xl font-extrabold mt-1'>3D <span className='gradient-text'>ANIMATION</span></h1>
                <h1 className='text-2xl lg:text-4xl opacity-50'>FREELANCE</h1>
                <div className="max-w-2xl flex flex-col flex-wrap gap-4 mt-16">
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass} w-48 grow`}>
                            <div className='font-bold'>
                                <span className="text-4xl">5</span> <span className='text-xl'>Years</span>
                            </div>
                            <div className='text-sm opacity-70'>
                                of Experience
                            </div>
                        </div>
                        <div className={`${cardClass} w-72 grow text-sm px-8`}>
                            <span className='opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga voluptates aspernatur quisquam facilis ad!</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass} grow`}>
                            <div className='font-bold'>
                                <span className="text-5xl">60+</span>
                            </div>
                            <div className='text-xs opacity-70'>
                                Complete Projects
                            </div>
                        </div>
                        <div className={`${cardClass} grow-[4] font-bold text-2xl`}>
                            <span className='text-center leading-[1]'>
                                3D PRODUCT<br/>
                                ANIMATION
                            </span>
                        </div>
                        <div className={`${cardClass} grow`}>
                            <div className='font-bold'>
                                <span className="text-5xl">50+</span>
                            </div>
                            <div className='text-xs opacity-70'>
                                Satisfied Clients
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default HomePage;