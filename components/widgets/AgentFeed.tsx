"use client"

import { useState, useEffect } from "react"
import { agentFeedData } from "@/app/mockData"
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

const nouveauxMessages = [
  {
    id: 6,
    agent: "Halima T.",
    region: "Zinder",
    culture: "Mil",
    surface: 1.2,
    incident: "Ravageur",
    detail: "Criquets détectés sur parcelle est",
    heure: "À l'instant",
    statut: "urgent",
  },
  {
    id: 7,
    agent: "Boubacar M.",
    region: "Agadez",
    culture: "Sorgho",
    surface: 2.8,
    incident: null,
    detail: "Semis terminé, sol humide correct",
    heure: "À l'instant",
    statut: "normal",
  },
  {
    id: 8,
    agent: "Mariama K.",
    region: "Maradi",
    culture: "Niébé",
    surface: 0.9,
    incident: "Sécheresse",
    detail: "Feuilles qui jaunissent, besoin irrigation",
    heure: "À l'instant",
    statut: "alerte",
  },
  {
    id: 9,
    agent: "Adamou S.",
    region: "Dosso",
    culture: "Oignon",
    surface: 1.5,
    incident: null,
    detail: "Récolte en cours, bon rendement",
    heure: "À l'instant",
    statut: "normal",
  },
]

const statutConfig = {
  urgent: { color: "bg-red-50 text-red-500 border-red-100", icon: AlertTriangle },
  alerte: { color: "bg-amber-50 text-amber-600 border-amber-100", icon: AlertCircle },
  normal: { color: "bg-[#EAF3DE] text-[#3B6D11] border-green-100", icon: CheckCircle },
}

export default function AgentFeed() {
  const [feed, setFeed] = useState(agentFeedData)
  const [newEntry, setNewEntry] = useState<number | null>(null)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = nouveauxMessages[counter % nouveauxMessages.length]
      const entry = { ...msg, id: Date.now(), heure: "À l'instant" }

      setFeed((prev) => [entry, ...prev.slice(0, 6)])
      setNewEntry(entry.id)
      setCounter((c) => c + 1)

      setTimeout(() => setNewEntry(null), 3000)
    }, 15000)

    return () => clearInterval(interval)
  }, [counter])

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Feed agents terrain
        </h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-gray-400">Temps réel</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {feed.map((entry) => {
          const config = statutConfig[entry.statut as keyof typeof statutConfig]
          const Icon = config.icon
          const isNew = entry.id === newEntry

          return (
            <div
              key={entry.id}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-700
                ${isNew
                  ? "border-[#3B6D11] bg-[#f0faf0] dark:bg-gray-800 scale-[1.01] shadow-md"
                  : "border-gray-100 dark:border-gray-700"
                }`}
            >
              <div className={`mt-0.5 p-1.5 rounded-lg border ${config.color}`}>
                <Icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {entry.agent}
                    </span>
                    {isNew && (
                      <span className="text-xs bg-[#3B6D11] text-white px-2 py-0.5 rounded-full animate-pulse">
                        Nouveau
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{entry.heure}</span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {entry.region} · {entry.culture} · {entry.surface} ha
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  {entry.detail}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}