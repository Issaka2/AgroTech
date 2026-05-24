"use client"

import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { regionsData } from "@/app/mockData"

const coordonnees: Record<string, [number, number]> = {
  Niamey: [13.5137, 2.1098],
  Dosso:  [13.0491, 3.1971],
  Tahoua: [14.8888, 5.2638],
  Maradi: [13.5000, 7.1000],
  Zinder: [13.8069, 8.9881],
  Agadez: [16.9742, 7.9929],
}

const couleurs = {
  normal: "#3B6D11",
  alerte: "#BA7517",
}

export default function MapView() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Carte Niger — Zones surveillées
        </h3>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B6D11] inline-block" />Normal
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BA7517] inline-block" />Alerte
          </span>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ height: 380 }}>
        <MapContainer
          center={[17.0, 8.0]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {regionsData.map((region) => {
            const coords = coordonnees[region.region]
            if (!coords) return null
            const couleur = couleurs[region.statut as keyof typeof couleurs]

            return (
              <CircleMarker
                key={region.region}
                center={coords}
                radius={region.statut === "alerte" ? 18 : 14}
                pathOptions={{
                  color: "#fff",
                  weight: 2,
                  fillColor: couleur,
                  fillOpacity: 0.85,
                }}
              >
                <Tooltip permanent direction="top" offset={[0, -16]}>
                  <span style={{ fontSize: "11px", fontWeight: 600 }}>
                    {region.region} · {region.parcelles}
                  </span>
                </Tooltip>
                <Popup>
                  <div className="text-sm">
                    <div className="font-semibold">{region.region}</div>
                    <div>{region.parcelles} parcelles</div>
                    <div>{region.incidents} incidents</div>
                    <div style={{ color: couleur, fontWeight: 500 }}>
                      {region.statut === "alerte" ? "⚠ Alerte" : "✓ Normal"}
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}

        </MapContainer>
      </div>
    </div>
  )
}