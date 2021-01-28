import React from "react"
import style from "./CareerPage.module.scss"
import styleMobile from "./MobileCareerPage.module.scss"

//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard, { PortfolioData } from "./PortfolioCard"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion


import MobileImg001 from "../../../Resource/mobile/phc/001.jpg"
import MobileImg002 from "../../../Resource/mobile/phc/002.jpg"
import MobileImg003 from "../../../Resource/mobile/phc/003.jpg"
import MobileImg004 from "../../../Resource/mobile/phc/004.jpg"
import MobileThumbImg001 from "../../../Resource/mobile/phc/thumb.png"

import MobileImg101 from "../../../Resource/mobile/udmpop/001.jpg"
import MobileImg102 from "../../../Resource/mobile/udmpop/002.jpg"
import MobileImg103 from "../../../Resource/mobile/udmpop/003.jpg"
import MobileImg104 from "../../../Resource/mobile/udmpop/004.jpg"
import MobileImg105 from "../../../Resource/mobile/udmpop/005.png"
import MobileImg106 from "../../../Resource/mobile/udmpop/006.png"
import MobileImg107 from "../../../Resource/mobile/udmpop/007.png"
import MobileThumbImg002 from "../../../Resource/mobile/udmpop/thumb.png"

import WebImg001 from "../../../Resource/web/phc/001.jpg"
import WebImg002 from "../../../Resource/web/phc/002.jpg"
import WebImg003 from "../../../Resource/web/phc/003.jpg"
import WebImg004 from "../../../Resource/web/phc/004.jpg"
import WebImg005 from "../../../Resource/web/phc/005.jpg"

import TimeLineImg from "../../../Resource/timeline.png"

import WebImg101 from "../../../Resource/web/novel/001.png"
import WebImg201 from "../../../Resource/web/otaku/001.png"

const skillData: CareerGraphData[] = [
    { name: 'Android', level: 4 },
    { name: 'Kotlin', level: 4 },
    { name: 'Java', level: 4 },
    { name: 'Nodejs express', level: 3.5 },
    { name: 'MSSQL', level: 3.5 },
    { name: 'RXAndroid', level: 3 },
    { name: 'ASP.NET', level: 3 },
];
const mobilePortfolio1: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`현대 1차벤더 조립라인의 데이터를 정보화하여 실시간 데이터 및 분석도구 제공.`,],
    devDate: "2018/09 ~ 2019/04",
    skill: "#Kotlin #MVVM #RXJava #Retrofit2 #MSSQL #NodeJS express, #FCM",
    thumbNailImgSrc: MobileThumbImg001,
    title: "스마트팩토리 Mobile"
}
const mobilePortfolio2: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`MES 시스템을 모바일로 처리 및 조회.`, `핸드폰, 테블릿, PDA(Android) 지원.`],
    devDate: "2020-01 ~ 2020-04",
    skill: "#Kotlin #MVVM #RXJava #Retrofit2 #MSSQL #NodeJS express",
    thumbNailImgSrc: MobileThumbImg002,
    title: "MES System Mobile"
}
const webPortfolio3: PortfolioData = {
    company: "개인프로젝트",
    descripts:
        [`만화, 애니, 게임 등을 주제로 시험문제를 만들고 풀어보는 사이트.`, `일 평균 활성 사용자 수 500여명`,
            `PlayStore 10만 다운로드`],
    devDate: "2015/02/19 ~ ",
    skill: "#React #Redux #Nodejs express #MS-SQL #Firebase",
    thumbNailImgSrc: WebImg201,
    title: "오덕 테스트 커뮤니티 반응형 웹"
}

function MobileCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    const [imgRouteList, setImgRouteList] = React.useState<string[]>([]);
    const [imgMode, setImgMode] = React.useState<"web" | "mobile">("web");
    return (
        <div className={`${style.Career} ${styleMobile.Career}`}>
            <div className={style.title}>{"Mobile Skill & Project"}</div>
            <div className={style.skill}>
                <div className={`${style.layout} ${styleMobile.ability}`} >
                    <div className={`${style['subTitle']}`}>Ability</div>
                    <CareerGraph data={skillData} barColor={"#84bb74"} />
                </div>
                <div className={`${style.layout} ${styleMobile.timeline}`}>
                    <PortfolioCard className={style.item} data={mobilePortfolio2} type="mobile" onClick={
                        () => {
                            window.location.assign("http://www.kumestudio.com:8080");

                        }
                    } />
                </div>
            </div>
            <div className={style.project}>
                <PortfolioCard className={style.item} data={mobilePortfolio1} type="mobile" onClick={
                    () => {
                        setImgPortfolioOpen(true)
                        setImgRouteList([MobileImg001, MobileImg002, MobileImg003, MobileImg004])
                        setImgMode("mobile")
                    }
                } />
                <PortfolioCard className={style.item} data={mobilePortfolio2} type="mobile" onClick={
                    () => {
                        setImgPortfolioOpen(true)
                        setImgRouteList([MobileImg101, MobileImg102, MobileImg103, MobileImg105, MobileImg106, MobileImg107])
                        setImgMode("mobile")
                    }
                } />
                <PortfolioCard className={style.item} data={mobilePortfolio2} type="mobile" onClick={
                    () => {
                        window.location.assign("http://www.kumestudio.com:8080");

                    }
                } />

            </div>
            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={imgRouteList}
                mode={imgMode}
                description={mobilePortfolio1.descripts}
                title={mobilePortfolio1.title} />
        </div>
    )
}


export default MobileCareerPage