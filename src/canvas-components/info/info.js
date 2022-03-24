import React from 'react'
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useAspect, Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

import font from '../../assets/font/Tiki Tropic Bold.ttf';


export default function Info({ scale, position, background, mashVisibility }) {
    const texture = useLoader(THREE.TextureLoader, background);
    const scaleX = useAspect(window.innerWidth, window.innerHeight, scale);

    const AnimatedText = animated(Text);

    const props = useSpring({
        opacity: !!mashVisibility ? 1 : 0
    })

    function TextAnimation({ text, position }) {
        const spring = useSpring({
            from: { scale: [0, 0, 0] },
            to: { scale: [1, 1, 1] },
            config: {
                friction: 10,
            },
            delay: 300,
        })
        return <AnimatedText
            color="black"
            anchorX="center" // default
            anchorY="middle" // default
            fontSize={1.2}
            position={position}
            font={font}
            maxWidth={45}
            {...spring}
        >
            {text}
        </AnimatedText>
    }

    return (
        <>
            <mesh position={position} scale={scaleX}>
                <planeBufferGeometry attach="geometry" />
                <animated.meshBasicMaterial attach="material" map={texture} transparent opacity={props.opacity} />
            </mesh>
            {!!mashVisibility ?
                <>
                    <TextAnimation
                        text={`Boujee BoyZ is a collection of 5555 unique art boyz, random generated cute and slick doodles strolling on the Ethereum blockchain, waiting to be displayed in the metaverse art gallery.`}
                        position={[2, 2, position[2] + 1]}
                    />
                    <TextAnimation
                        text={`Every Boujee BoyZ is unique and programmatically generated from over 150+ possible attributes ranging from skin color to facial expressions, clothes, accessories and more.`}
                        position={[2, 8, position[2] + 1]}
                    />
                </> : null
            }
        </>
    )
}
