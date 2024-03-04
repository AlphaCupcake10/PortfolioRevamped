import { useGLTF } from '@react-three/drei';
import { useFrame, RootState } from '@react-three/fiber';
import { RefObject, useEffect, useRef } from 'react'
import { AnimationMixer, Object3D } from 'three';
import modelSrc from "/PlayerModel/player.gltf?url";
import { useLenis } from '@studio-freight/react-lenis';

function AbysalDescent(props:{scrollRef:RefObject<HTMLDivElement>}) {

    const gltf = useGLTF(modelSrc);
    const globalMixer = useRef<AnimationMixer>();
    const cameraMixer = useRef<AnimationMixer>();
    const AnimCamera = useRef<Object3D>();
    const scrollDuration = 540/30;
    const scrollPercent = useRef(0);

    const CameraClips = ["CameraPivotAction","PointAction.004","PointAction.005"]

    function getScrollPercent() {
        var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var bodyHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        var scrollPercent = (scrollTop / (bodyHeight - windowHeight));
        return scrollPercent;
    }

    useLenis(() =>
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

    function CreateGlobalMixer() {
        if (gltf.animations.length) {
            globalMixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                if (CameraClips.includes(clip.name)) return;
                const action = globalMixer.current?.clipAction(clip)
                action?.play();
            });
        }
    }
    function CreateCameraMixer() {
        if (gltf.animations.length) {
            cameraMixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                if (!CameraClips.includes(clip.name)) return;
                const action = cameraMixer.current?.clipAction(clip)
                action?.play();
            });
        }

    }

    useEffect(() => {
        AnimCamera.current = gltf.scene.getObjectByName("CameraPivot")?.getObjectByName("MainCamera");
    }, [gltf])

    function SetCameraPosition(state: RootState) {
        if (!AnimCamera.current) return;
        AnimCamera.current.getWorldPosition(state.camera.position);
        AnimCamera.current.getWorldQuaternion(state.camera.quaternion);
        state.camera.updateMatrixWorld();
    }

    return (
        <>
            <primitive object={gltf.scene} />
        </>
    )
}

export default AbysalDescent