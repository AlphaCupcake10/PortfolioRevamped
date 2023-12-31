import Navbar from '../components/Navbar';
import Designation from '../components/Designation';
import Button from '../components/common/Button';
import AboutMe from '../components/AboutMe';
import { useEffect, useRef } from 'react';
import { TransitionLink } from '../contexts/PageLoaderContext';
import ParallaxBG from '../components/ParallaxBG';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../components/Footer';
gsap.registerPlugin(ScrollTrigger);

function HomePage()
{
    const heroTextRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
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

        }, heroTextRef);
    

        return () => ctx.revert(); // cleanup! 
    
    }, []);

    return (
    <>
        <Navbar />
        <ParallaxBG>
            <div className='flex flex-col justify-center items-center'>
                <h1 ref={heroTextRef[2]} className='text-xl md:text-4xl opacity-75'>Hey, I am</h1>
                <h1 ref={heroTextRef[1]} className='text-3xl md:text-7xl font-extrabold uppercase'>AlphaCupcake10</h1>
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
        <Designation className='sm:-mt-48 z-10'/>
        <AboutMe/>
        <Footer />
    </>
  )
}

export default HomePage;