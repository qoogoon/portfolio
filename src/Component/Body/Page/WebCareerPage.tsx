import React from "react"
import "./WebCareerPage.css"
import IntroImage from "Resource/intro.png"
import { Card, CardContent, Typography } from "@material-ui/core"
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
//#endregion

import MabinogiImg from "../../../Resource/mabinogi.png"
import AndroidImg from "../../../Resource/android.png"
import ReactImg from "../../../Resource/react.png"
import CareerImg from "../../../Resource/career.png"
import HomeImg from "../../../Resource/home.png"
import HobbyImg from "../../../Resource/hobby.png"


interface CardItem {
    title: string;
    content: string;
    imgSrc?: string;
}

const data = [
    {
        name: 'FrontEnd', level: 4,
    },
    {
        name: 'BackEnd', level: 4,
    },
    {
        name: 'Design', level: 1.5,
    },
    {
        name: 'Animation', level: 1,
    },
];

function WebCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    return (
        <div className="webCareer Career">
            <div className="title">{"Web Skill & Project"}</div>
            <div className="skill">
                <div className="layout ability">
                    <div className="subTitle">Ability</div>
                    {/* <ResponsiveContainer width="95%" height={400}>
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
                    </ResponsiveContainer> */}

                </div>
                <div className="layout language">

                </div>
            </div>
            <div className="project">
                <div className="item" onClick={() => {
                    setImgPortfolioOpen(true)
                }}></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={[MabinogiImg
                    , AndroidImg
                    , ReactImg
                    , CareerImg
                    , HomeImg
                    , HobbyImg]} />
            {/* <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={[MabinogiImg]} /> */}
        </div>
    )
}

export default WebCareerPage