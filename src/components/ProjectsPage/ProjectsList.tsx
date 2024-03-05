import { useEffect, useRef } from "react"
import { gsap } from "gsap";

export default function ProjectsList() {
    const Projects = [
        {
            sectionTitle: "Web Development Projects",
            data: [
                {
                    title: "BUZZUP.",
                    hoverTitle: "BUZZUP.",
                    subTitle: "Combine images and audio for a vibrant, new social experience!",
                    link: "https://buzzup-phi.vercel.app/"
                },
                {
                    title: "PORTFOLIO SITE",
                    hoverTitle: "RECURSION?",
                    subTitle: "A website to showcase all my skills and work.",
                    link: "https://alphacupcake10-iframe-test.vercel.app/",
                    notBlank:true
                },
                {
                    title: "REGULARISE",
                    hoverTitle: "GET STUFF DONE",
                    subTitle: "Get Stuff Done.",
                    link: "https://regularise.vercel.app/"
                },
                {
                    title: "SPARK",
                    hoverTitle: "SPARK",
                    subTitle: "Special People Achieving Remarkable Knowledge",
                    link: "https://spark-backend-six.vercel.app/dashboard"
                },
                {
                    title: "JIVANAM",
                    hoverTitle: "LIFE.",
                    subTitle: "Make maternal health care facilities accessible to everyone including rural and other deprived regions of India.",
                    link: "https://jivanam.pythonanywhere.com/"
                }
            ]
        },
        {
            sectionTitle: "Game Development Projects",
            data: [
                {
                    title: "DIVING TEMPEST.",
                    hoverTitle: "PLAY ON YOUR BROWSER",
                    subTitle: "A fast paced action adventure 2D platformer with parkour mechanics and Sci-Fi Lore",
                    link: "https://alphacupcake10.vercel.app/game"
                },
                {
                    title: "LIGHT FRAGMENT",
                    hoverTitle: "OHH SHINEY",
                    subTitle: "A 2D top down shooter with abstract graphics.",
                    link: "https://youtu.be/LjXXAwHXpro?si=BhOGZC5NXT37nv1M"
                }
            ]
        },
        {
            sectionTitle: "3D Animation Projects",
            data: [
                {
                    title: "FRESCO XL",
                    hoverTitle: "FREELANCE",
                    subTitle: "The trailer was covered in reputable online articles and reached 100k + views on YouTube",
                    link: "https://youtu.be/jbCRmvzX6rg?si=FabNkOsJFhtBCrgY"
                },
                {
                    title: "MEET EGGZY",
                    hoverTitle: "EGGZY GOT LEGGZY",
                    subTitle: "A Short CGI Animation. All Modeled, Rigged , Animated and Rendered in Blender.",
                    link: "https://youtu.be/9LXVEXdaix8?si=f2vKLNXN2ZGiknu7"
                },
                {
                    title: "QUANTUM THRUST",
                    hoverTitle: "BRRRRR",
                    subTitle: "I tried to remake an old animation I made in 2019.",
                    link: "https://youtu.be/91xYJy3Mzm4?si=fc05VWGXGkGwJWAz"
                },
                {
                    title: "DEZI SHIFT",
                    hoverTitle: "OOOOOOO",
                    subTitle: "Futuristic Shoe Mockup in Blender",
                    link: "https://youtu.be/MhXs1C7o6iY?si=P5vZfrIs7tS4DquC"
                },
                {
                    title: "STRANDED",
                    hoverTitle: "IN SPACE",
                    subTitle: "Playing with realtime volumetrics with procedurally generated nebulae",
                    link: "https://youtu.be/2SW8swB77iY?si=oSCVZ-jL9BbIALyB"
                },
                {
                    title: "MORE STUFF....",
                    hoverTitle: "MORE STUFF....",
                    link: "https://drive.google.com/drive/folders/1VPACLToMruDkaoF7J6tsJWQqobnVXVvn?usp=drive_link"
                },
            ]
        }
    ]

    return (
        <>
            {
                Projects.map((project,index) => {
                    return (
                        <section key={index} className="my-24">
                            <section className="container mx-auto p-4">
                                <h1 className="font-bold text-xl text-primary">{project.sectionTitle}</h1>
                            </section>
                            {
                                project.data.map((val,key) => {
                                    return (
                                        <Comp key={key} val={val}></Comp>
                                    )
                                })
                            }
                        </section>
                    )
                })
            }
        </>
    )
}

function Comp(props:{val:{
    title: string;
    hoverTitle: string;
    subTitle: string;
    notBlank?:boolean,
    link: string;
} | {
    title: string;
    hoverTitle: string;
    link: string;
    notBlank?:boolean,
    subTitle?: undefined;
}})
{
    const compRef = useRef<HTMLAnchorElement>(null);
    useEffect(()=>{
        let ctx = gsap.context(() => {
            gsap.from(
                compRef.current,{
                    yPercent:100,
                    opacity:0,
                    ease:"power4.out",
                    duration:1,
                    scrollTrigger:{
                        trigger:compRef.current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
        })
        return () => ctx.revert(); // cleanup! 
    },[])
    return(
        <a ref={compRef} href={props.val.link} target={props.val.notBlank?"":"_blank"} className="info-tile px-4 md:px-8 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100">
            <div className="container relative mx-auto flex justify-between items-center">
                <div className="h-full w-full relative">
                    <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-12 group-hover:-translate-y-full duration-500">{props.val.title}</h1>
                    <div className="absolute h-full top-0 left-0 flex flex-col justify-center group-hover:translate-y-0 translate-y-full duration-500">
                        <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</h1>
                        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium opacity-70">{props.val.hoverTitle}</h1>
                    </div>
                </div>
                <p className="text-text/70 w-3/5 lg:group-hover:opacity-70 lg:opacity-0 transition-opacity text-xs md:text-base">
                    {props.val.subTitle}
                </p>
            </div>
        </a>
    )
}