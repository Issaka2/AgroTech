"use client"

import { LayoutDashboard, MapPin, TrendingUp, Bell, MessageSquare, Settings } from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Vue générale", id: "overview" },
  { icon: MapPin,          label: "Carte Niger",   id: "map" },
  { icon: TrendingUp,      label: "Prix marchés",  id: "prices" },
  { icon: Bell,            label: "Alertes",       id: "alerts" },
  { icon: MessageSquare,   label: "Feed agents",   id: "feed" },
  { icon: Settings,        label: "Paramètres",    id: "settings" },
]

interface Props {
  active: string
  setActive: (id: string) => void
}

export default function Sidebar({ active, setActive }: Props) {
  return (
    <aside className="w-60 min-h-screen bg-[#3B6D11] flex flex-col py-6 px-4">
      <div className="mb-10 px-2">
        <h1 className="text-[#EAF3DE] text-xl font-semibold">AgroTech</h1>
        <p className="text-[#97C459] text-xs mt-1">Dashboard ONG</p>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
              ${active === id
                ? "bg-[#EAF3DE] text-[#3B6D11] font-medium"
                : "text-[#C0DD97] hover:bg-[#4a8a15] hover:text-[#EAF3DE]"
              }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="px-2 pt-4 border-t border-[#4a8a15]">
        <p className="text-[#97C459] text-xs">CARE Niger — Pilote 2026</p>
      </div>
    </aside>
  )
}