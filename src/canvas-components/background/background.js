import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useAspect } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export default function Background({ scale, position, background, mashVisibility }) {
    const texture = useLoader(THREE.TextureLoader, background);
    const props = useSpring({
        opacity: !!mashVisibility ? 1 : 0
    })
    const scaleX = useAspect(window.innerWidth, window.innerHeight, scale)
    return (
        <mesh position={position} scale={scaleX}>
            <planeBufferGeometry attach="geometry" />
            <animated.meshBasicMaterial attach="material" map={texture} transparent opacity={props.opacity} />
        </mesh>
    )
}
