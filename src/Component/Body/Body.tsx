import React from "react"
//#region component
import IntroPage from "./Page/IntroPage"
import WebCareerPage from "./Page/WebCareerPage"
import WebCareerPage_New from "./Page/WebCareerPage_New"
import WebCareerPage_New3 from "./Page/WebCareerPage_New3"
import WebCareerPage_New3_1 from "./Page/WebCareerPage_New3_1"
import WebCareerPage_New2 from "./Page/WebCareerPage_New2"
import MobileCareerPage from "./Page/MobileCareerPage"
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
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><IntroPage /></SwiperSlide>
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage_New3 /></SwiperSlide>
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage_New3_1 /></SwiperSlide>
            {/* <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage_New2 /></SwiperSlide> */}
            {/* <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage_New /></SwiperSlide> */}
            {/* <SwiperSlide style={{ height: "100vh", width: "100%" }}><MobileCareerPage /></SwiperSlide> */}
            <SwiperSlide style={{ height: "100vh", width: "100%" }}><ContactPage /></SwiperSlide>
        </Swiper>)
}

