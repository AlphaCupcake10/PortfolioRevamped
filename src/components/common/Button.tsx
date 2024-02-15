import { ReactNode } from 'react'

function Button(props:{
    children?:ReactNode,
    className?:string,
    color:"primary"|"secondary"|"accent",
    onClick?:()=>void
})
{

    let color:{[key: string]: string;} = {
        "primary":"bg-primary",
        "secondary":"bg-secondary",
        "accent":"bg-accent",
    }
    return (
        <button onClick={()=>{props.onClick && props.onClick()}} className={`${props.className} ${color[props.color]} rounded-xl px-4 py-2.5 md:py-4 md:px-6 hover:scale-105 transition-transform active:scale-95 text-xs md:text-base`}>{props.children}</button>
    )
}

export default Button;