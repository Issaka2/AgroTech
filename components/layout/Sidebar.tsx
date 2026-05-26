"use client"

import { LayoutDashboard, MapPin, TrendingUp, Bell, MessageSquare, Settings, Leaf } from "lucide-react"

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
    <aside className="w-64 h-full flex flex-col
      bg-[#2D5A0E] dark:bg-[#1e2533]
      border-r border-[#3d7a1a] dark:border-[#2a3441]">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-[#3d7a1a] dark:border-[#2a3441]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#EAF3DE] rounded-lg flex items-center justify-center">
            <Leaf size={16} className="text-[#2D5A0E]" />
          </div>
          <div>
            <h1 className="text-[#EAF3DE] text-base font-bold leading-none">AgroTech</h1>
            <p className="text-[#97C459] text-xs mt-0.5">Dashboard ONG</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
              ${active === id
                ? "bg-[#EAF3DE] text-[#2D5A0E] shadow-sm"
                : "text-[#C0DD97] dark:text-gray-400 hover:bg-white/10 dark:hover:bg-[#2a3441] hover:text-white dark:hover:text-gray-200"
              }`}
          >
            <Icon size={17} className="shrink-0" />
            <span>{label}</span>
            {active === id && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2D5A0E]" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer — tout en bas */}
      <div className="mt-auto px-6 py-4 border-t border-[#3d7a1a] dark:border-[#2a3441]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#97C459] flex items-center justify-center text-xs font-bold text-[#2D5A0E]">
            C
          </div>
          <div>
            <p className="text-[#EAF3DE] text-xs font-semibold">CARE Niger</p>
            <p className="text-[#97C459] text-xs">Pilote 2026</p>
          </div>
        </div>
      </div>

    </aside>
  )
}