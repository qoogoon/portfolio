import React from "react"
import style from "./PortfolioCard_New.module.scss"

export interface PortfolioData {
    thumbNailImgSrc: string,
    title: string,
    company: string,
    devDate: string,
    descripts: string[],
    skill: string,
}
interface PortfolioCardProps {
    onClick: () => void,
    data: PortfolioData,
    className?: string,
    type: "web" | "mobile"
}
export default function PortfolioCard(props: PortfolioCardProps) {
    const { onClick, className, data, type } = props
    const { company, descripts, devDate, skill, thumbNailImgSrc, title } = data
    return <div className={`${className} ${style.container}`} onClick={onClick}>
        <div className={style.col1}>
            <img className={style.item} src={thumbNailImgSrc}></img>

            <div className={`${style.item} ${style.title}`}>{data.title}</div>
            <div className={`${style.item} ${style.devDate}`}>{data.devDate}</div>
            <div className={`${style.item} ${style.company}`}>{data.company}</div>
            <div className={`${style.item} ${style.skill}`}>{data.skill}</div>
        </div>
    </div>
}
