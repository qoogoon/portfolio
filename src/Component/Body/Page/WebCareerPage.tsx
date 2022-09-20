import React from "react"
import style from "./CareerPage.module.scss"
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard_New2, { PortfolioData } from "./PortfolioCard"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion
import back1 from "../../../Resource/back1.jpg"
import PhcMonitorImg001 from "../../../Resource/web/phc_monitor/001.png"
import PhcMonitorImg002 from "../../../Resource/web/phc_monitor/002.gif"

import PhcMoldMngImg001 from "../../../Resource/web/phc_mold_mng/001.png"
import PhcMoldMngImg002 from "../../../Resource/web/phc_mold_mng/002.png"
import PhcMoldMngImg003 from "../../../Resource/web/phc_mold_mng/003.png"
import PhcMoldMngImg004 from "../../../Resource/web/phc_mold_mng/004.png"
import PhcMoldMngImg005 from "../../../Resource/web/phc_mold_mng/005.png"


import PhcImg001 from "../../../Resource/web/phc/001.jpg"
import PhcImg002 from "../../../Resource/web/phc/002.jpg"
import PhcImg003 from "../../../Resource/web/phc/003.jpg"
import PhcImg004 from "../../../Resource/web/phc/004.jpg"
import PhcImg005 from "../../../Resource/web/phc/005.jpg"

import WebImg101 from "../../../Resource/web/novel/001.png"
import WebImg201 from "../../../Resource/web/otaku/001.png"
const webSkillData: CareerGraphData[] = [
    { name: 'ASP.NET', level: 90 },
    { name: 'MSSQL', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Nodejs express', level: 70 },
];
const webPortfolio1: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`공장 라인의 기기의 온도&압력 센서 모니터링 시스템.`,
            `ms 단위로 쌓이는 실시간 라인의 데이터를 가공하여, 사용자에게 표와 그래프로 정보를 가공.`],
    devDate: "2022/04/01 ~ 2022/08/30",
    skill: "#React #ASP.NET #MSSQL #SCSS 　　　　　　　　　　　　",
    thumbNailImgSrc: PhcMonitorImg001,
    title: "센서모니터링\nDashBoard Web"
}

const webPortfolio2: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`공장의 주요 자원인 금형, 예비품 등의 입/출고, 각종 점검과 해당 자원의 대시보드 제공.`,
            `모바일 테블릿을 이용하여 점검. 웹뷰와 안드로이드 네이티브 간의 데이터 송수신. `],
    devDate: "2021/09/03 ~ 2022/05/31",
    skill: "#React #ASP.NET #MSSQL #SCSS #Android(WebView)",
    thumbNailImgSrc: PhcMoldMngImg001,
    title: "금형 MES\n Web"
}
const webPortfolio3: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`공장 조립라인의 전반적인 데이터를 정보화하여 실시간 정보 및 분석도구 제공.`],
    devDate: "2020/05/03 ~ 2021/01/26",
    skill: "#React #ASP.NET #MSSQL #SCSS ",
    thumbNailImgSrc: PhcImg001,
    title: "스마트팩토리\nDashBoard Web"
}

// const webPortfolio2: PortfolioData = {
//     company: "개인프로젝트(개발중)",
//     descripts:
//         [`웹사이트에서 게임을 만들고 모바일 앱에서 즐기는 어플리케이션`, `소설 어드벤쳐 게임인 서울2033을 오마주.`,
//             ``],
//     devDate: "2020/03/03 ~ ",
//     skill: "#React #Redux #Konvajs #FireStore(NoSql) #Firebase Function(NoServer) ",
//     thumbNailImgSrc: WebImg101,
//     title: "소설게임 생성툴 Web"
// }
const webPortfolio4: PortfolioData = {
    company: "개인프로젝트",
    descripts:
        [`만화, 애니, 게임 등을 주제로 시험문제를 만들고 풀어보는 사이트.`, `일 평균 활성 사용자 수 500여명`,
            `PlayStore 10만 다운로드`],
    devDate: "2015/02/19 ~ ",
    skill: "#React #Redux #Nodejs express #MS-SQL #Firebase",
    thumbNailImgSrc: WebImg201,
    title: "매니아 테스트 커뮤니티 반응형 Web"
}
function WebCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    const [imgRouteList, setImgRouteList] = React.useState<string[]>([]);
    const [imgMode, setImgMode] = React.useState<"web" | "mobile">("web");
    const [title, setTitle] = React.useState<string>("");
    const [descripts, setDescripts] = React.useState<string[]>([]);
    return (
        <div>
            {/* <img className={style.background} src={back1} /> */}
            <div className={style.Career}>
                <div className={`${style.background} `}>
                    <div className={`${style.layout} ${style.web}`}>
                        <div className={style.title} style={{ backgroundColor: "#84bb74" }}>Web</div>
                        <div className={style.content}>
                            {/* <div className={`${style.card} ${style.graph}`}>
                            <CareerGraph data={webSkillData} barColor={"#84bb74"} />
                        </div> */}
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={webPortfolio1} type="web"
                                    onClick={
                                        () => {
                                            setImgPortfolioOpen(true)
                                            setImgRouteList([PhcMonitorImg001, PhcMonitorImg002])
                                            setImgMode("web")
                                            setDescripts(webPortfolio1.descripts)
                                            setTitle(webPortfolio1.title)

                                        }
                                    } />
                            </div>
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={webPortfolio2} type="web" onClick={
                                    () => {
                                        setImgPortfolioOpen(true)
                                        setImgRouteList([PhcMoldMngImg001, PhcMoldMngImg002, PhcMoldMngImg003, PhcMoldMngImg004, PhcMoldMngImg005])
                                        setImgMode("web")
                                        setDescripts(webPortfolio2.descripts)
                                        setTitle(webPortfolio2.title)

                                    }
                                } />
                            </div>

                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={webPortfolio3} type="web" onClick={
                                    () => {
                                        setImgPortfolioOpen(true)
                                        setImgRouteList([PhcImg001, PhcImg002, PhcImg003, PhcImg004, PhcImg005])
                                        setImgMode("web")
                                        setDescripts(webPortfolio3.descripts)
                                        setTitle(webPortfolio3.title)

                                    }
                                } />
                            </div>
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={webPortfolio4} type="web" onClick={
                                    () => {
                                        window.open("https://www.otakutest.kr", "_blank");
                                    }
                                } />
                            </div>
                            {/*
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard_New2 className={style.item} data={webPortfolio2} type="web" onClick={
                                () => {
                                    window.location.assign("http://www.kumestudio.com:8080");

                                }
                            } />
                        </div> */}
                        </div>
                    </div>
                </div>

            </div>
            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={imgRouteList}
                mode={imgMode}
                description={descripts}
                title={title} />
        </div>
    )
}
export default WebCareerPage