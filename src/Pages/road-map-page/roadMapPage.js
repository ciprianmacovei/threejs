import React, { useState, useEffect, useRef } from "react";
import { Image, Box, Flex, Text } from '@chakra-ui/react'

import card1 from '../../assets/roadmap/01.png';
import card2 from '../../assets/roadmap/02.png';
import card3 from '../../assets/roadmap/03.png';
import smallCard1 from '../../assets/roadmap/04.png';
import smallCard2 from '../../assets/roadmap/05.png';
import smallCard3 from '../../assets/roadmap/06.png';
import smallCard4 from '../../assets/roadmap/07.png';
import doodle1Gif from '../../assets/roadmap/ezgif.com-gif-maker (1).gif';
import doodle2Gif from '../../assets/roadmap/ezgif.com-gif-maker (2).gif';
import doodle3Gif from '../../assets/roadmap/ezgif.com-gif-maker.gif';
import arrowUp from '../../assets/roadmap/arrow2.png';
import arrowDown from '../../assets/roadmap/arrow1.png';


import "./roadMapPage.css";

export default function RoadMap() {

    const [fontSize, setFontSize] = useState(1);
    const container = useRef();

    useEffect(() => {
        let observe = null;

        if (container.current) {
            resizeObserver.observe(container.current);
            observe = container.current;
        }

        return () => {
            resizeObserver.unobserve(observe);
        }
    })

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.contentBoxSize) {
                console.log(entry.contentRect.width);
                if (entry.contentRect.width > 1600) {
                    setFontSize(0.95);
                } else if (entry.contentRect.width <= 1600 && entry.contentRect.width > 1450) {
                    setFontSize(0.9);
                } else if (entry.contentRect.width <= 1450 && entry.contentRect.width > 1200) {
                    setFontSize(0.8);
                } else if (entry.contentRect.width <= 1200 && entry.contentRect.width > 1000) {
                    setFontSize(0.7);
                } else if (entry.contentRect.width <= 1000 && entry.contentRect.width > 800) {
                    setFontSize(0.5);
                } else if (entry.contentRect.width <= 800 && entry.contentRect.width > 600) {
                    setFontSize(0.4);
                }else if (entry.contentRect.width <= 600) {
                    setFontSize(0.3);
                }
            }
        }
    });


    return (
        <div className="container-roadmap-page" ref={container}>
            <Text fontSize={'15vw'} color={'orange.300'} fontWeight={'bold'} textAlign={'center'} marginTop={'10vh'}>Road Map</Text>
            <Flex
                height={'100%'}
                width={'100%'}
                marginY={'2vh'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                maxWidth={'1600px'}
                gap={'2rem'}
            >
                <Flex flexDirection={'row'} width={'100%'} height={'100%'}>
                    <Image src={doodle1Gif} width={'20%'} height={'20%'} />
                    <Box bgImage={card1}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        width={'85%'}
                    >
                        <Flex justifyContent={'flex-end'} marginTop={fontSize * 8 + 'vh'}>
                            <Flex width={'85%'}>
                                <Text color={'#205873'} fontSize={fontSize * 3 + 'rem'}>
                                    5555 unique 2D Boujee BoyZ NFTs
                                    minted on Ethereum Blockchain
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>

                </Flex>
                <Flex
                    flexDirection={'row-reverse'}
                    width={'100%'} height={'100%'}
                >
                    <Box
                        bgImage={smallCard1}
                        boxSize={'lg'}
                        bgSize={'contain'}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Flex px={'2rem'} marginTop={fontSize < 0.6 ? '7rem' : '11rem'} flexDirection={'column'} gap={0.5}>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'} >
                                1x Cyber Truck Giveaway
                            </Text>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'}>
                                (or 69.420 equivalent in ETH)
                            </Text>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'}>
                                To one lucky Boujee Boy minter.
                            </Text>
                        </Flex>
                    </Box>

                    <Box
                        bgImage={smallCard2}
                        boxSize={'lg'}
                        bgSize={'contain'}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Flex px={'2rem'} marginTop={fontSize < 0.6 ? '4rem' : '8.5rem'} flexDirection={'column'} gap={0.5}>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'} >
                                Doodle NFT raffled to one lucky holder
                            </Text>

                        </Flex>
                    </Box>

                    <Box
                        bgImage={smallCard3}
                        boxSize={'lg'}
                        bgSize={'contain'}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Flex px={'2rem'} marginTop={fontSize < 0.6 ? '4.5rem' : '8.5rem'} flexDirection={'column'} gap={0.5}>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'} >
                                Alien Frens NFT raffled to lucky holders
                            </Text>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'}>
                                50 real life Boujee Boyz Posters raffled
                            </Text>
                        </Flex>
                    </Box>

                    <Box
                        bgImage={smallCard4}
                        boxSize={'lg'}
                        bgSize={'contain'}
                        bgRepeat={'no-repeat'} bgPosition={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Flex px={'2rem'} marginTop={fontSize < 0.6 ? '6rem' : '8.5rem'} flexDirection={'column'} gap={0.5}>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'} >
                                Alpha chat opens to all Holders
                            </Text>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'}>
                                Little Lemon Friends NFTs raffled to
                            </Text>
                            <Text fontSize={fontSize * 1.5 + 'rem'} textAlign={'center'}>
                                Lucky holders
                            </Text>
                        </Flex>
                    </Box>
                </Flex>

                <Flex flexDirection={'row'} width={'100%'} height={'100%'}>
                    <Image src={doodle2Gif} width={'20%'} height={'20%'} />
                    <Box bgImage={card2}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        width={'80%'}
                    >
                        <Flex flexDirection={'column'} width={'100%'} marginTop={fontSize * 7 + 'vh'}>
                            <Text color={'#205873'} fontSize={fontSize * 2.8 + 'rem'} textAlign={'center'}>Boujee BoyZ enters the Metaverse</Text>
                            <Flex justifyContent={'center'} marginLeft={'15vw'}>
                                <Text fontSize={fontSize * 3 + 'rem'} color={'#61dde1'} marginTop={'1vh'}>9999</Text>
                                <Flex flexDirection={'column'}>
                                    <Flex>
                                        <Image src={arrowUp} maxWidth={'2vw'} maxHeight={'2vw'} />
                                        <Flex gap={3}>
                                            <Text fontSize={fontSize * 2 + 'rem'} color={'#61dde1'}>5555</Text>
                                            <Text fontSize={fontSize * 1.7 + 'rem'} color={'#205873'}>whitelists for 2D holders / 1 free (only paying the gas fee) for every three 2D Boujee BoyZ you hold</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex>
                                        <Image src={arrowDown} maxWidth={'2vw'} maxHeight={'2vw'} />
                                        <Flex alignItems={'center'} gap={3}>
                                            <Text fontSize={fontSize * 2 + 'rem'} color={'#61dde1'}>4444</Text>
                                            <Text fontSize={fontSize * 1.7 + 'rem'} color={'#205873'}>for public sale +</Text>
                                            <Text fontSize={fontSize * 1.7 + 'rem'} color={'#61dde1'}>NFT giveaways & more</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>

                <Flex flexDirection={'row'} width={'100%'} height={'100%'}>
                    <Image src={doodle3Gif} height={'20%'} width={'20%'} />
                    <Box bgImage={card3}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        width={'85%'}
                        minHeight={fontSize < 0.5 ? '150px' : '350px'}
                    >
                        <Flex flexDirection={'row'} gap={5} justifyContent={'flex-end'} marginTop={'2vh'}>
                            <Flex width={'40%'} padding={'0.5rem'}  >
                                <Text marginTop={fontSize < 0.5 ? '3vh' : '8vh'} fontSize={fontSize * 2.4 + 'rem'} color={'#205873'}>Boujee BoyZ Gallery in the Metaverse and a physical one in Cluj-Napoca, Romania</Text>
                            </Flex>
                            <Flex width={'40%'} paddingX={'1rem'}>
                                <Text marginTop={fontSize < 0.5 ? '4vh' : '12vh'} className="rotated-text-roadmap" fontSize={fontSize * 1.4 + 'rem'}>We will purchase land in Wilder World or Decentraland and build our Art Gallery on it. Both galleries will be synchronized and you will be able put your NFT for sale or just display it as an art piece or visit the Gallery with your 3D Boujee Boy NFT. </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
}
