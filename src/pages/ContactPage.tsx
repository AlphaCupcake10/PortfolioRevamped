import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ContactPage()
{
    const cardClass = "rounded-3xl hover:grow-[6] transition-grow flex items-center justify-center font-bold text-xl";
    const gapClass = "gap-2";

    const refs = [useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null)];

    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            refs.forEach((ref,index)=>{
                gsap.fromTo(
                    ref.current,
                    {
                        xPercent:-200,
                        opacity:0
                    },
                    {
                        xPercent:0,
                        opacity:1,
                        delay:.5+.1*index,
                        ease:"power4.out"
                    }
                )
            })
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);

    return (
    <>
        <div className="flex flex-col justify-between min-h-screen overflow-x-hidden">
            <Navbar />
            <div className={`grow flex flex-col container mx-auto h-160 mt-24 ${gapClass} p-8`}>
                <div className={`grow-[1] flex flex-wrap items-stretch hover:grow-[1.5] transition-all duration-500 ${gapClass}`}>
                    <a target='_blank' href='https://www.linkedin.com/in/alphacupcake10/' ref={refs[3]} className={`${cardClass} bg-[#0077b5] w-64 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clipPath="url(#clip0_17_68)">
                                <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_68">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a target='_blank' href='https://www.fiverr.com/alphacupcake' ref={refs[2]} className={`${cardClass} bg-[#1DBF73] w-64 grow-[4]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z" fill='currentColor'/></svg>
                    </a>
                    <a target='_blank' href='https://github.com/alphacupcake10/' ref={refs[0]} className={`${cardClass} bg-[#222] w-64 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clipPath="url(#clip0_910_44)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_910_44">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className={`grow-[2] flex flex-wrap-reverse items-stretch hover:grow-[2.5] transition-all duration-500 ${gapClass}`}>
                    <div className={`grow-[1] w-64 flex flex-col ${gapClass}`}>
                        <a target='_blank' href='https://linktr.ee/AlphaCupcake10' ref={refs[4]} className={`${cardClass} bg-gradient-to-b from-green-400 to-green-500 grow`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="currentColor" d="M18.89,32H21v8c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8H4.89c-1.52,0-2.48-1.64-1.75-2.97 L15.25,7.16c0.76-1.37,2.74-1.37,3.5,0l4.85,9.74l-6.46,12.13C16.41,30.36,17.37,32,18.89,32z"/><path fill="currentColor" d="M43.11,32H35v8c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8h2.11c1.52,0,2.48-1.64,1.75-2.97L24.3,16.9 l4.95-9.74c0.76-1.37,2.74-1.37,3.5,0l12.11,21.87C45.59,30.36,44.63,32,43.11,32z"/></svg>
                        </a>
                        <a target='_blank' href='mailto:alphacupcake@outlook.com' ref={refs[5]} className={`${cardClass} bg-gradient-to-r from-sky-400 to-blue-500 grow`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-150">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                    </div>
                    <a target='_blank' href='https://www.instagram.com/alphacupcake10/' ref={refs[1]} className={`${cardClass} bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 w-128 grow-[2]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clipPath="url(#clip0_17_63)">
                                <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white"/>
                                <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white"/>
                                <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_63">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className={`grow-[1] flex flex-wrap items-stretch hover:grow-[1.5] transition-all duration-500 ${gapClass}`}>
                    <a target='_blank' href='https://www.artstation.com/alphacupcake10' ref={refs[9]} className={`${cardClass} bg-[#171717] text-[#13AFF0] w-64 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clipPath="url(#clip0_251_21)">
                                <path d="M-1 35.1508L3.13846 42.2863H3.1405C3.55286 43.1021 4.18423 43.7877 4.96429 44.2668C5.74435 44.746 6.64249 44.9998 7.55867 45H35.0334L29.333 35.1508H-1ZM48 35.2017C48 34.2164 47.708 33.2983 47.2078 32.5267L31.1113 4.62414C30.6903 3.83183 30.0607 3.16889 29.2901 2.70655C28.5196 2.24421 27.6374 1.99995 26.7381 2H18.2305L43.0959 44.9572L47.0159 38.1882C47.7877 36.8914 48 36.3173 48 35.2017ZM25.2783 28.1538L14.1655 8.96037L3.05067 28.1538H25.2783Z" fill="currentColor"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_251_21">
                                <rect width="48" height="48" fill="curretColor"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a target='_blank' href='https://www.behance.net/AlphaCupcake10' ref={refs[8]} className={`${cardClass} bg-[#1769FF] w-64 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <g clipPath="url(#clip0_251_32)">
                                <path d="M40.3333 12.8333H27.5V9.16663H40.3333V12.8333ZM43.4977 31.1666C42.6873 33.5445 39.7778 36.6666 34.1458 36.6666C28.5102 36.6666 23.9452 33.4968 23.9452 26.2625C23.9452 19.0941 28.2077 15.4091 33.9662 15.4091C39.6165 15.4091 43.0668 18.6761 43.8203 23.5235C43.9633 24.4511 44.0202 25.7015 43.9945 27.4468H29.2783C29.5167 33.3336 35.6638 33.5188 37.6897 31.1666H43.4977ZM29.4067 23.8333H38.5092C38.3167 20.9971 36.4265 19.7651 33.968 19.7651C31.2803 19.7651 29.7935 21.1731 29.4067 23.8333ZM11.8543 36.6446H0V9.20513H12.7472C22.7865 9.35363 22.9772 19.1858 17.7338 21.8661C24.079 24.1761 24.2917 36.6446 11.8543 36.6446ZM5.5 20.1666H12.0707C16.6687 20.1666 17.3983 14.6666 11.4987 14.6666H5.5V20.1666ZM11.7168 25.6666H5.5V31.196H11.6252C17.226 31.196 16.8832 25.6666 11.7168 25.6666Z" fill="currentColor"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_251_32">
                                <rect width="44" height="44" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a target='_blank' href='https://twitter.com/alphacupcake10/' ref={refs[7]} className={`${cardClass} bg-[#14171A] w-64 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="white"/>
                        </svg>
                    </a>
                    <a target='_blank' href='https://www.youtube.com/c/AlphaCupcake10' ref={refs[6]} className={`${cardClass} bg-[#FF0000] w-64 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default ContactPage;