import { regionsData } from "@/app/mockData"

const statutConfig = {
  normal: { label: "Normal", style: "bg-[#EAF3DE] text-[#3B6D11]" },
  alerte: { label: "Alerte", style: "bg-amber-100 text-amber-700" },
}

export default function RegionsTable() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Suivi par région
        </h3>
        <span className="text-xs text-gray-400">{regionsData.length} régions</span>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-xs text-gray-400 border-b border-gray-100 dark:border-gray-700">
            <th className="text-left pb-3 font-medium">Région</th>
            <th className="text-right pb-3 font-medium">Parcelles</th>
            <th className="text-right pb-3 font-medium">Incidents</th>
            <th className="text-right pb-3 font-medium">Statut</th>
          </tr>
        </thead>
        <tbody>
          {regionsData.map((region) => {
            const config = statutConfig[region.statut as keyof typeof statutConfig]
            return (
              <tr
                key={region.region}
                className="border-b border-gray-50 dark:border-gray-800 last:border-0"
              >
                <td className="py-3 text-sm text-gray-800 dark:text-gray-100 font-medium">
                  {region.region}
                </td>
                <td className="py-3 text-sm text-gray-500 text-right">
                  {region.parcelles}
                </td>
                <td className="py-3 text-sm text-right">
                  <span className={region.incidents > 0 ? "text-red-500 font-medium" : "text-gray-400"}>
                    {region.incidents}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${config.style}`}>
                    {config.label}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}