"use client"

import { useState } from "react"
import DashboardShell from "@/components/layout/DashboardShell"
import StatsCards from "@/components/widgets/StatsCards"
import AgentFeed from "@/components/widgets/AgentFeed"
import AlertsPanel from "@/components/widgets/AlertsPanel"
import RegionsTable from "@/components/widgets/RegionsTable"
import dynamic from "next/dynamic"

const PriceChart = dynamic(
  () => import("@/components/widgets/PriceChart"),
  { ssr: false, loading: () => <div className="h-64 bg-white rounded-xl" /> }
)

const MapView = dynamic(
  () => import("@/components/widgets/MapView"),
  { ssr: false, loading: () => <div className="h-96 bg-white rounded-xl col-span-2" /> }
)

export default function DashboardPage() {
  const [active, setActive] = useState("overview")

  const renderContent = () => {
    switch (active) {
      case "overview":
        return (
          <>
            <StatsCards />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <AgentFeed />
              <AlertsPanel />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <PriceChart />
              <RegionsTable />
            </div>
            <div className="mb-4">
              <MapView />
            </div>
          </>
        )
      case "map":
        return <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><MapView /></div>

      case "prices":
        return <PriceChart />

      case "alerts":
        return <AlertsPanel />

      case "feed":
        return <AgentFeed />

      case "settings":
        return (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 p-8 text-center text-gray-400">
            Paramètres à venir
          </div>
        )

      default:
        return null
    }
  }

  return (
    <DashboardShell active={active} setActive={setActive}>
      {renderContent()}
    </DashboardShell>
  )
}