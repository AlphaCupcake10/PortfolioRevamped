import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { AnimationMixer, Mesh } from 'three';
import modelSrc from "../../assets/Bee.gltf?url";

export default function Bee(props:{CanvasRef:React.RefObject<HTMLDivElement>})//TODO change any
{
    const gltf = useGLTF(modelSrc);
    const MousePositionRef = useRef<number[]>([0,0,0,0]);
    const ref = useRef<Mesh>();
    const mixer = useRef<AnimationMixer>();


    useFrame((state,delta) => {
        if(!state)return;//IDK WHY TODO CHANGE
        MousePositionRef.current[2] += (MousePositionRef.current[0]-MousePositionRef.current[2])/10;
        MousePositionRef.current[3] += (MousePositionRef.current[1]-MousePositionRef.current[3])/10;
        ref.current?.lookAt(MousePositionRef.current[2],MousePositionRef.current[3], 5);
        if(!mixer.current)CreateMixer();
        mixer.current?.update(delta);
    })
    
    function updateBeeRot(event:MouseEvent)
    {
        const rect = props?.CanvasRef?.current?.getBoundingClientRect();
        if(!rect)return;
        const x = -(rect.x - event.x + rect.width/2)/100;
        const y = (rect.y - event.y + rect.height/2)/100;
        MousePositionRef.current[0] = x;
        MousePositionRef.current[1] = y;
    }
    function CreateMixer()
    {
        if (gltf.animations.length) {
            mixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                const action = mixer.current?.clipAction(clip)
                action?.play();
            });
        }
    }

    useEffect(()=>{
        document.addEventListener("mousemove",updateBeeRot);
        return ()=>document.removeEventListener("mousemove",updateBeeRot);
    },[])

    return(
        <Suspense fallback={null}>                    
            <primitive ref={ref} object={gltf.scene}/>
            <Environment preset="forest"/>
            <hemisphereLight groundColor={0xfaa214} color={0xffffff} intensity={1.5}/>
        </Suspense>
    )
}