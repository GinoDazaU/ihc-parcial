import { Link } from "react-router-dom";
import { Gavel, FileText, CalendarDays, Plus, AlertCircle, Clock, ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";
import { StatusBadge } from "../components/StatusBadge";
import { CATEGORIAS_ACTIVIDAD } from "../data/constants";
import { formatShort, isPast, daysBetween, todayISO } from "../utils/date";

export function Dashboard() {
  const { casos, actuaciones, actividades, pendingCount } = useData();

  const casosEnTramite = casos.filter((c) => c.estado === "En trámite");
  const actuacionesPendientes = actuaciones.filter((a) => a.estado === "Pendiente");

  const casosQueRequierenAtencion = casosEnTramite
    .map((c) => {
      const ultimo = c.seguimiento[c.seguimiento.length - 1];
      return { ...c, proxima: ultimo?.proximaFecha || "" };
    })
    // Requieren atención los casos vencidos o con próxima fecha dentro de 3 días.
    .filter((c) => c.proxima && (isPast(c.proxima) || daysBetween(c.proxima) <= 3))
    .sort((a, b) => (a.proxima > b.proxima ? 1 : -1))
    .slice(0, 4);

  const proximasActividades = actividades
    .filter((a) => a.estado === "Programada" && a.fecha >= todayISO())
    .sort((a, b) => (a.fecha > b.fecha ? 1 : -1))
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold text-blue-700">Hoy, {formatShort(todayISO())}</p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
          Buen día, jueza Ccorimanya
        </h1>
        <p className="mt-1 text-sm text-slate-500">Este es el resumen de su trabajo pendiente.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Casos en trámite" value={casosEnTramite.length} icon={Gavel} tone="blue" />
        <StatTile label="Actuaciones pendientes" value={actuacionesPendientes.length} icon={FileText} tone="violet" />
        <StatTile
          label="Actividades próximas"
          value={proximasActividades.length}
          icon={CalendarDays}
          tone="emerald"
        />
        <StatTile label="Por sincronizar" value={pendingCount} icon={Clock} tone={pendingCount ? "amber" : "slate"} />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <QuickAction to="/casos/nuevo" label="Nuevo caso" icon={Gavel} />
        <QuickAction to="/notarial/nuevo" label="Nueva actuación" icon={FileText} />
        <QuickAction to="/agenda/nueva" label="Nueva actividad" icon={CalendarDays} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Panel
          title="Casos que requieren atención"
          emptyText="No hay casos con fecha próxima pendiente."
          linkTo="/casos"
        >
          {casosQueRequierenAtencion.map((c) => (
            <Link
              key={c.id}
              to={`/casos/${c.id}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50/40"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">{c.codigo} · {c.tipoConflicto}</p>
                <p className="truncate text-xs text-slate-500">{c.descripcion}</p>
              </div>
              <span
                className={`flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  isPast(c.proxima)
                    ? "bg-red-50 text-red-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                <AlertCircle size={13} />
                {isPast(c.proxima) ? "Vencido" : formatShort(c.proxima)}
              </span>
            </Link>
          ))}
        </Panel>

        <Panel title="Próximas actividades" emptyText="No hay actividades programadas próximamente." linkTo="/agenda">
          {proximasActividades.map((a) => {
            const cat = CATEGORIAS_ACTIVIDAD[a.categoria] || CATEGORIAS_ACTIVIDAD.Otro;
            return (
              <Link
                key={a.id}
                to={`/agenda/dia/${a.fecha}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${cat.color}`} aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900">{a.titulo}</p>
                  <p className="truncate text-xs text-slate-500">
                    {formatShort(a.fecha)}
                    {a.horaInicio ? ` · ${a.horaInicio}` : ""} · {a.lugar}
                  </p>
                </div>
              </Link>
            );
          })}
        </Panel>
      </div>
    </div>
  );
}

function StatTile({ label, value, icon: Icon, tone }) {
  const tones = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    slate: "bg-slate-100 text-slate-500",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${tones[tone]}`}>
        <Icon size={18} />
      </div>
      <p className="text-2xl font-extrabold text-slate-900">{value}</p>
      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

function QuickAction({ to, label, icon: Icon }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 px-4 py-4 text-sm font-bold text-blue-700 hover:border-blue-500 hover:bg-blue-50"
    >
      <Plus size={18} />
      {label}
    </Link>
  );
}

function Panel({ title, emptyText, linkTo, children }) {
  const hasChildren = Array.isArray(children) ? children.filter(Boolean).length > 0 : Boolean(children);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
        <Link to={linkTo} className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800">
          Ver todo <ArrowRight size={13} />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {hasChildren ? children : <p className="py-6 text-center text-sm text-slate-400">{emptyText}</p>}
      </div>
    </div>
  );
}
