import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function Background({ position, scale, background, wideScreenScale }) {
    const texture = useLoader(THREE.TextureLoader, background);
    let width = 97, height = 97;
    if (wideScreenScale) {
        if (window.innerWidth > 2300) {
            width = 120;
        } else if (window.innerWidth > 1450) {
            width = 110;
        } else {
            width = 97;
        }
        if (window.innerHeight > 900) {
            height = 95;
            if (window.innerWidth <= 1700) {
                height = 120
                scale = scale + 2;
                width = 115;
            }
        } else if (window.innerWidth > 750) {
            width = 97;
        } else {
            width = 97;
        }
    }

    return (
        <mesh position={position} scale={scale}>
            <planeBufferGeometry attach="geometry" args={[window.innerWidth / width, window.innerHeight / height]} />
            <meshBasicMaterial attach="material" map={texture} transparent />
        </mesh>
    )
}
