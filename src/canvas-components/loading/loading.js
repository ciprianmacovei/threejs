import { Html, useProgress } from '@react-three/drei';
import { Image, Spinner, Text } from '@chakra-ui/react'

import loading from '../../assets/loading/loading.png';

import './loading.css';

export default function Loader() {
    const { total, loaded, progress} = useProgress();

    return <Html
        as='div' // Wrapping element (default: 'div')
        wrapperClass // The className of the wrapping element (default: undefined)
        center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
        fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
        distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
        zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
        transform // If true, applies matrix3d transformations (default=false)
    >
        {(total !== loaded && progress !== 100) ?
            <div>
                {/* <Text fontSize={'20px'} textAlign={'center'}>Loading ...</Text> */}
                <div className='loading-container'>
                    <Image src={loading} maxWidth={'150px'} maxHeight={'150px'} className='rotating-img'></Image>
                </div>
            </div>
            : null
        }
    </Html>
}
