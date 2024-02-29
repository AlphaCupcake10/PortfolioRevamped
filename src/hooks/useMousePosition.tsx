import { useEffect, useState } from "react";

export default function useMousePosition(ref?:React.RefObject<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<{x:number,y:number}>({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event:MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition((prev)=>{
        prev.y += (clientY-prev.y)/1;
        prev.x += (clientX-prev.x)/1;
        return {...prev};
      });
      if(ref)
      {
        ref.current?.animate({left:`${clientX}px`,top:`${clientY}px`},{duration:3000,fill:"forwards"})
      }
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}