import { ReactNode, RefObject, useEffect, useRef } from "react"
import { gsap } from "gsap";

function WorkExperience()
{
    const experience = [
        {
            title: "STUDIO FOUR EIGHT SEVEN",
            hoverTitle: "FRONT-END DEVELOPER",
            type: "INTERN",
            subTitle: <>
                <h1 className="font-bold">AUG 2023 - OCT 2023</h1>
                <div className="mt-4">Shopify Ecosystem, Shopify Liquid Templating, Shopify Ajax API, Component Creation for Shopify Theme Editor <br className="mt-4"/>Brands I've worked with:GetVitalPlus,YesYouCanDrinks</div>
            </>,
            link: "https://www.linkedin.com/company/foureightseven/about/"
        },
        {
            title: "FIVERR",
            hoverTitle: "PRODUCT ANIMATOR",
            type: "FREELANCE",
            subTitle: <>
                <h1 className="font-bold">SEPT 2021 - PRESENT</h1>
                <div className="mt-4">
                    <ul className="">
                        <li>Seller in the 3D Product Animations Sub Category.</li>
                        <li>Worked on 50+ individual Projects with 40+ different clients.</li>
                        <li>The trailers were covered in reputable online articles and reached 100k + views on YouTube</li>
                    </ul>
                </div>
            </>,
            link: "https://www.fiverr.com/alphacupcake"
        },
        {
            title: "TROPPOLO",
            hoverTitle: "UI | UX DESIGN",
            type: "INTERN",
            subTitle: <>
                <h1 className="font-bold">APRIL 2023 - JUNE 2023</h1>
                <div className="mt-4">
                    <ul>
                        <li>Designed 14+ screens for the mobile app in Figma.</li>
                        <li>Devised an elaborate UX system for the specific needs of the Mobile App.</li>
                    </ul>
                </div>
            </>,
            link: ""
        }
    ]
    const compRefs = [useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null)]
    useEffect(()=>{
        let ctx = gsap.context(() => {
            compRefs.forEach((ref,index)=>{
                if(ref.current === null)return;
                gsap.from(
                    ref.current,{
                        yPercent:100,
                        opacity:0,
                        ease:"power4.out",
                        delay:index*.1,
                        duration:1,
                        scrollTrigger:{
                            trigger:ref.current,
                            start:"top 100%",
                            end:"bottom top",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })
        })
        return () => ctx.revert(); // cleanup! 
    },[])

    return (
        <section className="my-24">
            <h1 className="container px-8 mx-auto font-bold text-primary text-3xl mb-8">WORK EXPERIENCE</h1>
            {
                experience.map((val, key) => {
                    return (
                        <Comp refElement={compRefs[key]} val={val} key={key}></Comp>
                    )
                })
            }
        </section>
    )
}

function Comp(props:{val:{title: string,hoverTitle: string,subTitle: ReactNode,link: string,type:string},refElement:RefObject<HTMLAnchorElement>})
{
  return (
    <a ref={props.refElement} href={props.val.link} target="_blank" className="py-8 px-4 2xl:py-0 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-left after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100">
        <div className="container relative mx-auto flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
            <div className="2xl:py-8 2xl:group-hover:-translate-y-full duration-500">
                <h1 className="flex items-center gap-8"><span className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</span><span className="font-bold opacity-70">{props.val.type}</span></h1>
            </div>
            <div className="2xl:py-8 2xl:hidden opacity-70">
                <h1 className="flex items-center gap-8"><span className="text-md md:text-xl lg:text-3xl font-bold tracking-tighter">{props.val.hoverTitle}</span></h1>
            </div>
            <div className="hidden 2xl:flex flex-col justify-center translate-y-full group-hover:translate-y-0 absolute top-0 left-0 w-full h-full duration-500">
                <h1 className="flex items-center gap-8"><span className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</span><span className="font-bold opacity-70">{props.val.type}</span></h1>
                <h1 className="flex items-center gap-8 opacity-80"><span className="text-md md:text-xl lg:text-3xl font-bold tracking-tighter">{props.val.hoverTitle}</span></h1>
            </div>
            <div className="2xl:py-8 w-full 2xl:w-96 text-xs md:text-sm opacity-90">
                {props.val.subTitle}
            </div>
        </div>
    </a>
  )
}

export default WorkExperience