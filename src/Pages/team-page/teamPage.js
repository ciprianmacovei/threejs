import React from 'react';
import { Text, Flex, Image } from '@chakra-ui/react';

import teamBackgroundPic from '../../assets/teampage/Team.png';
import mainBackground from '../../assets/teampage/background.png';

import './teamPage.css';

export default function Team() {

    return (
        <div className='container-team-page'>
            <Flex flexDirection={'column'}
                bgImage={mainBackground}
                bgSize={'contain'}
                height={'100%'}
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                color={'#7951B5'}
                gap={'1rem'}>
                <Text color={'#7951B5'} fontSize={'80px'} fontWeight={'bold'} maxH={'70px'} >Team</Text>

                <Flex
                    height={'80%'}
                    width={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    paddingBottom={'10vh'}
                    color={'#7951B5'}
                >

                    <Flex width={'20%'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} height={'100%'}>
                        <Flex flexDirection={'column'} alignItems={'flex-end'} width={'100%'} marginRight={'20px'}>
                            <Text fontSize={'50px'}>Fryzy</Text>
                            <Text fontSize={'30px'}>artist</Text>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems={'flex-end'} width={'100%'} marginRight={'20px'}>
                            <Text fontSize={'50px'}>Kiddo</Text>
                            <Text fontSize={'30px'}>digital marketing</Text>
                        </Flex>
                    </Flex>
                    <Flex width={'25%'}>
                        <Image src={teamBackgroundPic} />
                    </Flex>
                    <Flex width={'20%'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} height={'100%'}>
                        <Flex flexDirection={'column'} alignItems={'flex-start'} width={'100%'} marginLeft={'20px'}>
                            <Text fontSize={'50px'}>Blu</Text>
                            <Text fontSize={'30px'}>advisor</Text>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems={'flex-start'} width={'100%'} marginLeft={'20px'}>
                            <Text fontSize={'50px'}>Maco</Text>
                            <Text fontSize={'30px'}>software engineer</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </div>

    );
}
