"use client"

import { Bell, RefreshCw, Sun, Moon, Search } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}, [dark])

  const now = new Date().toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  })

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 flex items-center justify-between sticky top-0 z-10">

      {/* Gauche */}
      <div>
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100">Vue générale</h2>
        <p className="text-xs text-gray-400 capitalize">{now}</p>
      </div>

      {/* Droite */}
      <div className="flex items-center gap-2">

        {/* Live badge */}
        <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Live</span>
        </div>

        {/* Dark mode */}
        <button
          onClick={() => setDark(!dark)}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {dark
            ? <Sun size={15} className="text-amber-400" />
            : <Moon size={15} className="text-gray-500" />
          }
        </button>

        {/* Refresh */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <RefreshCw size={15} className="text-gray-500" />
        </button>

        {/* Alertes */}
        <button className="relative w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell size={15} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-xl bg-[#3B6D11] flex items-center justify-center ml-1">
          <span className="text-[#EAF3DE] text-xs font-bold">ONG</span>
        </div>

      </div>
    </header>
  )
}