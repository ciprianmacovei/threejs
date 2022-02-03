import React from "react";
import { Image, Box, Flex, Text } from '@chakra-ui/react'

import card1 from '../../assets/roadmap/01.png';
import card2 from '../../assets/roadmap/02.png';
import card3 from '../../assets/roadmap/03.png';
import smallCard1 from '../../assets/roadmap/04.png';
import smallCard2 from '../../assets/roadmap/05.png';
import smallCard3 from '../../assets/roadmap/06.png';
import smallCard4 from '../../assets/roadmap/07.png';
import background from '../../assets/roadmap/cirlce.png'
import doodle1Gif from '../../assets/roadmap/ezgif.com-gif-maker (1).gif';
import doodle2Gif from '../../assets/roadmap/ezgif.com-gif-maker (2).gif';
import doodle3Gif from '../../assets/roadmap/ezgif.com-gif-maker.gif';
import arrowUp from '../../assets/roadmap/arrow2.png';
import arrowDown from '../../assets/roadmap/arrow1.png';
import cybertrack from '../../assets/roadmap/cyber.png';


import "./roadMapPage.css";

export default function RoadMap() {
    return (
        <div className="container-roadmap-page">
            <Text fontSize={'80px'} color={'orange.300'} fontWeight={'bold'} textAlign={'center'} marginTop={'10vh'}>Road Map</Text>
            <Flex
                bgImage={background}
                bgRepeat={'no-repeat'}
                bgPosition={'left'}
                bgSize={'contain'}
                height={'100%'}
                maxWidth={'1450px'}
                marginY={'2vh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <Box boxSize='sm' display={'flex'} flexDirection={'column'} position={'relative'}>
                    <Image src={doodle1Gif} maxHeight={'130px'} position={'absolute'} top={'15%'} left={'33%'} />
                    <Box bgImage={card1}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        minWidth={'900px'}
                        minHeight={'200px'}
                        position={'relative'}
                        left={'60%'}
                        top={'10%'}
                    >
                        <Box position={'absolute'}
                            top={'10%'}
                            left={'15%'}
                        >
                            <Flex
                                alignItems={'center'}
                            >
                                <Flex alignSelf={'flex-start'}>
                                    <span style={{ color: '#205873', fontSize: '24px' }}>
                                        5555 unique 2D Boujee BoyZ NFTs
                                        minted on Ethereum Blockchain
                                    </span>

                                </Flex>
                                <Flex flexDirection={'column'}>
                                    <Flex position={'relative'} right={'3rem'}>
                                        <Image src={cybertrack} maxWidth={'400px'} maxHeight={'200px'} />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'row-reverse'}
                        minWidth={'800px'}
                        left={'100%'}
                        position={'relative'}
                        bottom={'5%'}
                    >
                        <Box bgImage={smallCard1} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'210px'}>
                            <Flex maxWidth={'210px'} px={'10px'} marginTop={'8.5rem'} flexDirection={'column'} gap={0.5}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    1x Cyber Truck Giveaway
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    (or 69.420 equivalent in ETH)
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    To one lucky Boujee Boy minter.
                                </Text>
                            </Flex>
                        </Box>

                        <Box bgImage={smallCard2} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'210px'}>
                            <Flex maxWidth={'210px'} px={'10px'} marginTop={'8.5rem'} flexDirection={'column'} gap={0.5}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    Doodle NFT raffled to one lucky holder
                                </Text>

                            </Flex>
                        </Box>

                        <Box bgImage={smallCard3} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'210px'}>
                            <Flex maxWidth={'210px'} px={'10px'} marginTop={'8.5rem'} flexDirection={'column'} gap={0.5}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    Alien Frens NFT raffled to lucky holders
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    50 real life Boujee Boyz Posters raffled
                                </Text>
                            </Flex>
                        </Box>

                        <Box bgImage={smallCard4} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'210px'}>
                            <Flex maxWidth={'210px'} px={'10px'} marginTop={'8.5rem'} flexDirection={'column'} gap={0.5}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    Alpha chat opens to all Holders
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Little Lemon Friends NFTs raffled to
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Lucky holders
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Box>

                <Box boxSize='sm' display={'flex'} flexDirection={'row'} position={'relative'}>
                    <Image src={doodle2Gif} maxHeight={'130px'} position={'absolute'} top={'35%'} right={'-25%'} />
                    <Box bgImage={card2}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        minWidth={'900px'}
                        minHeight={'220px'}
                        position={'relative'}
                        left={'120%'}
                        top={'20%'}
                    >
                        <Flex position={'absolute'} top={'32%'} left={'16%'} flexDirection={'column'}>
                            <Text color={'#205873'} fontSize={'32px'} textAlign={'center'}>Boujee BoyZ enters the Metaverse</Text>
                            <Flex>
                                <Text fontSize={'38px'} color={'#61dde1'}>9999</Text>
                                <Flex flexDirection={'column'} marginLeft={'1rem'}>
                                    <Flex>
                                        <Image src={arrowUp} maxWidth={'20px'} maxHeight={'17px'} marginTop={'5px'} marginRight={'7px'} />
                                        <Flex gap={3}>
                                            <Text fontSize={'20px'} color={'#61dde1'}>5555</Text>
                                            <Text fontSize={'20px'} color={'#205873'}>whitelists for 2D holders / 1 free (only paying the gas fee) for every three 2D Boujee BoyZ you hold</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex>
                                        <Image src={arrowDown} maxWidth={'20px'} maxHeight={'17px'} marginBottom={'5px'} marginRight={'7px'} />
                                        <Flex alignItems={'center'} gap={3}>
                                            <Text fontSize={'20px'} color={'#61dde1'}>4444</Text>
                                            <Text fontSize={'20px'} color={'#205873'}>for public sale +</Text>
                                            <Text fontSize={'25px'} color={'#61dde1'}>NFT giveaways & more</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Box boxSize='sm' display={'flex'} flexDirection={'row'} position={'relative'}>
                    <Image src={doodle3Gif} maxHeight={'130px'} position={'absolute'} top={'25%'} left={'60%'} />
                    <Box bgImage={card3}
                        bgRepeat={'no-repeat'}
                        bgPosition={'center'}
                        bgSize={'cover'}
                        minWidth={'850px'}
                        minHeight={'200px'}
                        position={'relative'}
                        left={'90%'}
                    >
                        <Flex position={'relative'} top={'30%'} left={'20%'} flexDirection={'row'} gap={3}>
                            <Flex width={'60%'}>
                                <Text className="rotated-text-roadmap" fontSize={'20px'} color={'#205873'}>Boujee BoyZ Gallery in the Metaverse and a physical one in Cluj-Napoca, Romania</Text>
                            </Flex>
                            <Flex width={'100%'} position={'absolute'} top={'4rem'} maxWidth={'600px'}>
                                <Text className="rotated-text-roadmap">We will purchase land in Wilder World or Decentraland and build our Art Gallery on it. Both galleries will be synchronized and you will be able put your NFT for sale or just display it as an art piece or visit the Gallery with your 3D Boujee Boy NFT. </Text>
                            </Flex>

                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}
