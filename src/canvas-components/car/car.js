import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function Car({ position, scale, background }) {
    const texture = useLoader(THREE.TextureLoader, background);
    return (
        <mesh position={position} scale={scale}>
            <planeBufferGeometry attach="geometry" args={[9, 3]}/>
            <meshBasicMaterial attach="material" map={texture} transparent />
        </mesh>
    )
}
