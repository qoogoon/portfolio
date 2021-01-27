import React from "react";
// import {
//     BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    HorizontalBarSeries,
    HorizontalBarSeriesCanvas
} from 'react-vis';

export interface CareerGraphData {
    name: string;
    level: number;
}
interface CareerGraphProps {
    data: CareerGraphData[]
    barColor?: string;
}

interface State {
    test: string;
}

export default class CareerGraph extends React.Component<CareerGraphProps>{
    constructor(props: CareerGraphProps) {
        super(props)

    }
    state = {
        useCanvas: false
    }
    render() {
        console.log(this.props.data)
        const { useCanvas } = this.state;
        const BarSeries = useCanvas
            ? HorizontalBarSeriesCanvas
            : HorizontalBarSeries;
        const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';



        return (
            <div>
                <XYPlot width={300} height={250} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />

                    <BarSeries data={[{ y: 1, x: 10 }, { y: 2, x: 5 }, { y: 3, x: 15 }]} barWidth={0.9} />

                    {/* <BarSeries data={[{ y: 5, x: 10 }, { y: 15, x: 5 }, { y: 25, x: 15 }]} barWidth={0.9} /> */}
                </XYPlot>
            </div>
        );
    }
}


// export default function CareerGraph(props: CareerGraphProps) {
//     const { data, barColor } = props
//     const { useCanvas } = this.state;
//     const BarSeries = useCanvas
//         ? HorizontalBarSeriesCanvas
//         : HorizontalBarSeries;
//     const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
//     return <XYPlot width={300} height={300} stackBy="x">
//         <VerticalGridLines />
//         <HorizontalGridLines />
//         <XAxis />
//         <YAxis />
//         <BarSeries data={[{ y: 2, x: 10 }, { y: 4, x: 5 }, { y: 5, x: 15 }]} />
//         <BarSeries data={[{ y: 2, x: 12 }, { y: 4, x: 2 }, { y: 5, x: 11 }]} />
//     </XYPlot>


//     // return <ResponsiveContainer width="95%" height="90%">
//     //     <BarChart
//     //         data={data}
//     //         margin={{
//     //             top: 0, right: 0, left: 0, bottom: 0,
//     //         }}
//     //     >
//     //         <CartesianGrid strokeDasharray="3 3" />
//     //         <XAxis dataKey="name" />
//     //         <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
//     //         <Tooltip />
//     //         <Legend />
//     //         <Bar dataKey="level" fill={barColor} max={5} />
//     //     </BarChart>
//     // </ResponsiveContainer>
// }