"use client"

import { priceData } from "@/app/mockData"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const cultures = [
  { key: "mil",    color: "#4ADE80", label: "Mil" },
  { key: "sorgho", color: "#FACC15", label: "Sorgho" },
  { key: "niebe",  color: "#60A5FA", label: "Niébé" },
  { key: "oignon", color: "#F87171", label: "Oignon" },
]

export default function PriceChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Évolution des prix — FCFA/kg
        </h3>
        <span className="text-xs text-gray-400">5 derniers mois</span>
      </div>
      <div className="w-full flex justify-center">
        <LineChart width={460} height={260} data={priceData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="mois" tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px", color: "#f9fafb", fontSize: "12px" }} />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} />
          {cultures.map(({ key, color, label }) => (
            <Line key={key} type="monotone" dataKey={key} name={label}
              stroke={color} strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          ))}
        </LineChart>
      </div>
    </div>
  )
}