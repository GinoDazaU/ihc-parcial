import { NavLink, Outlet } from "react-router-dom";
import { Home, Gavel, FileText, CalendarDays, Info, Wifi, WifiOff, RefreshCw, Scale, CheckCheck } from "lucide-react";
import { useNetwork } from "../context/NetworkContext";
import { useData } from "../context/DataContext";
import { formatSyncTime } from "../utils/date";

const NAV_ITEMS = [
  { to: "/", label: "Inicio", icon: Home, end: true },
  { to: "/casos", label: "Casos judiciales", icon: Gavel },
  { to: "/notarial", label: "Actuaciones notariales", icon: FileText },
  { to: "/agenda", label: "Agenda", icon: CalendarDays },
  { to: "/justificacion", label: "Justificación de diseño", icon: Info },
];

export function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto px-6 py-6 pb-24 md:px-10 md:py-8 sm:pb-8">
          <div className="mx-auto w-full max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}

function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-slate-200 bg-white sm:hidden">
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold ${
              isActive ? "text-blue-700" : "text-slate-500"
            }`
          }
        >
          <Icon size={20} />
          <span className="text-center leading-tight">{label.split(" ")[0]}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white sm:flex">
      <div className="flex items-center gap-2.5 border-b border-slate-200 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
          <Scale size={22} />
        </div>
        <div>
          <p className="text-sm font-bold leading-tight text-slate-900">Justicia Cercana</p>
          <p className="text-xs text-slate-500">Juzgado de Paz</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1 p-3">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl border-l-4 px-3.5 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

function TopBar() {
  const { online, toggleOnline } = useNetwork();
  const { pendingCount, lastSyncAt, syncPendientes } = useData();
  const lastSyncLabel = formatSyncTime(lastSyncAt);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex flex-wrap items-center gap-3 px-5 py-3 md:px-8">
        <div
          className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${
            online
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-amber-200 bg-amber-50 text-amber-800"
          }`}
        >
          {online ? <Wifi size={16} /> : <WifiOff size={16} />}
          {online ? "En línea" : "Sin conexión — trabajando en este dispositivo"}
        </div>

        {pendingCount > 0 && (
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800">
            {pendingCount} pendiente{pendingCount === 1 ? "" : "s"} de sincronizar
          </span>
        )}

        <button
          onClick={syncPendientes}
          disabled={!online || pendingCount === 0}
          className="flex items-center gap-2 rounded-full bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          <RefreshCw size={16} />
          Sincronizar ahora
        </button>

        <span className="hidden items-center gap-1.5 text-xs font-medium text-slate-500 md:flex" title="La sincronización ocurre sola apenas hay conexión; este botón es un respaldo manual.">
          <CheckCheck size={14} className="text-slate-400" />
          {lastSyncLabel ? `Última sincronización: ${lastSyncLabel}` : "Aún no se ha sincronizado"}
        </span>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold leading-tight text-slate-900">María Elena Ccorimanya</p>
            <p className="text-xs text-slate-500">Jueza de paz</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
            ME
          </div>
        </div>
      </div>

      {/* Control de demostración: no es parte del producto real, permite mostrar
          el flujo offline -> online -> sincronizar sin necesidad de un backend. */}
      <div className="flex items-center justify-between border-t border-dashed border-slate-200 bg-slate-50 px-5 py-1.5 text-xs text-slate-500 md:px-8">
        <span>Control de demostración del prototipo</span>
        <button
          onClick={toggleOnline}
          className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-2.5 py-1 font-semibold text-slate-600 hover:bg-slate-100"
        >
          {online ? <WifiOff size={13} /> : <Wifi size={13} />}
          Simular {online ? "pérdida de conexión" : "reconexión"}
        </button>
      </div>
    </header>
  );
}
