import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber'

import App from '../../App';

import SwiperCore, { Autoplay } from 'swiper';

import Info from '../../Pages/info-page/infoPage';
import RoadMap from '../../Pages/road-map-page/roadMapPage';
import Team from '../../Pages/team-page/teamPage';
import Model3d from '../../Pages/3dmode-page/3dmodel';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/nav-bar/nav';

import Card from '../../components/ui-components/cards/cards';

import './masterPage.css';
import 'swiper/css';

import card1 from '../../assets/cards-img/1.jpg';
import card2 from '../../assets/cards-img/2.jpg';
import card3 from '../../assets/cards-img/3.jpg';

export default function Master() {

    return (
        <>
            <NavBar />
            <div className='container'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} distance={100} intensity={4} />
                    <fog attach="fog" color="#D3D3D3" near={59} far={70} />
                    <App />
                </Canvas>
            </div>
            <div className='body-container'>
                {/* <Flex alignItems={'center'} justifyContent={'space-evenly'}>
                <Card imgUrl={card1} />
                <Card imgUrl={card2} />
                <Card imgUrl={card3} />
                </Flex> */}
                {/* <Flex alignItems={'center'} justifyContent={'center'} px={'15px'} height={'50vh'} marginY={'100px'}> */}
                <Info />
                <div id='roadMap'>
                    <RoadMap />
                </div>
                <div id='team'>
                    <Team />
                </div>
                {/* <Model3d/> */}
                {/* <Swiper slidesPerView={3} spaceBetween={30} autoplay={{ delay: 500, disableOnInteraction: false, reverseDirection: true, waitForTransition: true }}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
                {/* </Flex> */}
                <Footer />
            </div>
        </>

    );
}
