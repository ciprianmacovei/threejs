import React from 'react';
import { Flex, Text, useColorMode, Image } from '@chakra-ui/react';

import sunGlassKid from '../../assets/infopage/Comp 2.gif';

import largeBackgroundKidDark from '../../assets/infopage/03.jpg';
import largeBackgroundKidLight from '../../assets/infopage/04.png';
import whatDopeText from '../../assets/infopage/dopeboyz.png';
// import backgroundKid from '../../assets/infopage/13.png'
import firstKid from '../../assets/infopage/13.png';
import secondKid from '../../assets/infopage/14.png';
import thirdKid from '../../assets/infopage/15.png';

import './infoPage.css';

export default function Info() {

    const { colorMode } = useColorMode();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className='container-info-page'>
            <Flex
                bgImg={colorMode === "dark" ? largeBackgroundKidDark : largeBackgroundKidLight}
                bgSize={'contain'}
                height={'100%'}
                width={'100%'}
                paddingX={isMobile ? '0px' : '15px'}
                paddingY={'15px'}
                justifyContent={'center'}
                flexDirection={'column'}
            >
                <Flex width={'100%'} flexDirection={'column'} alignItems={'center'}>
                    <Flex flexDirection={isMobile ? 'column' : 'row'} height={isMobile ? '100%' : '60%'} width={'80%'}>
                        <Flex
                            flexDirection={'column'}
                            height={'100%'}
                            width={isMobile ? '88%' : '50%'}
                            bgSize={'cover'}
                            justifyContent={'center'}
                            bgPosition={'center'}
                            bgRepeat={'no-repeat'}
                            padding={'30px'}>
                            <Image src={sunGlassKid} maxWidth={'100%'} maxHeight={'100%'} width={'auto'} height={'auto'} />
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            height={'100%'}
                            width={isMobile ? '100%' : '50%'}
                            margin={'30px'}
                            color={'white'}
                            alignItems={'center'}>
                            {/* <Text>What is Dope BoyZ</Text> */}
                            <Text textAlign={'center'} className='custom-font' color={'blue.500'} fontSize={'4vw'}>What is Boujee BoyZ</Text>
                            <Flex flexDirection={'column'} gap={'1.5rem'} fontSize={isMobile ? '15px' : '1.2vw'} maxW={isMobile ? '300px' : 'auto'} marginTop={'2rem'}>
                                <Flex flexDirection={'column'} >
                                    Boujee BoyZ is a collection of 5555 unique art boyz, random
                                    generated cute and slick doodles strolling on the
                                    Ethereum blockchain, waiting to be displayed in the metaverse art gallery.
                                </Flex>
                                <Flex flexDirection={'column'}>
                                    Every Boujee BoyZ is unique and programmatically
                                    generated from over 150+ possible attributes
                                    ranging from skin color to facial expressions, clothes, accessories and more.
                                </Flex>
                                <Text>Their only need is a good caring and patient parent.</Text>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
                <Flex flexDirection={'row'} height={'40%'} width={'100%'} justifyContent={'space-evenly'} marginTop={'15px'} paddingBottom={'15px'}>
                    <Image src={thirdKid} maxBlockSize={isMobile ? '100px' : 'auto'} />
                    <Image src={secondKid} maxBlockSize={isMobile ? '100px' : 'auto'} />
                    <Image src={firstKid} maxBlockSize={isMobile ? '100px' : 'auto'} />
                </Flex>
            </Flex>
        </div>
    );
}
