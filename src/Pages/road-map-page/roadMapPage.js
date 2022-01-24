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
        <div className="container-roadmap">
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
                        minWidth={'800px'}
                        minHeight={'200px'}
                        position={'relative'}
                        left={'60%'}
                        top={'10%'}
                    >
                        <Box position={'absolute'}
                            top={'7%'}
                            left={'15%'}

                        >
                            <Flex
                                flexWrap={'wrap'}
                                gap={3}
                                alignItems={'center'}
                            >
                                <Text color={'#205873'} fontSize={'35px'}>Launch + </Text>
                                <Text color={'#ed4367'} fontSize={'40px'}> 15 eth </Text>
                                <Text color={'#205873'} fontSize={'35px'}>+</Text>
                            </Flex>
                            <Flex
                                flexWrap={'wrap'}
                                gap={3}
                                alignItems={'center'}
                            >
                                <Flex flexDirection={'column'} alignSelf={'flex-start'}>
                                    <Text color={'#205873'} fontSize={'18px'} letterSpacing={2}>5555 unique 2D DopeBoyz NFTs </Text>
                                    <Text color={'#205873'} fontSize={'18px'} letterSpacing={2}>launched on Open Sea: </Text>
                                </Flex>
                                <Flex flexDirection={'column'} marginLeft={'2rem'}>
                                    <Flex position={'relative'} bottom={'8rem'} left={'16rem'}>
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
                        <Box bgImage={smallCard1} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'200px'}>
                             <Flex maxWidth={'200px'} px={'5px'} marginTop={'7.2rem'} flexDirection={'column'}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                     1x Tesla CyberTruck
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Giveaway
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    (or $69,420
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    equivalent in ETH)
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    to one lucky Dope BoyZ minter!
                                </Text>
                            </Flex>
                        </Box>

                        <Box bgImage={smallCard2} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'200px'}>
                             <Flex maxWidth={'200px'} px={'5px'} marginTop={'7.5rem'} flexDirection={'column'}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    7.5 ETH
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    (15 x 0.5)
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Giveaway
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    raffled to
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    lucky minters!
                                </Text>
                            </Flex>
                        </Box>

                        <Box bgImage={smallCard3} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'200px'}>
                            <Flex maxWidth={'200px'} px={'5px'} marginTop={'7.5rem'} flexDirection={'column'}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    5.0 ETH
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    (10 x 0.5)
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Giveaway
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    raffled to
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    lucky minters!
                                </Text>
                            </Flex>
                        </Box>

                        <Box bgImage={smallCard4} boxSize={'sm'} bgSize={'contain'} bgRepeat={'no-repeat'} minHeight={'225px'} minWidth={'200px'}>
                            <Flex maxWidth={'200px'} px={'5px'} marginTop={'7.5rem'} flexDirection={'column'}>
                                <Text fontSize={'13px'} textAlign={'center'} >
                                    2.5 ETH
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    (5 x 0.5)
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Giveaway
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    to lucky
                                </Text>
                                <Text fontSize={'13px'} textAlign={'center'}>
                                    Dope BoyZ minters!
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
                            <Text color={'#205873'} fontSize={'35px'} textAlign={'center'}>3D Dope BoyZ enter the Metaverse</Text>
                            <Flex>
                                <Text fontSize={'38px'} color={'#61dde1'}>9999</Text>
                                <Flex flexDirection={'column'} marginLeft={'1rem'}>
                                    <Flex>
                                        <Image src={arrowUp} maxWidth={'20px'} maxHeight={'17px'} marginTop={'5px'} marginRight={'7px'} />
                                        <Flex gap={3}>
                                            <Text fontSize={'20px'} color={'#61dde1'}>5555</Text>
                                            <Text fontSize={'20px'} color={'#205873'}>whitelists for 2D holders / 1 free (only paying the gas fee) for every 3 2D Dope Boyz you hold</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex>
                                        <Image src={arrowDown} maxWidth={'20px'} maxHeight={'17px'} marginBottom={'5px'} marginRight={'7px'} />
                                        <Flex alignItems={'center'} gap={3}>
                                            <Text fontSize={'20px'} color={'#61dde1'}>4444</Text>
                                            <Text fontSize={'20px'} color={'#205873'}>sold +</Text>
                                            <Text fontSize={'25px'} color={'#61dde1'}>20 ethereum giveaway</Text>
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
                        minWidth={'800px'}
                        minHeight={'200px'}
                        position={'relative'}
                        left={'90%'}
                    >
                        <Flex position={'relative'} top={'35%'} left={'20%'} flexDirection={'row'} gap={3}>
                            <Flex width={'60%'}>
                                <Text className="rotated-text-roadmap" fontSize={'20px'} color={'#205873'}>Dope BoyZ Gallery in the Metaverse and a physical one in Cluj-Napoca,<br></br> Romania</Text>
                            </Flex>
                            <Flex width={'40%'} position={'absolute'} left={'16rem'} top={'4rem'}>
                                <Text className="rotated-text-roadmap">Both galleries will be synchronized and you will be able to put your nft for sale or visit</Text>
                            </Flex>

                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}
