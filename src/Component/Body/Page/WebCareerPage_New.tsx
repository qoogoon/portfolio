import React from "react"
// import style from "./CareerPage.module.scss"
import style from "./WebCareerPage_New.module.scss"
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard_New, { PortfolioData } from "./PortfolioCard_New"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion

import WebImg001 from "../../../Resource/web/phc/001.jpg"
import WebImg002 from "../../../Resource/web/phc/002.jpg"
import WebImg003 from "../../../Resource/web/phc/003.jpg"
import WebImg004 from "../../../Resource/web/phc/004.jpg"
import WebImg005 from "../../../Resource/web/phc/005.jpg"

import WebImg101 from "../../../Resource/web/novel/001.png"
import WebImg201 from "../../../Resource/web/otaku/001.png"
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
interface CardItem {
    title: string;
    content: string;
    imgSrc?: string;
}

// const abilityData: CareerGraphData[] = [
//     { name: 'FrontEnd', level: 4 },
//     { name: 'BackEnd', level: 4 },
//     { name: 'Design', level: 1.5 },
//     { name: 'Animation', level: 1 },
// ];
const webSkillData: CareerGraphData[] = [
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Nodejs express', level: 70 },
    { name: 'MSSQL', level: 70 },
    { name: 'Redux', level: 60 },
    { name: 'ASP.NET', level: 60 },
    { name: 'CSS', level: 50 },
    { name: 'SCSS', level: 20 },
];
const webPortfolio1: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`현대 1차벤더 조립라인의 데이터를 정보화하여 실시간 정보 및 분석도구 제공.`,
            `실시간으로 쏟아져나오는 라인의 데이터를 가공하여, 사용자에게 표와 그래프로 정보를 가공.`],
    devDate: "2020/05/03 ~ 2021/01/26",
    skill: "#React #ASP.NET #MSSQL #SCSS 　　　　　　　　　　　　",
    thumbNailImgSrc: WebImg001,
    title: "스마트팩토리\nDashBoard Web"
}
const webPortfolio2: PortfolioData = {
    company: "개인프로젝트(개발중)",
    descripts:
        [`웹사이트에서 게임을 만들고 모바일 앱에서 즐기는 어플리케이션`, `소설 어드벤쳐 게임인 서울2033을 오마주.`,
            ``],
    devDate: "2020/03/03 ~ ",
    skill: "#React #Redux #Konvajs #FireStore(NoSql) #Firebase Function(NoServer) ",
    thumbNailImgSrc: WebImg101,
    title: "소설게임 생성툴 Web"
}
const webPortfolio3: PortfolioData = {
    company: "개인프로젝트",
    descripts:
        [`만화, 애니, 게임 등을 주제로 시험문제를 만들고 풀어보는 사이트.`, `일 평균 활성 사용자 수 500여명`,
            `PlayStore 10만 다운로드`],
    devDate: "2015/02/19 ~ ",
    skill: "#React #Redux #Nodejs express #MS-SQL #Firebase",
    thumbNailImgSrc: WebImg201,
    title: "매니아 테스트 커뮤니티 반응형 Web"
}
const mobileSkillData: CareerGraphData[] = [
    { name: 'Android', level: 80 },
    { name: 'Kotlin', level: 80 },
    { name: 'Java', level: 80 },
    { name: 'Nodejs express', level: 70 },
    { name: 'MSSQL', level: 70 },
    { name: 'RXAndroid', level: 60 },
    { name: 'ASP.NET', level: 60 },
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
const mobilePortfolio3: PortfolioData = {
    company: "개인프로젝트",
    descripts:
        [`만화, 애니, 게임 등을 주제로 시험문제를 만들고 풀어보는 사이트.`, `일 평균 활성 사용자 수 500여명`,
            `PlayStore 10만 다운로드`],
    devDate: "2015/02/19 ~ ",
    skill: "#React #Redux #Nodejs express #MS-SQL #Firebase",
    thumbNailImgSrc: WebImg201,
    title: "오덕 테스트 커뮤니티 반응형 웹"
}

function WebCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    const [imgRouteList, setImgRouteList] = React.useState<string[]>([]);
    const [imgMode, setImgMode] = React.useState<"web" | "mobile">("web");
    return (
        <div className={style.Career}>
            <div className={`${style.layout} ${style.skill}`}>
                <div className={style.graph}>
                    <div className={style.graphTitle}>Android</div>
                    <CareerGraph data={mobileSkillData} barColor={"#8884d8"} />
                </div>
                <div className={style.graph} >
                    <div className={style.graphTitle}>Web</div>
                    <CareerGraph data={webSkillData} barColor={"#84bb74"} />
                </div>


            </div>

            {/* <div className={`${style.column} ${style.portfolio}`}>
                <div className={`${style.layout} `} style={{ marginBottom: "10px" }}>
                    <PortfolioCard_New className={style.item} data={mobilePortfolio1} type="mobile" onClick={
                        () => {
                            setImgPortfolioOpen(true)
                            setImgRouteList([MobileImg001, MobileImg002, MobileImg003, MobileImg004])
                            setImgMode("mobile")
                        }
                    } />
                </div>
                <div className={`${style.layout}`} style={{ marginTop: "10px" }}>
                    <PortfolioCard_New className={style.item} data={webPortfolio1} type="web" onClick={
                        () => {
                            setImgPortfolioOpen(true)
                            setImgRouteList([WebImg001, WebImg002, WebImg003, WebImg004, WebImg005])
                            setImgMode("web")
                        }
                    } />
                </div>
            </div> */}
            <div className={`${style.column} ${style.portfolio}`}>
                <div className={`${style.layout}`} style={{ marginBottom: "10px" }}>
                    <PortfolioCard_New className={style.item} data={mobilePortfolio1} type="mobile" onClick={
                        () => {
                            setImgPortfolioOpen(true)
                            setImgRouteList([MobileImg001, MobileImg002, MobileImg003, MobileImg004])
                            setImgMode("mobile")
                        }
                    } />
                </div>
                <div className={`${style.layout}`} style={{ marginTop: "10px" }}>
                    <PortfolioCard_New className={style.item} data={webPortfolio1} type="web" onClick={
                        () => {
                            setImgPortfolioOpen(true)
                            setImgRouteList([WebImg001, WebImg002, WebImg003, WebImg004, WebImg005])
                            setImgMode("web")
                        }
                    } />


                </div>
            </div>
            <div className={`${style.column} ${style.portfolio}`}>
                <div className={`${style.layout}`} style={{ marginBottom: "10px" }}>
                    <PortfolioCard_New className={style.item} data={mobilePortfolio2} type="mobile" onClick={
                        () => {
                            setImgPortfolioOpen(true)
                            setImgRouteList([MobileImg101, MobileImg102, MobileImg103, MobileImg105, MobileImg106, MobileImg107])
                            setImgMode("mobile")
                        }
                    } />
                </div>
                <div className={`${style.layout}`} style={{ marginTop: "10px" }}>
                    <PortfolioCard_New className={style.item} data={webPortfolio3} type="web" onClick={
                        () => {
                            window.location.assign("https://www.otakutest.kr");
                        }
                    } />


                </div>
            </div>
            <div className={`${style.column} ${style.portfolio}`}>
                <div className={`${style.layout}`} style={{ marginBottom: "10px" }}>
                    <PortfolioCard_New className={style.item} data={mobilePortfolio2} type="mobile" onClick={
                        () => {
                            window.location.assign("http://www.kumestudio.com:8080");

                        }
                    } />

                </div>
                <div className={`${style.layout}`} style={{ marginTop: "10px" }}>
                    <PortfolioCard_New className={style.item} data={webPortfolio2} type="web" onClick={
                        () => {
                            window.location.assign("http://www.kumestudio.com:8080");

                        }
                    } />
                </div>
            </div>

            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={imgRouteList}
                mode={imgMode}
                description={webPortfolio1.descripts}
                title={webPortfolio1.title} />
        </div>
    )
    // return (
    //     <div className={`${style.Career} `}>
    //         <div className={style.title}>{"Web Skill & Project"}</div>
    //         <div className={style.skill}>
    //             <div className={`${style.layout} ${style.ability}`} >
    //                 <div className={`${style['subTitle']}`}>Ability</div>
    //                 <CareerGraph data={abilityData} barColor={"#8884d8"} />
    //             </div>
    //             <div className={`${style.layout} ${style.language}`}>
    //                 <div className={`${style['subTitle']}`}>Skill</div>
    //                 <CareerGraph data={skillData} barColor={"#8884d8"} />
    //             </div>
    //         </div>
    //         <div className={style.project}>
    //             <PortfolioCard className={style.item} data={webPortfolio1} type="web" onClick={
    //                 () => {
    //                     setImgPortfolioOpen(true)
    //                     setImgRouteList([WebImg001, WebImg002, WebImg003, WebImg004, WebImg005])
    //                     setImgMode("web")
    //                 }
    //             } />
    //             <PortfolioCard className={style.item} data={webPortfolio3} type="web" onClick={
    //                 () => {
    //                     window.location.assign("https://www.otakutest.kr");
    //                 }
    //             } />
    //             <PortfolioCard className={style.item} data={webPortfolio2} type="web" onClick={
    //                 () => {
    //                     window.location.assign("http://www.kumestudio.com:8080");

    //                 }
    //             } />

    //         </div>
    //         <ImageSlideDialog
    //             open={isImgPortfolioOpen}
    //             onClose={() => { setImgPortfolioOpen(false) }}
    //             imgList={imgRouteList}
    //             mode={imgMode} />
    //     </div>
    // )
}
export default WebCareerPage