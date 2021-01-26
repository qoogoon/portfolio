import React from "react"
import style from "./PortfolioCard.module.scss"

interface PortfolioCardProps {
    onClick: () => void,
    thumbNailImgSrc: string,
    className?: string
}
export default function PortfolioCard(props: PortfolioCardProps) {
    const { onClick, className, thumbNailImgSrc } = props
    return <div className={`${className} ${style.container}`} onClick={onClick}>
        <div className={style.thumbNail}>
            {/* <img style={{ backgroundImage: `url(${thumbNailImgSrc})` }}></img> */}
            {/* <div style={{ backgroundImage: `url(${thumbNailImgSrc})` }}></div> */}
            <img src={thumbNailImgSrc}></img>
        </div>

        <div className={style.content}>

        </div>
    </div>
}
