"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 30) },
  { name: "Feb", total: Math.floor(Math.random() * 30) },
  { name: "Mar", total: Math.floor(Math.random() * 30) },
  { name: "Apr", total: Math.floor(Math.random() * 30) },
  { name: "May", total: Math.floor(Math.random() * 30) },
  { name: "Jun", total: Math.floor(Math.random() * 30) },
  { name: "Jul", total: Math.floor(Math.random() * 30) },
  { name: "Aug", total: Math.floor(Math.random() * 30) },
  { name: "Sep", total: Math.floor(Math.random() * 30) },
  { name: "Oct", total: Math.floor(Math.random() * 30) },
  { name: "Nov", total: Math.floor(Math.random() * 30) },
  { name: "Dec", total: Math.floor(Math.random() * 30) },
]

export function Overview() {
  return (
    <div style={{ position: "relative", width: "99%", paddingBottom: "350px" }}>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              type="number"
              domain={[0, 30]}
            />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}