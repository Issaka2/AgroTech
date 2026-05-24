"use client"

import { Bell, RefreshCw, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const now = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 flex items-center justify-between transition-colors">

      {/* Gauche */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Vue générale</h2>
        <p className="text-xs text-gray-400 capitalize">{now}</p>
      </div>

      {/* Droite */}
      <div className="flex items-center gap-3">

        {/* Live */}
        <div className="flex items-center gap-2 bg-[#EAF3DE] px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-[#3B6D11] rounded-full animate-pulse" />
          <span className="text-xs text-[#3B6D11] font-medium">Live</span>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {dark
            ? <Sun size={16} className="text-yellow-400" />
            : <Moon size={16} className="text-gray-500" />
          }
        </button>

        {/* Refresh */}
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <RefreshCw size={16} className="text-gray-500" />
        </button>

        {/* Alertes */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell size={16} className="text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-[#3B6D11] flex items-center justify-center">
          <span className="text-[#EAF3DE] text-xs font-semibold">ONG</span>
        </div>

      </div>
    </header>
  )
}