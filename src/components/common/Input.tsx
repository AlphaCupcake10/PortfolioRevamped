import { ReactNode } from "react"

type InputProps = {
    name?:string,
    className?:string,
    placeHolder?:string,
    children?:ReactNode,
    type?:React.HTMLInputTypeAttribute,
    id?:string,
    value?:string,
    hasError?:boolean
    onChange?:React.ChangeEventHandler<HTMLInputElement>
    inputRef?:React.RefObject<HTMLInputElement>
}
export default function Input(props:InputProps)
{
    return(
        <div className={props.className}>
            {props.children && <h2 className="text-text/75 pb-2">{props.children}</h2>}
            <input name={props.name} ref={props.inputRef} type={`${props.type}`} id={props.id} placeholder={props.placeHolder} value={props.value} onChange={props.onChange} className={`${props.hasError?"border-red-500":"focus:border-b-accent border-text/5"} w-full p-2 md:p-3 text-sm bg-background focus:bg-background2 text-light/75 outline-none border-2 rounded-lg focus:rounded-none focus:rounded-t-lg  transition-all duration-500`}/>
        </div>    
    )
}