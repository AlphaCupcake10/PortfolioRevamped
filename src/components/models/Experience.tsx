import { useGLTF, Environment, Html } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react'
import { Mesh, AnimationMixer, Object3D } from 'three';
import modelSrc from "/experience.glb?url";
import Button from '../common/Button';

function Experience() {
    const gltf = useGLTF(modelSrc);
    const ref = useRef<Mesh>();
    const globalMixer = useRef<AnimationMixer>();
    const cameraMixer = useRef<AnimationMixer>();
    const AnimCamera = useRef<Object3D>();

    const CameraClips = ["MainCameraAction","CameraPivotAction.001"];
    // const CameraStopFrames = [0,200];

    useFrame((state,delta) => {
        if(!state)return;//IDK WHY TODO CHANGE
        if(!globalMixer.current)CreateGlobalMixer();
        if(!cameraMixer.current)CreateCameraMixer();
        globalMixer.current?.update(delta);

        

        cameraMixer.current?.update(delta);
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
                    <a href='/projects' className="p-1">
                        <Button color={'primary'} className='w-48'>VIEW PROJECTS</Button>
                    </a>
                </Html>
            </mesh>
            <mesh ref={el => { SetPosition("ProductAnim",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <a href='/projects' className="p-1">
                        <Button color={'primary'} className='w-48'>VIEW PROJECTS</Button>
                    </a>
                </Html>
            </mesh>
            <Environment preset="city"/>
        </Suspense>
    )
}

export default Experience