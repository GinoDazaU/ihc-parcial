import { Link } from "react-router-dom";
import { Gavel, FileText, CalendarDays, Clock, ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";
import { formatShort, todayISO } from "../utils/date";

export function Dashboard() {
  const { casos, actuaciones, actividades, pendingCount } = useData();

  const casosEnTramite = casos.filter((c) => c.estado === "En trámite").length;
  const actuacionesPendientes = actuaciones.filter((a) => a.estado === "Pendiente").length;
  const actividadesProximas = actividades.filter(
    (a) => a.estado === "Programada" && a.fecha >= todayISO()
  ).length;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold text-blue-700">Hoy, {formatShort(todayISO())}</p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
          Buen día, jueza Ccorimanya
        </h1>
        <p className="mt-1 text-sm text-slate-500">¿Qué desea hacer?</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ModuleCard
          to="/casos"
          icon={Gavel}
          tone="blue"
          title="Ver casos judiciales"
          description="Registrar, consultar y dar seguimiento a conflictos."
          count={casosEnTramite}
          countLabel="en trámite"
        />
        <ModuleCard
          to="/notarial"
          icon={FileText}
          tone="violet"
          title="Ver actuaciones notariales"
          description="Constancias, declaraciones y otros trámites."
          count={actuacionesPendientes}
          countLabel="pendientes"
        />
        <ModuleCard
          to="/agenda"
          icon={CalendarDays}
          tone="emerald"
          title="Ver agenda"
          description="Audiencias, reuniones y visitas programadas."
          count={actividadesProximas}
          countLabel="próximas"
        />
      </div>

      <div
        className={`flex items-center gap-3 rounded-2xl border px-5 py-4 ${
          pendingCount > 0 ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white"
        }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            pendingCount > 0 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-400"
          }`}
        >
          <Clock size={20} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">
            {pendingCount > 0
              ? `${pendingCount} registro${pendingCount === 1 ? "" : "s"} pendiente${pendingCount === 1 ? "" : "s"} de sincronizar`
              : "Todo está sincronizado"}
          </p>
          <p className="text-xs text-slate-500">
            {pendingCount > 0
              ? "Se sincronizarán solos apenas haya conexión, o toque “Sincronizar ahora” arriba."
              : "No hay información pendiente de guardar en el servidor."}
          </p>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ to, icon: Icon, tone, title, description, count, countLabel }) {
  const tones = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    emerald: "bg-emerald-50 text-emerald-700",
  };
  return (
    <Link
      to={to}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
    >
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${tones[tone]}`}>
        <Icon size={24} />
      </div>
      <div>
        <h2 className="text-lg font-extrabold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-sm font-semibold text-slate-600">
          {count} {countLabel}
        </span>
        <span className="flex items-center gap-1 text-sm font-bold text-blue-700 group-hover:gap-2">
          Ver <ArrowRight size={16} className="transition-all" />
        </span>
      </div>
    </Link>
  );
}
