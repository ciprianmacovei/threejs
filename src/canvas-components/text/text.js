import React, { useMemo } from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { useLoader, extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({TextGeometry})
export default function Text() {

    const font = useLoader(FontLoader, '/fredoka.json');
    const config = useMemo(
        () => ({ font, size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
        [font]
    )

    return <>
        <mesh>
            <textGeometry attach='geometry' args={['three.js', config]} />
            <meshStandardMaterial attach='material' color="hotpink" />
        </mesh>

    </>
}
