import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AnimationMixer } from "three";
import modelSrc from "../../assets/Skills.glb?url";
import { useLenis } from "@studio-freight/react-lenis";

export default function Skills3D(props:{scrollRef:React.RefObject<HTMLDivElement>})
{
    const gltf = useGLTF(modelSrc);//To Change
    const mixer = useRef<AnimationMixer>();
    const scrollMixer = useRef<AnimationMixer>();

    const scrollPercent = useRef<number>(0);

    useLenis(() =>
    {
        if(!props.scrollRef.current)return;

        const rect = props.scrollRef.current.getBoundingClientRect();;
        
        scrollPercent.current = (-rect.top/(rect.height-screen.height));
        if(scrollPercent.current < 0)scrollPercent.current = 0;
        if(scrollPercent.current > 1)scrollPercent.current = 1;
    })

    useFrame((state,delta) => {

        if(!mixer.current)CreateMixer();
        mixer.current?.update(delta);

        if(scrollPercent.current)scrollMixer.current?.setTime((scrollPercent.current)*20*.999)
        
        const AnimCamera = gltf.cameras[0];
        state.camera.position.set(AnimCamera.position.x,AnimCamera.position.y,AnimCamera.position.z);
        state.camera.rotation.set(AnimCamera.rotation.x,AnimCamera.rotation.y,AnimCamera.rotation.z);
        state.camera.updateMatrixWorld();
    })

    function CreateMixer()
    {
        console.log(gltf.animations);
        if (gltf.animations.length) {
            mixer.current = new AnimationMixer(gltf.scene);
            scrollMixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                // if(clip.name == "MainCameraAction" || clip.name == "CameraAction" || clip.name == "FocusAction")
                // {
                //     scrollMixer.current?.clipAction(clip).play();
                //     return;
                // }
                scrollMixer.current?.clipAction(clip).play()
            });
        }
    }

    return (
        <>
            <group>
                <primitive object={gltf.scene}/>
            </group>
        </>
    )
}