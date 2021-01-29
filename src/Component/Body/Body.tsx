import React from "react"
import { isMobile } from "react-device-detect";
//#region component
import IntroPage from "./Page/IntroPage"
import WebCareerPage from "./Page/MobileCareerPage"
import MobileCareerPage from "./Page/WebCareerPage"
import ContactPage from "./Page/ContactPage"

//#endregion

//#region Swiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
//#endregion

export default function Body() {
    return (
        <Swiper
            mousewheel={true}
            pagination={{ clickable: isMobile }}
            navigation={isMobile}
        >
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><IntroPage /></SwiperSlide>
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><MobileCareerPage /></SwiperSlide>
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage /></SwiperSlide>
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><ContactPage /></SwiperSlide>
        </Swiper>)
}

