import React from 'react';
import { Flex, Text, useColorMode, Image } from '@chakra-ui/react';

import sunGlassKid from '../../assets/infopage/Doped Boy.gif';

import largeBackgroundKidDark from '../../assets/infopage/03.png';
import largeBackgroundKidLight from '../../assets/infopage/04.png';
import whatDopeText from '../../assets/infopage/dopeboyz.png';
import backgroundKid from '../../assets/infopage/13.png'
import firstKid from '../../assets/infopage/14.png';
import secondKid from '../../assets/infopage/15.png';
import thirdKid from '../../assets/infopage/16.png';

import './infoPage.css';

export default function Info() {

    const { colorMode } = useColorMode();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className='container-info-page'>
            <Flex
                bgImg={colorMode === "dark" ? largeBackgroundKidDark : largeBackgroundKidLight}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                height={'100%'}
                width={'100%'}
                paddingX={isMobile ? '0px': '15px'}
                paddingY={'15px'}
                justifyContent={'center'}
            >
                <Flex width={isMobile ? '100%' : '60%'} flexDirection={'column'}>
                    <Flex flexDirection={isMobile ? 'column' : 'row'} height={isMobile ? '100%' : '60%'} width={'100%'} alignItems={'center'}>
                        <Flex
                            flexDirection={'row'}
                            height={'100%'}
                            width={isMobile ? '88%':'50%'}
                            bgImg={backgroundKid}
                            bgSize={'cover'}
                            justifyContent={'center'}
                            bgPosition={'center'}
                            bgRepeat={'no-repeat'}
                            padding={'30px'}>
                            <Image src={sunGlassKid} />
                        </Flex>
                        <Flex flexDirection={'column'} height={isMobile ? '100%' : '60%'} width={isMobile ? '100%' :'50%'} gap={'2rem'} padding={'15px'} color={'white'} alignItems={'center'}>
                            {/* <Text>What is Dope BoyZ</Text> */}
                            <Image src={whatDopeText} maxW={isMobile ? '300px' : 'auto'}/>
                            <Flex flexDirection={'column'} gap={'1.5rem'} fontSize={isMobile ? '15px' : '1.05vw' } maxW={isMobile ? '300px' : 'auto'} >
                                <Flex flexDirection={'column'} >
                                    Dope BoyZ is a collection of 5555 unique, random
                                    generated cute and slick doodles strolling on the
                                    Ethereum high-ways blockchain, waiting to be displayed in the metaverse art gallery
                                </Flex>
                                <Flex flexDirection={'column'}>
                                    Every Dope Boy is unique and programmatically
                                    generated from over 150+ possible attributes and slick doodles strolling on the
                                    Ethereum high-ways blockchain, waiting to be
                                    displayed in the metaverse art gallery
                                </Flex>
                                <Text>Their only need is a good caring and patient parent.</Text>
                            </Flex>
                        </Flex>

                    </Flex>
                    <Flex flexDirection={'row'} height={'40%'} width={'100%'} justifyContent={'space-evenly'} marginTop={'15px'} paddingBottom={'15px'}>
                        <Image src={thirdKid} maxBlockSize={isMobile ? '100px' : 'auto'}/>
                        <Image src={secondKid} maxBlockSize={isMobile ? '100px' : 'auto'}/>
                        <Image src={firstKid} maxBlockSize={isMobile ? '100px' : 'auto'}/>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
}
