import React from 'react';
import { Text, Flex, Image } from '@chakra-ui/react';

import teamBackgroundPic from '../../assets/teampage/Team.png';
import mainBackground from '../../assets/teampage/background.png';

import './teamPage.css';

export default function Team() {

    return (
        <div className='container-team-page'>
            <Text color={'#7951B5'} fontSize={'80px'} fontWeight={'bold'} textAlign={'center'} paddingTop={'12rem'}>Team</Text>
            <Flex
                bgImage={mainBackground}
                bgSize={'contain'}
                height={'100%'}
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                marginTop={'10vh'}
                color={'#7951B5'}
                paddingY={'5vh'}
                >
                <Flex width={'20%'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} height={'100%'}>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Text fontSize={'40px'}>Fryzy</Text>
                        <Text fontSize={'20px'}>artist</Text>
                    </Flex>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Text fontSize={'40px'}>Blu</Text>
                        <Text fontSize={'20px'}>advisor</Text>
                    </Flex>
                </Flex>
                <Flex width={'40%'}>
                    <Image src={teamBackgroundPic} />
                </Flex>
                <Flex width={'20%'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} height={'100%'}>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Text fontSize={'40px'}>Kiddo</Text>
                        <Text fontSize={'20px'}>digital marketing</Text>
                    </Flex>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Text fontSize={'40px'}>Maco</Text>
                        <Text fontSize={'20px'}>software engineer</Text>
                    </Flex>
                </Flex>
            </Flex>
        </div>

    );
}
