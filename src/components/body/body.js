import React from 'react';
import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import Footer from '../footer/footer';
import RoadMap from '../../Pages/road-map-page/roadMapPage';

import Card from '../ui-components/cards/cards';

import './body.css';
import 'swiper/css';

import card1 from '../../assets/cards-img/1.jpg';
import card2 from '../../assets/cards-img/2.jpg';
import card3 from '../../assets/cards-img/3.jpg';
import Info from '../../Pages/info-page/infoPage';
import Team from '../../Pages/team-page/teamPage';

SwiperCore.use([Autoplay]);

function Body() {

    return (
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
                <Team/>
            </div>
            {/* <Swiper slidesPerView={3} spaceBetween={30} autoplay={{ delay: 500, disableOnInteraction: false, reverseDirection: true, waitForTransition: true }}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
            {/* </Flex> */}
            <Footer />
        </div>
    )
}

export default Body;
