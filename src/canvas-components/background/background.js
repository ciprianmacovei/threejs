import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useAspect } from '@react-three/drei';

export default function Background({scale, position, background }) {
    const texture = useLoader(THREE.TextureLoader, background);
    const scaleX = useAspect(window.innerWidth, window.innerHeight, scale)
    return (
        <mesh position={position} scale={scaleX}>
            <planeBufferGeometry attach="geometry"/>
            <meshBasicMaterial attach="material" map={texture} transparent />
        </mesh>
    )
}
