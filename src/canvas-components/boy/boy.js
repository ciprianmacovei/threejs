import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import D3boy from '../../assets/background-layers/3Dboy-transformed.glb';

export default function D3Boy({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(D3boy)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.BODY} position={[0, 1.97, 0.01]} />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.GLASSES}
        position={[0, 1.94, 0.67]}
        rotation={[1.49, 0, 0]}
        scale={0.16}
      />
      <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[0, 1.97, 0.01]} />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.HAT}
        position={[-0.31, 2.69, -0.12]}
        rotation={[0.16, -0.04, 0.34]}
      />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[0, 1.97, 0.01]} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[0, 1.97, 0.01]} />
      <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[0, 1.97, 0.01]} />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.fur}
        position={[-0.31, 2.7, -0.11]}
        rotation={[0.16, -0.04, 0.34]}
        scale={[1.03, 1.03, 1.03]}
      />
    </group>
  )
}

useGLTF.preload(D3boy)
