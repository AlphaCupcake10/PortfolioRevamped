import { useGLTF, Environment, Html } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react'
import THREE, { Mesh, AnimationMixer, Object3D, LoopOnce } from 'three';
import modelSrc from "/experience.glb?url";
import Button from '../common/Button';

function Experience() {
    const gltf = useGLTF(modelSrc);
    const ref = useRef<Mesh>();
    const globalMixer = useRef<AnimationMixer>();
    const cameraMixer = useRef<AnimationMixer>();
    const AnimCamera = useRef<Object3D>();

    const CameraClips = ["MainCameraAction","CameraPivotAction.001"];
    const CameraDuration = 20;
    const CameraStopRatios = [0,1/3,2/3,1];
    const targetProgressIndex = useRef(0);
    const currentProgress = useRef(0);

    function deltaIndex(value:number)
    {
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
            currentProgress.current += delta;
            if(currentProgress.current > targetProgress)currentProgress.current = targetProgress;
        }
        else if(currentProgress.current > targetProgress)
        {
            currentProgress.current -= delta;
            if(currentProgress.current < targetProgress)currentProgress.current = targetProgress;
        }
        cameraMixer.current?.setTime(currentProgress.current*.99);

        console.log(currentProgress.current,targetProgress);
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
                    <Button onClick={()=>deltaIndex(1)}  color={'primary'} className='w-48'>VIEW PROJECTS</Button>
                    {/* <a href='/projects' className="p-1">
                        <Button color={'primary'} className='w-48'>VIEW PROJECTS</Button>
                    </a> */}
                </Html>
            </mesh>
            <mesh ref={el => { SetPosition("ProductAnim",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <Button onClick={()=>deltaIndex(-1)}  color={'primary'} className='w-48'>VIEW PROJECTS</Button>
                </Html>
            </mesh>
            <Environment preset="city"/>
        </Suspense>
    )
}

export default Experience