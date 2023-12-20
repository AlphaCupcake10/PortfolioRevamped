import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect , useRef } from "react";
import { AnimationMixer } from "three";
import modelSrc from "../../assets/Models.glb?url";
import { gsap } from "gsap";

export default function Designation3D(props:{phaseIndex:number})
{

    const gltf = useGLTF(modelSrc);//To Change
    const mixer = useRef<AnimationMixer>();
    let ref = useRef<any>();

    useFrame((state,delta) => {
        if(!state)return;
        if(!mixer.current)CreateMixer();
        mixer.current?.update(delta);
    })

    function CreateMixer()
    {
        console.log("Added Mixer");
        console.log(gltf)
        if (gltf.animations.length) {
            mixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                const action = mixer.current?.clipAction(clip)
                action?.play();
            });
        }
    }

    useEffect(() => {
        
        let ctx = gsap.context(() => {
            if(!ref.current)return;
            gsap.to(ref.current.position, { x: (props.phaseIndex*-20),ease: "power4.inOut", repeatRefresh: true,duration:2.5,repeat:-1})
        }, ref);
    

        return () => ctx.revert(); // cleanup! 
    
    }, [props.phaseIndex]);

    return (
        <>
            <group ref={ref}>
                <primitive object={gltf.scene}/>
                {/* <Float speed={1} rotationIntensity={25} position={[20,0,0]}>
                    <mesh {...props} geometry={flowerGLTF.nodes["Flower"].geometry}>
                        <LayerMaterial ref={LayerMat} toneMapped={false}>
                            <Depth colorA="#0d64c1" colorB="black" alpha={1} mode="normal" near={0.5 * settings.gradient} far={0.5} origin={[0, 0, 0]} />
                            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * settings.gradient} far={2} origin={[0, 1, 1]} />
                            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * settings.gradient} far={3} origin={[0, 1, -1]} />
                            <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * settings.gradient} far={1.5} origin={[1, -1, -1]} />
                            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
                        </LayerMaterial>
                        <Edges color="white" />
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            thickness={3}
                            chromaticAberration={1}
                            anisotropy={0.1}
                            distortion={0.1}
                            distortionScale={0.1}
                            temporalDistortion={0.2}
                            iridescence={1}
                            iridescenceIOR={1}
                            iridescenceThicknessRange={[0, 1400]}
                            />
                    </mesh>
                </Float> */}
            </group>
        </>
    )
}