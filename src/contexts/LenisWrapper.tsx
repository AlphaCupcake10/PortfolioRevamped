import { Lenis, ReactLenis } from "@studio-freight/react-lenis"
import { ReactNode, useEffect, useRef } from "react";

import { gsap } from "gsap";

export default function LenisWrapper(props:{children:ReactNode})
{

  const lenisRef = useRef<typeof Lenis>()
  
  useEffect(() => {
    function update(time:number) {
      lenisRef.current?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })
  
  return (
    <>
      <ReactLenis root ref={lenisRef} autoRaf={false}>
        { props.children }
      </ReactLenis>
    </>
  )
}