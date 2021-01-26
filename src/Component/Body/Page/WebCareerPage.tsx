import React from "react"
import style from "./WebCareerPage.module.scss"
import IntroImage from "Resource/intro.png"
import { Card, CardContent, Typography } from "@material-ui/core"
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard from "./PortfolioCard"
//#endregion

import WebImg1 from "../../../Resource/web/phc/001.jpg"
import WebImg2 from "../../../Resource/web/phc/002.jpg"
import WebImg3 from "../../../Resource/web/phc/003.jpg"
import WebImg4 from "../../../Resource/web/phc/004.jpg"
import WebImg5 from "../../../Resource/web/phc/005.jpg"

import MobileImg1 from "../../../Resource/mobile/udmpop/01.jpg"
import MobileImg2 from "../../../Resource/mobile/udmpop/02.jpg"
import MobileImg3 from "../../../Resource/mobile/udmpop/03.jpg"
import MobileImg4 from "../../../Resource/mobile/udmpop/04.jpg"
import MobileImg5 from "../../../Resource/mobile/udmpop/05.jpg"

interface CardItem {
    title: string;
    content: string;
    imgSrc?: string;
}

interface CareerGraphData {
    name: string;
    level: number;
}

const abilityData: CareerGraphData[] = [
    { name: 'FrontEnd', level: 4 },
    { name: 'BackEnd', level: 4 },
    { name: 'Design', level: 1.5 },
    { name: 'Animation', level: 1 },
];
const skillData: CareerGraphData[] = [
    { name: 'TypeScript', level: 4 },
    { name: 'React', level: 4 },
    { name: 'Nodejs express', level: 4 },
    { name: 'MSSQL', level: 3.5 },
    { name: 'Redux', level: 3 },
    { name: 'CSS', level: 2.5 },
    { name: 'SCSS', level: 1 },
];

function WebCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    const [imgRouteList, setImgRouteList] = React.useState<string[]>([]);
    const [imgMode, setImgMode] = React.useState<"web" | "mobile">("web");
    return (
        <div className={style.Career}>
            <div className={style.title}>{"Web Skill & Project"}</div>
            <div className={style.skill}>
                <div className={`${style.layout} ${style.ability}`} >
                    <div className={`${style['subTitle']}`}>Ability</div>
                    <CareerGraph data={abilityData} />
                </div>
                <div className={`${style.layout} ${style.language}`}>
                    <div className={`${style['subTitle']}`}>Skill</div>
                    <CareerGraph data={skillData} />
                </div>
            </div>
            <div className={style.project}>
                <PortfolioCard className={style.item} thumbNailImgSrc={WebImg1} onClick={
                    () => {
                        setImgPortfolioOpen(true)
                        setImgRouteList([WebImg1, WebImg2, WebImg3, WebImg4, WebImg5])
                        setImgMode("web")
                    }
                } />
                <PortfolioCard className={style.item} thumbNailImgSrc={MobileImg1} onClick={
                    () => {
                        setImgPortfolioOpen(true)
                        setImgRouteList([MobileImg1, MobileImg2, MobileImg3, MobileImg4, MobileImg5])
                        setImgMode("mobile")
                    }
                } />
                <div className={style.item}></div>
            </div>
            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={imgRouteList}
                mode={imgMode} />
        </div>
    )
}

interface CareerGraphProps {
    data: CareerGraphData[]
}
function CareerGraph(props: CareerGraphProps) {
    const { data } = props
    return <ResponsiveContainer width="95%" height={400}>
        <BarChart
            data={data}
            margin={{
                top: 30, right: 20, left: 0, bottom: 30,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="level" fill="#8884d8" max={5} />
        </BarChart>
    </ResponsiveContainer>
}
export default WebCareerPage