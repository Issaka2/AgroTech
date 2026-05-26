"use client"

import Sidebar from "./Sidebar"
import Header from "./Header"

interface Props {
  children: React.ReactNode
  active: string
  setActive: (id: string) => void
}

export default function DashboardShell({ children, active, setActive }: Props) {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar — cachée sur mobile */}
      <div className="hidden md:flex h-screen sticky top-0">
        <Sidebar active={active} setActive={setActive} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        {/* Nav mobile en bas */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#3B6D11] z-50 flex justify-around px-2 py-2 border-t border-[#4a8a15]">
          {[
            { id: "overview", label: "Accueil", emoji: "🏠" },
            { id: "map",      label: "Carte",   emoji: "🗺️" },
            { id: "prices",   label: "Prix",    emoji: "📈" },
            { id: "alerts",   label: "Alertes", emoji: "🔔" },
            { id: "feed",     label: "Feed",    emoji: "💬" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs transition-all
                ${active === item.id
                  ? "bg-[#EAF3DE] text-[#3B6D11]"
                  : "text-[#C0DD97]"
                }`}
            >
              <span className="text-lg">{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <main className="flex-1 p-3 md:p-6 overflow-y-auto pb-20 md:pb-6">
          {children}
        </main>
      </div>

    </div>
  )
}