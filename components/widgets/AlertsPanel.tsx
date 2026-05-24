import { alertesData } from "@/app/mockData"
import { AlertTriangle, Info } from "lucide-react"

const niveauConfig = {
  urgent: {
    bg: "bg-red-50 border-red-200",
    icon: AlertTriangle,
    iconColor: "text-red-500",
    badge: "bg-red-100 text-red-600",
  },
  info: {
    bg: "bg-blue-50 border-blue-200",
    icon: Info,
    iconColor: "text-blue-500",
    badge: "bg-blue-100 text-blue-600",
  },
}

export default function AlertsPanel() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Alertes actives
        </h3>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
          {alertesData.filter(a => a.niveau === "urgent").length} urgentes
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {alertesData.map((alerte) => {
          const config = niveauConfig[alerte.niveau as keyof typeof niveauConfig]
          const Icon = config.icon

          return (
            <div
              key={alerte.id}
              className={`flex items-start gap-3 p-3 rounded-lg border ${config.bg}`}
            >
              <Icon size={16} className={`mt-0.5 ${config.iconColor}`} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-800">
                    {alerte.type}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${config.badge}`}>
                    {alerte.region}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{alerte.message}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}