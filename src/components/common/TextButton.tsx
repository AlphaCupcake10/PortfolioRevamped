import { ReactNode } from 'react'

function TextButton(props:{
    children?:ReactNode,
    className?:string,
    defaultActive?:boolean,
    onClick?:()=>void
})
{

    if(props.defaultActive)
    {
        return <button onClick={()=>{props?.onClick && props?.onClick()}} className={`${props.className} font-medium text-xs px-2 py-1.5 md:text-sm md:px-6 md:py-3 lg:text-base lg:px-8 lg:py-4 active:scale-95 duration-200 relative text-accent active:text-primary transition-all after:absolute after:bg-accent active:after:bg-primary after:h-px after:w-full after:left-0 after:bottom-0 hover:after:origin-left after:origin-right after:scale-100 after:transition-transform`}>{props.children}</button>
    }

    return (
        <button onClick={()=>{props?.onClick && props?.onClick()}} className={`${props.className} font-medium text-xs px-2 py-1.5 md:text-sm md:px-6 md:py-3 lg:text-base lg:px-8 lg:py-4 active:scale-95 duration-200 relative hover:text-accent active:text-primary transition-all after:absolute after:bg-accent active:after:bg-primary after:h-px after:w-full after:left-0 after:bottom-0 hover:after:origin-left after:origin-right after:scale-x-0 hover:after:scale-100 after:transition-transform`}>{props.children}</button>
    )
}

export default TextButton;