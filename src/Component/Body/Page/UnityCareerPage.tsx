import React from "react"
import style from "./CareerPage.module.scss"
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard_New2, { PortfolioData } from "./PortfolioCard"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion
import back1 from "../../../Resource/back1.jpg"

import img001 from "../../../Resource/unity/001.png"
import img002 from "../../../Resource/unity/002.png"
import img003 from "../../../Resource/unity/003.png"
import img004 from "../../../Resource/unity/004.png"


const portfolio1: PortfolioData = {
    title: "수집형게임",
    devDate: "2022/03 ~ 2022/04",
    company: "개인프로젝트",
    descripts:
        [`마법사(플레이어)가 의인화된 마법을 부려, 전투를 하는 수집형 디펜스 게임 입니다.`,
            ``],
    skill: "#Unity3D #ASP.NET #MySQL",
    thumbNailImgSrc: img001,
}
const portfolio2: PortfolioData = {
    title: "턴제 베틀 게임",
    devDate: "2022/01 ~ 2022/01",
    company: "개인프로젝트",
    descripts:
        [`친구와 한정된 공간에서 다양한 무기로 결투를 하는 게임입니다.`
            , `개발단계에서 중단된 게임이지만, 플레이어간에 게임이 가능합니다.`,
        ],
    skill: "#Unity3D #Mirror",
    thumbNailImgSrc: img002,
}
const portfolio3: PortfolioData = {
    title: "병아리 키우기 게임",
    devDate: "2020/02 ~ 2020/03",
    company: "개인프로젝트",
    descripts:
        [`다마고치, 개복치 키우기와 같이 병아리를 키우는 게임입니다.`
        ],
    skill: "#Unity3D",
    thumbNailImgSrc: img003,
}

const portfolio4: PortfolioData = {
    title: "방치형 게임",
    devDate: "2018/04 ~ 2018/05",
    company: "개인프로젝트",
    descripts:
        [`광물을 캐서 좋은 장비로 업그레이드를 해나가는 방치형 게임입니다.`
        ],
    skill: "#Unity3D",
    thumbNailImgSrc: img004,
}

// const portfolio4: PortfolioData = {
//     company: "개인프로젝트",
//     descripts:
//         [`만화, 애니, 게임 등을 주제로 시험문제를 만들고 풀어보는 사이트.`, `일 평균 활성 사용자 수 500여명`,
//             `PlayStore 10만 다운로드`],
//     devDate: "2015/02/19 ~ ",
//     skill: "#React #Redux #Nodejs express #MS-SQL #Firebase",
//     thumbNailImgSrc: WebImg201,
//     title: "매니아 테스트 커뮤니티 반응형 Web"
// }
function UnityCareerPage() {
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
                        <div className={style.title} style={{ backgroundColor: "#bb7474" }}>Unity</div>
                        <div className={style.content}>
                            {/* <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio1} type="web"
                                    onClick={
                                        () => {
                                            setImgPortfolioOpen(true)
                                            setImgRouteList([PhcMonitorImg001, PhcMonitorImg002])
                                            setImgMode("web")
                                            setDescripts(portfolio1.descripts)
                                            setTitle(portfolio1.title)

                                        }
                                    } />
                            </div>
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio2} type="web" onClick={
                                    () => {
                                        setImgPortfolioOpen(true)
                                        setImgRouteList([PhcMoldMngImg001, PhcMoldMngImg002, PhcMoldMngImg003, PhcMoldMngImg004, PhcMoldMngImg005])
                                        setImgMode("web")
                                        setDescripts(portfolio2.descripts)
                                        setTitle(portfolio2.title)

                                    }
                                } />
                            </div>

                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio3} type="web" onClick={
                                    () => {
                                        setImgPortfolioOpen(true)
                                        setImgRouteList([PhcImg001, PhcImg002, PhcImg003, PhcImg004, PhcImg005])
                                        setImgMode("web")
                                        setDescripts(portfolio3.descripts)
                                        setTitle(portfolio3.title)

                                    }
                                } />
                            </div> */}
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio1} type="web" onClick={
                                    () => {
                                        window.open("https://youtu.be/YRxzNVzi7DI", "_blank");
                                    }
                                } />
                            </div>
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio2} type="web" onClick={
                                    () => {
                                        window.open("https://youtu.be/tayuEOBjlzM", "_blank");
                                    }
                                } />
                            </div>
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio3} type="web" onClick={
                                    () => {
                                        window.open("https://youtu.be/qdoykr0osOw", "_blank");
                                    }
                                } />
                            </div>
                            <div className={`${style.card} ${style.portfoilo}`}>
                                <PortfolioCard_New2 className={style.item} data={portfolio4} type="web" onClick={
                                    () => {
                                        window.open("https://youtu.be/LLcHaT9W8T4", "_blank");
                                    }
                                } />
                            </div>
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
export default UnityCareerPage