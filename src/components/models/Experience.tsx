import { useGLTF, Environment, Html } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react'
import { Mesh, AnimationMixer, Object3D } from 'three';
import Button from '../common/Button';

function Experience() {
    const gltf = useGLTF("https://alphacupcake10.github.io/Diving-Tempest-Builds/experience.glb");
    const ref = useRef<Mesh>();
    const globalMixer = useRef<AnimationMixer>();
    const cameraMixer = useRef<AnimationMixer>();
    const AnimCamera = useRef<Object3D>();

    const CameraClips = ["MainCameraAction","CameraPivotAction.001","ProductAnim.001Action","Plane.003Action","Empty.002Action"];
    const CameraDuration = 400/30;
    const CameraStopRatios = [0,1/2,1];
    const targetProgressIndex = useRef(0);
    const currentProgress = useRef(0);

    const [isAnimating,setIsAnimating] = useState(false)

    function deltaIndex(value:number)
    {
        if(isAnimating)return;
        targetProgressIndex.current += value;
        if(targetProgressIndex.current < 0)targetProgressIndex.current = CameraStopRatios.length - 1;
        if(targetProgressIndex.current > CameraStopRatios.length - 1)targetProgressIndex.current = 0;
    }

    useFrame((state,delta) => {
        if(!state)return;//IDK WHY TODO CHANGE
        if(!globalMixer.current)CreateGlobalMixer();
        if(!cameraMixer.current)CreateCameraMixer();
        globalMixer.current?.update(delta);

        const targetProgress  = CameraDuration * CameraStopRatios[targetProgressIndex.current];

        
        if(currentProgress.current < targetProgress)
        {
            if(!isAnimating)setIsAnimating(true);
            currentProgress.current += delta;
            if(currentProgress.current > targetProgress)currentProgress.current = targetProgress;
        }
        else if(currentProgress.current > targetProgress)
        {
            if(!isAnimating)setIsAnimating(true);
            currentProgress.current -= delta;
            if(currentProgress.current < targetProgress)currentProgress.current = targetProgress;
        }
        else
        {
            if(isAnimating)setIsAnimating(false);
        }
        cameraMixer.current?.setTime(currentProgress.current*.99);

        SetCameraPosition(state);
    })
    
    function CreateGlobalMixer()
    {
        if (gltf.animations.length) {
            globalMixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                if(CameraClips.includes(clip.name))return;
                const action = globalMixer.current?.clipAction(clip)
                action?.play();
            });
        }
    }
    function CreateCameraMixer()
    {
        if (gltf.animations.length) {
            cameraMixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                if(!CameraClips.includes(clip.name))return;
                const action = cameraMixer.current?.clipAction(clip)
                // action?.setLoop(LoopOnce,1);
                action?.play();
            });
        }
    
    }

    useEffect(()=>{
        AnimCamera.current = gltf.scene.getObjectByName("CameraPivot")?.getObjectByName("MainCamera");
    },[gltf])

    function SetCameraPosition(state:RootState)
    {
        if(!AnimCamera.current)return;
        AnimCamera.current.getWorldPosition(state.camera.position);
        AnimCamera.current.getWorldQuaternion(state.camera.quaternion);
        state.camera.updateMatrixWorld();
    }

    function SetPosition(ObjectName:string,el:Mesh|null)
    {
        if(el)
        {
            gltf.scene.getObjectByName(ObjectName)?.getWorldPosition(el.position);
            gltf.scene.getObjectByName(ObjectName)?.getWorldQuaternion(el.quaternion);
            gltf.scene.getObjectByName(ObjectName)?.getWorldScale(el.scale);
        }
    }

    return(
        <Suspense fallback={null}>    
                            
            <primitive ref={ref} object={gltf.scene}/>
            <mesh ref={el => { SetPosition("WebDev",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <div className="w-160 flex p-4 bg-background border-text/20 border justify-between">
                        <a href="/" className="w-48"><Button color={'secondary'} className='w-48'>{"EXIT"}</Button></a>
                        <Button onClick={()=>deltaIndex(1)}  color={'primary'} className='w-48'>{"NEXT >"}</Button>
                    </div>
                </Html>
            </mesh>
            <mesh ref={el => { SetPosition("ProductAnim",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <div className="w-160 flex p-4 bg-background border-text/20 border justify-between">
                        <Button onClick={()=>deltaIndex(-1)}  color={'primary'} className='w-48'>{"< PREV"}</Button>
                        <a href="/" className="w-48"><Button color={'secondary'} className='w-48'>{"EXIT"}</Button></a>
                        <Button onClick={()=>deltaIndex(1)}  color={'primary'} className='w-48'>{"NEXT >"}</Button>
                    </div>
                </Html>
            </mesh>
            <mesh ref={el => { SetPosition("GameDev",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <div className="w-160 flex p-4 bg-background border-text/20 border justify-between">
                        <Button onClick={()=>deltaIndex(-1)}  color={'primary'} className='w-48'>{"< PREV"}</Button>
                        <a href="/" className="w-48"><Button color={'secondary'} className='w-48'>{"EXIT"}</Button></a>
                    </div>
                </Html>
            </mesh>
            <fog attach="fog" args={['#0a1015', 0, 40]} />
            <Environment preset="city"/>
        </Suspense>
    )
}

export default Experience