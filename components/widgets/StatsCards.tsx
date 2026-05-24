import { MapPin, Users, AlertTriangle, Layers } from "lucide-react"
import { statsData } from "@/app/mockData"

const cards = [
  {
    label: "Parcelles suivies",
    value: statsData.parcelles.toLocaleString(),
    icon: MapPin,
    color: "bg-[#EAF3DE] text-[#3B6D11]",
  },
  {
    label: "Agents actifs",
    value: statsData.agentsActifs,
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Incidents signalés",
    value: statsData.incidentsSignales,
    icon: AlertTriangle,
    color: "bg-red-50 text-red-500",
  },
  {
    label: "Hectares suivis",
    value: statsData.hectaresSuivis.toLocaleString(),
    icon: Layers,
    color: "bg-amber-50 text-amber-600",
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {cards.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
          <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-3`}>
            <Icon size={20} />
          </div>
          <div className="text-2xl font-semibold text-gray-800">{value}</div>
          <div className="text-xs text-gray-400 mt-1">{label}</div>
        </div>
      ))}
    </div>
  )
}