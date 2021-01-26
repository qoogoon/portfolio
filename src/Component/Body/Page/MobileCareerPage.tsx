import React from "react"
import style from "./WebCareerPage.module.scss"

//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard, { PortfolioData } from "./PortfolioCard"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion

import WebImg001 from "../../../Resource/web/phc/001.jpg"
import WebImg002 from "../../../Resource/web/phc/002.jpg"
import WebImg003 from "../../../Resource/web/phc/003.jpg"
import WebImg004 from "../../../Resource/web/phc/004.jpg"
import WebImg005 from "../../../Resource/web/phc/005.jpg"

import WebImg101 from "../../../Resource/web/novel/001.png"
import WebImg201 from "../../../Resource/web/otaku/001.png"


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
    { name: 'ASP.NET', level: 3 },
    { name: 'PostgreSQL', level: 2.5 },
    { name: 'CSS', level: 2.5 },
    { name: 'SCSS', level: 1 },
];
const webPortfolio1: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`현대 1차벤더 조립라인의 데이터를 정보화하여 DashBoard 및 분석도구 제공.`,
            `실시간으로 쏟아져나오는 라인의 데이터를 가공하여, 사용자에게 표와 그래프로 정보를 가공.`],
    devDate: "2020/05/03 ~ 2021/01/26",
    skill: "#React #ASP.NET #MSSQL #SCSS",
    thumbNailImgSrc: WebImg001,
    title: "스마트팩토리\nDashBoard & Analysis"
}
const webPortfolio2: PortfolioData = {
    company: "개인프로젝트(개발중)",
    descripts:
        [`웹사이트에서 게임을 만들고 모바일 앱에서 즐기는 어플리케이션`, `소설 어드벤쳐 게임인 서울2033을 오마주.`,
            ``],
    devDate: "2020/03/03 ~ ",
    skill: "#React #Redux #Konvajs #FireStore(NoSql) #Firebase Function(NoServer) ",
    thumbNailImgSrc: WebImg101,
    title: "소설게임 생성툴"
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
                <PortfolioCard className={style.item} data={webPortfolio1} onClick={
                    () => {
                        setImgPortfolioOpen(true)
                        setImgRouteList([WebImg001, WebImg002, WebImg003, WebImg004, WebImg005])
                        setImgMode("web")
                    }
                } />
                <PortfolioCard className={style.item} data={webPortfolio3} onClick={
                    () => {
                        window.location.assign("https://www.otakutest.kr");
                    }
                } />
                <PortfolioCard className={style.item} data={webPortfolio2} onClick={
                    () => {
                        window.location.assign("http://www.kumestudio.com:8080");

                    }
                } />

            </div>
            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={imgRouteList}
                mode={imgMode} />
        </div>
    )
}


export default MobileCareerPage