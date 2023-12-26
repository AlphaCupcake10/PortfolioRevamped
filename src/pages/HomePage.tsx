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
    const desRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {        
        let ctx = gsap.context(() => {
            gsap.fromTo(
                desRef.current,{
                    yPercent:10
                },
                {
                    yPercent:-10,
                    scrollTrigger:{
                        trigger:desRef.current,
                        start:"top 100%",
                        end:"bottom 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);


    return (
    <>
        <Navbar />
        <ParallaxBG>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl md:text-4xl opacity-75'>Hey, I am</h1>
                <h1 className='text-3xl md:text-7xl font-extrabold uppercase'>AlphaCupcake10</h1>
                <div className='bg-red flex gap-5 mt-4'>
                    <TransitionLink to='/3D'>
                        <Button color='primary' className='md:w-48'>EXPLORE IN 3D</Button>
                    </TransitionLink>
                    <TransitionLink to='/contact'>
                    <Button color='secondary' className='md:w-48'>CONTACT ME</Button>
                    </TransitionLink>
                </div>
            </div>
        </ParallaxBG>
        <Designation mainDivRef={desRef} className='sm:-mt-48 z-10'/>
        <AboutMe/>
        <Footer />
    </>
  )
}

export default HomePage;