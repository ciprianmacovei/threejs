import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function Boys({ position, scale, background }) {
    const texture = useLoader(THREE.TextureLoader, background);
    return (
        <mesh position={position} scale={scale}>
            <planeBufferGeometry attach="geometry" args={[12.84, 6.35]}/>
            <meshBasicMaterial attach="material" map={texture} transparent />
        </mesh>
    )
}
