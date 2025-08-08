import Navbar from '../components/Navbar';
import Button from '../components/common/Button';
import AboutMe from '../components/HomePage/AboutMe';
import { useEffect, useRef } from 'react';
import { TransitionLink } from '../contexts/PageLoaderContext';
import ParallaxBG from '../components/HomePage/ParallaxBG';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from '../components/common/AnimatedText';
import Footer from '../components/Footer';
import WorkExperience from '../components/HomePage/WorkExperience';
import ServicesSection from '../components/HomePage/ServicesSection';
import { SkillsSection } from '../components/HomePage/SkillsSection';
import Cursor from '../components/common/Cursor';
// import { useLenis } from '@studio-freight/react-lenis';
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
        },);
    

        return () => ctx.revert(); // cleanup! 
    
    }, []);

    // const lenis = useLenis();
    const aboutMeRef = useRef<HTMLDivElement>(null);

    return (
    <>
        <Navbar />
        <ParallaxBG>
            <div className='flex flex-col justify-center items-center'>
                <div ref={heroTextRef[2]} className='overflow-y-clip'><h1 className='text-xl md:text-4xl opacity-75'>Hey, I am</h1></div>
                <div ref={heroTextRef[1]} className='overflow-y-clip'><h1 className='text-3xl md:text-7xl font-extrabold uppercase'><AnimatedText loop refresh text={['AlphaCupcake10', 'Lakshman Sundar', 'not.lxm',"Lexy", "Sabko Nahi Milta", "Laksham"]}/></h1></div>
                
                <div ref={heroTextRef[0]} className='bg-red flex gap-5 mt-4'>
                    {/* <Button onClick={()=>{
                        aboutMeRef.current && lenis.scrollTo(aboutMeRef.current,{
                            duration: 2,
                            offset: -160,
                            force: true
                        });
                    }} color='primary' className='md:w-48'>ABOUT ME</Button> */}

                    <TransitionLink to='/3D'>
                        <Button color='primary' className='md:w-48'>EXPLORE IN 3D</Button>
                    </TransitionLink>
                    <TransitionLink to='/projects'>
                        <Button color='secondary' className='md:w-48'>PROJECTS</Button>
                    </TransitionLink>
                </div>
            </div>
        </ParallaxBG>
        <AboutMe sectionRef={aboutMeRef}/>
        <div className='bg-gradient-to-b from-accent to-primary h-96 z-30 flex justify-center items-center'>
            <div className='text-7xl font-bold overflow-clip'>
                <AnimatedText loop refresh text={['CREATE', 'INSPIRE', 'INNOVATE']}/>
            </div>
        </div>
        <WorkExperience />
        {/* <SkillsSection />
        <ServicesSection />
        <Footer /> */}
        <Cursor zIndex={-1}/>
    </>
  )
}

export default HomePage;