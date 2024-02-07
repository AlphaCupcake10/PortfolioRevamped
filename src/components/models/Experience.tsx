import { useGLTF, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react'
import { Mesh, AnimationMixer, Object3D } from 'three';
import modelSrc from "../../assets/Experience.glb?url";

function Experience() {
    const gltf = useGLTF(modelSrc);
    const ref = useRef<Mesh>();
    const mixer = useRef<AnimationMixer>();
    const AnimCamera = useRef<Object3D>();

    useFrame((state,delta) => {
        if(!state)return;//IDK WHY TODO CHANGE
        if(!mixer.current)CreateMixer();
        mixer.current?.update(delta);
        // if(AnimCamera == null)return;
        // state.camera.position.set(AnimCamera.position.x,AnimCamera.position.y,AnimCamera.position.z);
        // state.camera.rotation.set(AnimCamera.rotation.x,AnimCamera.rotation.y,AnimCamera.rotation.z);
        // state.camera.updateMatrixWorld();
    })
    
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
        AnimCamera.current = gltf.scene.getObjectByName("CameraPivot")?.getObjectByName("MainCamera");
    },[gltf])

    return(
        <Suspense fallback={null}>                    
            <primitive ref={ref} object={gltf.scene}/>
            <Environment preset="city"/>
        </Suspense>
    )
}

export default Experience