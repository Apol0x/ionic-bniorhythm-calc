import React from 'react'
import { ResponsiveContainer, LineChart, XAxis, Line, YAxis, ReferenceLine, CartesianGrid } from 'recharts';
import { calculateBiorhythmSeries } from '../Utils/calculations';
import dayjs from 'dayjs';
import './BiorhythmChart.css'
const dateFormat = isoString => {
    return dayjs(isoString).format('D MMM');
}

export const BiorhythmCharts = ({ birthDate, targetDate }) => {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
        .map((item) => ({
            ...item, date: dateFormat(item.date)
        }))
    return (
        <ResponsiveContainer className='biorhythm-chart' width='100%' height={200}>
            <LineChart data={data}>
                <XAxis dataKey='date'
                    ticks={[data[1].date, data[15].date, data[29].date]}
                />
                <CartesianGrid vertical={false} strokeDasharray='3 3' />
                <ReferenceLine x={data[15].date} />
                <YAxis />
                <Line dataKey='physical' className='physical'></Line>
                <Line dataKey='emotional' className='emotional'></Line>
                <Line dataKey='intellectual' className='intellectual'></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}
