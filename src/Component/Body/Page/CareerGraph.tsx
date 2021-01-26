import React from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export interface CareerGraphData {
    name: string;
    level: number;
}
interface CareerGraphProps {
    data: CareerGraphData[]
}
export default function CareerGraph(props: CareerGraphProps) {
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