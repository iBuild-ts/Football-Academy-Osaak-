"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    {
        name: "Ocak",
        total: 45,
    },
    {
        name: "Şubat",
        total: 52,
    },
    {
        name: "Mart",
        total: 48,
    },
    {
        name: "Nisan",
        total: 61,
    },
    {
        name: "Mayıs",
        total: 55,
    },
    {
        name: "Haziran",
        total: 67,
    },
    {
        name: "Temmuz",
        total: 71,
    },
]

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar
                    dataKey="total"
                    radius={[4, 4, 0, 0]}
                    className="fill-muted-foreground/30"
                />
            </BarChart>
        </ResponsiveContainer>
    )
} 