import { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'
import axios from '../../axios'
import { gsap } from "gsap";
import { toast } from 'react-toastify';
import { TransitionLink } from '../../contexts/PageLoaderContext';


function LeaderboardPage() {

    const [data,setData] = useState<{
        username: string;
        time: number;
    }[]>([]);

    useEffect(() => {
        try {
            axios.get('/leaderboard').then((res) => {
                if(res.status !== 200)return;
                setData(res.data);
            });
        }
        catch (err) {
            toast.error('Failed to fetch leaderboard data');
            console.log(err);
        }
    }, [])


    return (
        <>
            <Navbar margin/>
            <TransitionLink to={'/game'}><h1 className='hover:text-primary transition-colors cursor-pointer uppercase container mx-auto text-3xl font-bold'><span>{"< "}</span>Leaderboard</h1></TransitionLink>
            <div className="flex flex-col mt-16">
                {
                    data.length > 0 && data.map((val,index) => {
                        return (
                            <Comp val={val} key={index} index={index}></Comp>
                        )
                    })
                }
                {
                    data.length === 0 && <h1 className='text-center'>No data to show</h1>
                }
            </div>
        </>
    )
}

function Comp(props:{val:{username: string,time: number},index:number})
{
    const ref = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        let ctx = gsap.context(() => {
            if(ref.current === null)return;
            gsap.from(
                ref.current,{
                    yPercent:100,
                    opacity:0,
                    ease:"power4.out",
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
        return () => ctx.revert(); // cleanup! 
    },[])

    return (
        <div ref={ref} className="py-8 px-4 2xl:py-0 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-left after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100">
            <div className="container p-4 md:p-8 relative mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <h1 className='md:text-xl font-bold'>{props.index+1}</h1>
                    <h1 className='md:text-4xl font-bold'>{props.val.username}</h1>
                </div>
                <h1 className='md:text-3xl'>{`${(Math.floor(props.val.time/60)).toString().padStart(2, '0')}:${(Math.floor(props.val.time%60)).toString().padStart(2, '0')}`}</h1>
            </div>
        </div>
    )
}

export default LeaderboardPage