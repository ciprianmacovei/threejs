import React from 'react';
import { useGLTF } from '@react-three/drei'
import D3boy from '../../assets/background-layers/3Dboy.glb';

export default function D3Boy() {
    const { nodes } = useGLTF(D3boy);

    return <>
        <mesh>
            <primitive object={nodes.Scene} />
        </mesh>
    </>

}
