import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core"
import style from "./ImageSlideDialog.module.scss"
//#region Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
//#endregion
interface Props {
    open: boolean;
    onClose: () => void;
    imgList: string[];
    mode: "web" | "mobile"
}
export default function ImageSlideDialog(props: Props) {
    const { onClose, open, imgList, mode } = props
    console.log(imgList)
    return <Dialog
        className={style.ImageSlideDialog}
        fullWidth={true}
        maxWidth={mode === "web" ? 'lg' : 'sm'}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <div>
            <Swiper
                mousewheel={true}
                pagination={{ clickable: true }}
                navigation={true}
            >
                {imgList.map((img, index) => {
                    return <SwiperSlide key={index}>
                        <div>
                            <img className={mode === "web" ? style.webImage : style.mobileImage} src={img} />
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>


    </Dialog>
}