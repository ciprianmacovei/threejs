import React from 'react';
import { Canvas } from '@react-three/fiber'

import Body from '../../components/body/body';
import App from '../../App';

export default function Home() {

    return (
        <>
            <div className='container'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} distance={100} intensity={4} />
                    <App />
                </Canvas>
            </div>
            <Body />
        </>

    );
}
