import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
interface Props {
    open: boolean;
    onClose: () => void;
    imgList: string[];
}
export default function ImageSlideDialog(props: Props) {
    const { onClose, open, imgList } = props
    console.log(imgList)
    return <Dialog
        className={"ImageSlideDialog"}
        fullWidth={true}
        maxWidth={'lg'}
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
                        <div style={{ height: "800px", width: "1000px" }}>
                            <img src={img} />
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>


    </Dialog>
}