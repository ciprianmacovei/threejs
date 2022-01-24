import React, { useEffect, useState } from 'react';
import { Progress } from '@chakra-ui/react';
import { LoadingManager } from 'three';


export default function Loading() {

    const [finished, set] = useState(false);
    const [width, setWidth] = useState(0);
    const loadingManager = new LoadingManager();

    useEffect(() => {
        loadingManager.onLoad = () => set(true);
        loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
            return setWidth((itemsLoaded / itemsTotal) * 200);
        }
    })

    return (
        <>
            {!finished && <Progress value={width} size='xs' colorScheme='pink' />}
        </>
    )
}
