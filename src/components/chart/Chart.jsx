import React from 'react';
import "./chart.scss";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) => {

    const [title, data, datakey, grid] = [props.title, props.data, props.datakey, props.grid];
    
    return (
        <div className="chart">
            <div className="chart-title">{title}</div>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>{grid && <CartesianGrid stroke="#fff1d7" />}
                    <XAxis dataKey="name" stroke="#886422" />
                    <Line type="monotone" dataKey={datakey} stroke="#886422" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
