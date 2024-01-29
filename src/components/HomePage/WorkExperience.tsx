import Button from '../common/Button'

function WorkExperience()
{
  return (
    <section className='container relative mx-auto py-24 px-4'>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold relative">WORK EXPERIENCE<span className='gradient-text'>.</span>
                <div className="bg-gradient-to-r from-primary to-accent h-1 w-full mt-2"/>
            </h1>
            <div className="flex flex-wrap mt-8 gap-6 justify-center items-center">
                <div className="bg-background rounded-xl border-2 border-text/10 p-8 w-160 group flex flex-col justify-between">
                    <div>
                        <h1 className='text-sm md:text-md opacity-70'>SEPT 2021 - PRESENT</h1>
                        <h1 className='text-xl md:text-3xl font-bold'>Freelance</h1>
                        <h1 className='text-base md:text-xl text-primary'>3D Product Animation</h1>
                        <ul className='opacity-70 list-disc p-8 text-xs md:text-base'>
                            <li>Seller in the 3D Product Animations Sub Category.</li>
                            <li>Worked on 60+ individual Projects with 50+ different clients.</li>
                            <li>The trailers were covered in reputable online articles and reached 100k + views on YouTube</li>
                        </ul>
                    </div>
                    <a href="https://www.fiverr.com/alphacupcake" target='_blank'>
                        <Button className='w-full' color={'primary'}>
                            View Details
                        </Button>
                    </a>
                </div>
                <div className="bg-background rounded-xl border-2 border-text/10 p-8 w-160 group flex flex-col justify-between">
                    <div>
                        <h1 className='text-sm md:text-md opacity-70'>AUG 2023 - OCT 2023</h1>
                        <h1 className='text-xl md:text-3xl font-bold'>Studio Four Eight Seven</h1>
                        <h1 className='text-base md:text-xl text-primary'>Frontend Developer Intern</h1>
                        <ul className='opacity-70 list-disc p-8 text-xs md:text-base'>
                            <li>
                                Shopify Ecosystem, Shopify Liquid Templating, Shopify Ajax API,
                                Component Creation for Shopify Theme Editor
                            </li>
                            <li>
                                Brands I've worked with :
                                <br/>
                                <a href="https://getvitalplus.com/" target='_blank'>GetVitalPlus</a>, <a href="https://yesyoucandrinks.com/" target='_blank'>YesYouCanDrinks</a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://www.linkedin.com/company/foureightseven/about/" target='_blank'>
                        <Button className='w-full' color={'primary'}>
                            View Details
                        </Button>
                    </a>
                </div>
                <div className="bg-background rounded-xl border-2 border-text/10 p-8 w-160 group flex flex-col justify-between">
                    <div>
                        <h1 className='text-sm md:text-md opacity-70'>APRIL 2023 - JUNE 2023</h1>
                        <h1 className='text-xl md:text-3xl font-bold'>Troppolo</h1>
                        <h1 className='text-base md:text-xl text-primary'>UI | UX Intern</h1>
                        <ul className='opacity-70 list-disc p-8 text-xs md:text-base'>
                            <li>Designed 14+ screens for the mobile app in Figma.</li>
                            <li>Devised an elaborate UX system for the specific needs of the Mobile App.</li>
                        </ul>
                    </div>
                    <Button className='w-full' color={'primary'}>
                        View Details
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience