import Button from '../components/common/Button';
import Navbar from '../components/Navbar';

function ProjectsPage()
{
    return (
    <>
        <Navbar />
        <div className='md:container md:mx-auto'>
            <div className="w-full h-160 flex flex-col justify-center">
                <h2 className='text-4xl'>Hey, I am</h2>
                <h1 className='text-5xl font-extrabold mt-1'>LAKSHMAN <span className='gradient-text'>SUNDAR</span></h1>
                <div className='bg-red flex gap-5 mt-4'>
                    <Button color='primary' className='w-48'>EXPLORE IN 3D</Button>
                    <Button color='secondary' className='w-48'>ABOUT ME</Button>
                </div>
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </div>
    </>
  )
}

export default ProjectsPage;