// data/mockData.ts

export const statsData = {
  parcelles: 1284,
  agentsActifs: 47,
  incidentsSignales: 23,
  hectaresSuivis: 3420,
}

export const priceData = [
  { mois: "Jan", mil: 240, sorgho: 210, niebe: 480, oignon: 150 },
  { mois: "Fév", mil: 255, sorgho: 220, niebe: 500, oignon: 160 },
  { mois: "Mar", mil: 260, sorgho: 225, niebe: 490, oignon: 165 },
  { mois: "Avr", mil: 285, sorgho: 240, niebe: 520, oignon: 180 },
  { mois: "Mai", mil: 270, sorgho: 235, niebe: 510, oignon: 175 },
]

export const regionsData = [
  { region: "Niamey",  parcelles: 312, incidents: 4,  statut: "normal" },
  { region: "Dosso",   parcelles: 287, incidents: 8,  statut: "alerte" },
  { region: "Tahoua",  parcelles: 245, incidents: 6,  statut: "alerte" },
  { region: "Maradi",  parcelles: 198, incidents: 2,  statut: "normal" },
  { region: "Zinder",  parcelles: 156, incidents: 3,  statut: "normal" },
  { region: "Agadez",  parcelles: 86,  incidents: 0,  statut: "normal" },
]

export const agentFeedData = [
  {
    id: 1,
    agent: "Moussa K.",
    region: "Dosso",
    culture: "Mil",
    surface: 2,
    incident: "Ravageur",
    detail: "Chenilles sur feuilles",
    heure: "Il y a 5 min",
    statut: "urgent",
  },
  {
    id: 2,
    agent: "Aïcha B.",
    region: "Tahoua",
    culture: "Sorgho",
    surface: 3.5,
    incident: "Sécheresse",
    detail: "Sol très sec, irrigation urgente",
    heure: "Il y a 18 min",
    statut: "urgent",
  },
  {
    id: 3,
    agent: "Ibrahim S.",
    region: "Maradi",
    culture: "Niébé",
    surface: 1.5,
    incident: null,
    detail: "Croissance normale",
    heure: "Il y a 34 min",
    statut: "normal",
  },
  {
    id: 4,
    agent: "Fatouma D.",
    region: "Niamey",
    culture: "Oignon",
    surface: 0.8,
    incident: "Maladie",
    detail: "Taches jaunes sur feuilles",
    heure: "Il y a 1h",
    statut: "alerte",
  },
  {
    id: 5,
    agent: "Sani M.",
    region: "Zinder",
    culture: "Maïs",
    surface: 4,
    incident: null,
    detail: "Stade récolte, rendement bon",
    heure: "Il y a 2h",
    statut: "normal",
  },
]

export const alertesData = [
  {
    id: 1,
    type: "Sécheresse",
    region: "Dosso / Tahoua",
    message: "Pluies insuffisantes prévues 7 jours. Irrigation recommandée.",
    niveau: "urgent",
  },
  {
    id: 2,
    type: "Ravageur",
    region: "Dosso",
    message: "Propagation de chenilles détectée sur cultures de mil.",
    niveau: "urgent",
  },
  {
    id: 3,
    type: "Prix marché",
    region: "Toutes régions",
    message: "Prix oignon +8% cette semaine. Opportunité de vente.",
    niveau: "info",
  },
]