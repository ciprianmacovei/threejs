import React, { Fragment } from 'react';
import {
    Box, Image, Badge, Text, Stack,
    useColorMode, Button, Flex, Spacer
}
    from "@chakra-ui/react";

import './cards.css';

export default function Card(props) {

    const { colorMode } = useColorMode();

    return (
        <Fragment>
            <Box w="100%" rounded="20px"
                className='animated-body-cards'
                overflow="hidden" bg={colorMode === "dark" ? "gray.700" : "gray.200"} mt={10}>
                <Image src={props.imgUrl}
                    alt="Card Image">
                </Image >
                <Box p={5}>
                    <Stack align="center">
                        <Badge variant="solid" colorScheme="green"
                            rounded="full" px={2}>
                            GeeksForGeeks
                        </Badge>
                    </Stack>
                    <Stack align="center">
                        <Text as="h2" fontWeight="normal" my={2} >
                            A Computer Science Portal for Geeks
                        </Text>
                        <Text fontWeight="light">
                            A platform for students to study CSE concepts.
                        </Text>
                    </Stack>
                    <Flex>
                        <Spacer />
                        <Button variant="solid"
                            colorScheme="green" size="sm">
                            Learn More
                        </Button>
                    </Flex>
                </Box>
            </Box >
        </Fragment>
    )
}
