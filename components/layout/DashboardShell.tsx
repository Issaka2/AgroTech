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
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}