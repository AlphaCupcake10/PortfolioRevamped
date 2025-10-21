import { useGLTF, Environment, Html } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { RefObject, Suspense, useEffect, useRef } from 'react'
import { Mesh, AnimationMixer, Object3D } from 'three';
import Button from '../common/Button';
import { ScrollToParams, useLenis } from '@studio-freight/react-lenis';
import { usePageLoader } from '../../contexts/PageLoaderContext';

function Experience(props:{scrollRef:RefObject<HTMLDivElement>}) {
    const gltf = useGLTF("https://alphacupcake10.github.io/Diving-Tempest-Builds/experience.glb");
    const ref = useRef<Mesh>();
    const globalMixer = useRef<AnimationMixer>();
    const cameraMixer = useRef<AnimationMixer>();
    const AnimCamera = useRef<Object3D>();
    const pageLoader = usePageLoader();

    const CameraClips = ["MainCameraAction","CameraPivotAction.001","ProductAnim.001Action","Plane.003Action","Empty.002Action"];
    const scrollPercent = useRef(0);
    const scrollDuration = 400/30;

    function getScrollPercent() {
        let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let bodyHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        let scrollPercent = (scrollTop / (bodyHeight - windowHeight));
        return scrollPercent;
    }

    function getScrollHeight() {
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let bodyHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        return bodyHeight - windowHeight;
    }

    const lenis = useLenis(() =>
    {
        if(!props.scrollRef.current)return;        
        scrollPercent.current = getScrollPercent();
    })

    useFrame((state, delta) => {
        if (!state) return;//IDK WHY TODO CHANGE
        if (!globalMixer.current) CreateGlobalMixer();
        if (!cameraMixer.current) CreateCameraMixer();
        globalMixer.current?.update(delta);

        cameraMixer.current?.setTime(scrollPercent.current*scrollDuration*.99);

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

    const scrollOptions:ScrollToParams = {
        duration: 10,
    }

    const handleExit = ()=>{
        pageLoader?.navigateTo('/',false);
    }

    return(
        <Suspense fallback={null}>    
                            
            <primitive ref={ref} object={gltf.scene}/>
            <mesh ref={el => { SetPosition("WebDev",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <div className="w-160 flex p-4 bg-background border-text/20 border justify-between">
                        <Button onClick={handleExit} color={'secondary'} className='w-48'>{"EXIT"}</Button>
                        <Button onClick={()=>lenis.scrollTo(getScrollHeight()*1/2,scrollOptions)}  color={'primary'} className='w-48'>{"NEXT >"}</Button>
                    </div>
                </Html>
            </mesh>
            <mesh ref={el => { SetPosition("ProductAnim",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <div className="w-160 flex p-4 bg-background border-text/20 border justify-between">
                        <Button onClick={()=>lenis.scrollTo(0,scrollOptions)} color={'primary'} className='w-48'>{"< PREV"}</Button>
                        <Button onClick={handleExit} color={'secondary'} className='w-48'>{"EXIT"}</Button>
                        <Button onClick={()=>lenis.scrollTo(getScrollHeight(),scrollOptions)}  color={'primary'} className='w-48'>{"NEXT >"}</Button>
                    </div>
                </Html>
            </mesh>
            <mesh ref={el => { SetPosition("GameDev",el) }}>
                <Html transform wrapperClass="" distanceFactor={2} occlude="blending">
                    <div className="w-160 flex p-4 bg-background border-text/20 border justify-between">
                        <Button onClick={()=>lenis.scrollTo(getScrollHeight()*1/2,scrollOptions)}  color={'primary'} className='w-48'>{"< PREV"}</Button>
                        <Button onClick={handleExit} color={'secondary'} className='w-48'>{"EXIT"}</Button>
                    </div>
                </Html>
            </mesh>
            <fog attach="fog" args={['#0a1015', 0, 40]} />
            <Environment preset="city"/>
        </Suspense>
    )
}

export default Experience