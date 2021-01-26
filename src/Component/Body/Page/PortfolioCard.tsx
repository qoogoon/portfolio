import React from "react"
import style from "./PortfolioCard.module.scss"

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
    className?: string
}
export default function PortfolioCard(props: PortfolioCardProps) {
    const { onClick, className, data } = props
    const { company, descripts, devDate, skill, thumbNailImgSrc, title } = data
    return <div className={`${className} ${style.container}`} onClick={onClick}>
        <div className={style.col1}>
            <img src={thumbNailImgSrc}></img>
            <div className={`${style.item} ${style.title}`}>{data.title}</div>
            <div className={`${style.item} ${style.devDate}`}>{data.devDate}</div>
        </div>

        <div className={style.col2}>
            {descripts.map((descript, index) => {
                return <div className={`${style.item} ${style.descript}`} key={index}>{descript}</div>
            })}
            <div className={`${style.item} ${style.company}`}>{data.company}</div>
            <div className={`${style.item} ${style.skill}`}>{data.skill}</div>
        </div>
    </div>
}
