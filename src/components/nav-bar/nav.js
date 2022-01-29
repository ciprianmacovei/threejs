import React, { useEffect } from 'react';
import './nav.css';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    useColorMode,
    Image,
    chakra,
    VisuallyHidden,
    PopoverArrow,
    PopoverBody
} from '@chakra-ui/react';

import { FaDiscord, FaTwitter } from 'react-icons/fa';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';

import doodleLogo from '../../assets/Logo.png';

import { setTheme } from '../../Services/appService';

export default function NavBar() {
    let scrollValue;
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const toggleColor = () => {
        if (colorMode === 'light') {
            toggleColorMode('dark');
            setTheme.next('dark');
        } else {
            toggleColorMode('light');
            setTheme.next('light');
        }
    }

    const scrollEffect = () => {
        const navBar = document.querySelector('div.nav-bar');
        scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollValue > 0) {
            if (localStorage.getItem('chakra-ui-color-mode') === 'dark') {
                navBar.style.backgroundColor = '#171923';
                navBar.style.animationName = 'transparentToBlack';
            } else {
                navBar.style.backgroundColor = '#F7FAFC';
                navBar.style.animationName = 'transparentToWhite';
            }
        } else {
            navBar.style.backgroundColor = 'transparent';
            if (localStorage.getItem('chakra-ui-color-mode') === 'dark') {
                navBar.style.animationName = 'blackToTransparent';
            } else {
                navBar.style.animationName = 'whiteToTransparent';
            }
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollEffect)
        if (localStorage.getItem('chakra-ui-color-mode') === null) {
            toggleColorMode('dark');
            // setTheme('dark');
            // console.log('am intrat');
        }
    })

    return (
        <Box className='nav-bar'>
            <Flex
                bg={'transparent'}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                maxW={isMobile ? '350px' : 'auto'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    {/* <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Logo
                    </Text> */}
                    <Image src={doodleLogo} className='logo' alt='Doodle Logo' maxW={isMobile ? '170px' : 'auto'} />
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10} justify={'center'} align={'center'} width={'100%'}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button onClick={toggleColor}>
                        {localStorage.getItem('chakra-ui-color-mode') === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    {/* <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
                    </Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Sign Up
                    </Button> */}
                    <Stack direction={'row'} spacing={6} alignItems={'center'}>
                        <SocialButton label={'Discord'} href={'#'}>
                            <FaDiscord />
                        </SocialButton>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                    </Stack>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={12}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            {navItem.notReady ?
                                <div>
                                    <Link
                                        // as={RouterLink}
                                        target={!!navItem.target ? '_blank' : '_self'}
                                        pointerEvents={!!navItem.target ? 'none' : 'auto'}
                                        onClick={() => navItem.jumpToView ? document.querySelector(navItem.href).scrollIntoView() : document.scrollTop(0)}
                                        p={2}
                                        href={navItem.href ?? '#'}
                                        // to={navItem.href ?? '#'}
                                        fontSize={'sm'}
                                        fontWeight={500}
                                        color={linkColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}>
                                        {navItem.label}
                                    </Link>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverBody>
                                            <Text textAlign={'center'}>This feature is under construction</Text>
                                        </PopoverBody>
                                    </PopoverContent>
                                </div>
                                : <Link
                                    // as={RouterLink}
                                    target={!!navItem.target ? '_blank' : '_self'}
                                    pointerEvents={!!navItem.target ? 'none' : 'auto'}
                                    onClick={() => navItem.jumpToView ? document.querySelector(navItem.href).scrollIntoView() : document.scrollTop(0)}
                                    p={2}
                                    href={navItem.href ?? '#'}
                                    // to={navItem.href ?? '#'}
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    {navItem.label}
                                </Link>}
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'flex'}
            justifyContent={'flex-start'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const NAV_ITEMS = [
    {
        label: 'HOME',
        href: '#',
    },
    // {
    //     label: 'TEAM',
    //     href: '/team',
    //     children: [
    //         {
    //             label: 'Explore Design Work',
    //             subLabel: 'Trending Design to inspire you',
    //             href: '#',
    //         },
    //         {
    //             label: 'New & Noteworthy',
    //             subLabel: 'Up-and-coming Designers',
    //             href: '#',
    //         },
    //     ],
    // },
    // {
    //     label: 'NFTS',
    //     children: [
    //         {
    //             label: 'Job Board',
    //             subLabel: 'Find your dream design job',
    //             href: '#',
    //         },
    //         {
    //             label: 'Freelance Projects',
    //             subLabel: 'An exclusive list for contract work',
    //             href: '#',
    //         },
    //     ],
    // },

    {
        label: 'ROAD MAP',
        href: '#roadMap',
        jumpToView: true
    },
    {
        label: 'TEAM',
        href: '#team',
        jumpToView: true
    },
    {
        label: 'VIRTUAL ART GALLERY',
        href: '/virtual-art-gallery',
        target: true,
        notReady: true
    }
];
