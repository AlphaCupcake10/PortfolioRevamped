import { TransitionLink } from '../../contexts/PageLoaderContext';
import AnimatedText from '../common/AnimatedText';

function MyComponent()
{
    const cardClass = "border-2 p-4 h-36 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";
    const cardClass2 = "border-2 p-4 h-12 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";

    return(
        <>
            <div className="h-128 bg-gradient-to-t from-primary to-accent grid items-center justify-center">
            <h1 className='text-xl sm:text-5xl lg:text-8xl font-extrabold mt-1 overflow-clip'>
                <AnimatedText refresh text='MY SERVICES'/>
            </h1>       
        </div>
        <div className="relative py-36">
            <div className="absolute right-0 top-0 h-full w-full lg:w-4/5 -z-10 flex items-center overflow-y-clip">
                <div className="h-[300%]">
                    <video src={'https://github.com/AlphaCupcake10/PortfolioRevamped/raw/main/src/assets/Banner.mp4'} className="w-full top-0 sticky h-screen object-cover" autoPlay muted loop/>
                </div>
                <div className="bg-gradient-to-r from-background to-transparent top-0 left-0 absolute w-1/2 h-full"/>
            </div>
            <div className='mx-auto container h-full flex flex-col justify-center p-4 md:p-8 lg:p-8'>
                <h1 className='text-lg lg:text-2xl opacity-50'>MY SERVICES</h1>
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
                            <span className='opacity-70'>I create stylized product animations, infusing dynamic motion and vibrant colors to highlight unique features, ensuring effective brand communication.</span>
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
                        <a target='_blank' href='https://www.fiverr.com/alphacupcake' className={`${cardClass} hover:grow-[16] duration-300 before:bg-[#1DBF73] grow-[4] font-bold text-2xl`}>
                            <span className='text-center leading-[1]'>
                                3D PRODUCT<br/>
                                ANIMATION
                            </span>
                        </a>
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
        <div className="relative py-36">
            <div className="absolute right-0 top-0 h-full w-full lg:w-4/5 -z-10 flex items-center overflow-y-clip">
                <div className="h-[300%]">
                    <video src={'https://github.com/AlphaCupcake10/PortfolioRevamped/raw/main/src/assets/Gaem.mp4'} className="w-full top-0 sticky h-screen object-cover" autoPlay muted loop/>
                </div>
                <div className="bg-gradient-to-r from-background to-transparent top-0 left-0 absolute w-1/2 h-full"/>
            </div>
            <div className='mx-auto container h-full flex flex-col justify-center p-4 md:p-8 lg:p-8'>
                <h1 className='text-lg lg:text-2xl opacity-50'>MY SERVICES</h1>
                <h1 className='text-4xl lg:text-8xl font-extrabold mt-1'>GAME <span className='gradient-text'>DEVELOPMENT</span></h1>
                <div className="max-w-2xl flex flex-col flex-wrap gap-4 mt-16">
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass} w-48 grow`}>
                            <div className='font-bold'>
                                <span className="text-4xl">6</span> <span className='text-xl'>Years</span>
                            </div>
                            <div className='text-sm opacity-70'>
                                of Experience
                            </div>
                        </div>
                        <div className={`${cardClass} w-72 grow text-sm px-8`}>
                            <span className='opacity-70'>Since I was 12, I've always been hooked on the idea of game development. The joy of making something interactive has kept my creativity flowing.</span>
                        </div>
                    </div>
                    <div className={`cursor-pointer border-2 p-4 h-64 border-white/10 rounded-lg [&>*]:z-10 [&>*]:absolute hover:before:w-full before:w-0 before:absolute before:duration-300 before:top-0 before:right-0 hover:before:left-0 before:scale-150 before:rounded-full overflow-clip before:h-full before:bg-gradient-to-tr before:from-primary before:to-accent relative z-0 bg-background/20 backdrop-blur-xl grow group`}>
                        <div className='absolute top-0 left-0 w-full h-full group-hover:opacity-0 flex flex-col justify-center items-center duration-300'>
                            <h1 className='text-xl md:text-3xl opacity-70'>LATEST PROJECT</h1>
                            <h1 className='text-3xl md:text-5xl font-bold'>ABYSSAL DESCENT</h1>
                        </div>
                        <TransitionLink to={'/game'} className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center duration-300'>
                            <h1 className='text-lg md:text-2xl md:font-bold'>PLAY ON YOUR</h1>
                            <h1 className='text-4xl md:text-6xl font-bold'>BROWSER</h1>
                        </TransitionLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative py-36">
            <div className="absolute right-0 top-0 h-full w-full lg:w-4/5 -z-10 flex items-center overflow-y-clip">
                <div className="h-[300%]">
                    <img alt='' src="https://i.vimeocdn.com/video/626610457-503991c15fbd9d9221390f50d174c67dfd65d52037a79560b4a454916e21784a-d?mw=1300&mh=731" className="w-full top-0 sticky h-screen object-cover"/>
                </div>
                <div className="bg-gradient-to-r from-background to-transparent top-0 left-0 absolute w-1/2 h-full"/>
            </div>
            <div className='mx-auto container h-full flex flex-col justify-center p-4 md:p-8 lg:p-8'>
                <h1 className='text-lg lg:text-2xl opacity-50'>MY SERVICES</h1>
                <h1 className='text-4xl lg:text-8xl font-extrabold mt-1'>WEB <span className='gradient-text'>DEVELOPMENT</span></h1>
                <div className="max-w-2xl flex flex-col flex-wrap gap-4 mt-16">
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass} w-48 grow`}>
                            <div className='font-bold'>
                                <span className="text-4xl">1</span> <span className='text-xl'>Year</span>
                            </div>
                            <div className='text-sm opacity-70'>
                                of Experience
                            </div>
                        </div>
                        <div className={`${cardClass} w-72 grow text-sm px-8`}>
                            <span className='opacity-70'>Creative Frontend Web Developer specializing in captivating design elements to enhance user experience. Experienced in blending aesthetic appeal with functional interfaces to bring visions to life.</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            ReactJS
                        </div></div>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            ThreeJS
                        </div></div>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            Tailwind CSS
                        </div></div>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            React 3 Fiber
                        </div></div>
                    </div>
                    <div className={`cursor-pointer border-2 p-4 h-36 border-white/10 rounded-lg fill-hover-absolute relative z-0 bg-background/20 backdrop-blur-xl grow group before:duration-500`}>
                        <TransitionLink to={'/projects'} className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center duration-300'>
                            <h1 className='text-lg md:text-2xl'>VIEW ALL</h1>
                            <h1 className='text-xl md:text-3xl font-bold'>PROJECTS</h1>
                        </TransitionLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyComponent;
