import React from "react";
import style from "./ContactPage.module.scss"

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function ContactPage() {
    return <div className={style.layout}>
        {/* <div className={style.container}> */}
        <div className={style.contact}>
            Contact!
            </div>
        <div className={style.email}>
            qoogoon@gmail.com
            </div>
        {/* </div> */}

    </div>
}