import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function Background({ position, scale, background, fixedDim }) {
    const texture = useLoader(THREE.TextureLoader, background);
    console.log(fixedDim ? 12.84 : window.screen.width / 97, fixedDim ? 6.35 : window.innerHeight / 97);
    return (
        <mesh position={position} scale={scale}>
            <planeBufferGeometry attach="geometry"
                args={[fixedDim ? 12.84 : window.screen.width / 97, fixedDim ? 6.35 : window.innerHeight / 97]} />
            <meshBasicMaterial attach="material" map={texture} transparent />
        </mesh>
    )
}
