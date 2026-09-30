import { useParams, Link } from "react-router-dom";
import { Plus, MapPin, Clock, Pencil, CalendarDays } from "lucide-react";
import { useData } from "../../context/DataContext";
import { PageHeader } from "../../components/PageHeader";
import { StatusBadge, SyncBadge } from "../../components/StatusBadge";
import { EmptyState } from "../../components/EmptyState";
import { CATEGORIAS_ACTIVIDAD } from "../../data/constants";
import { formatLong } from "../../utils/date";

export function AgendaDia() {
  const { fecha } = useParams();
  const { actividades } = useData();

  const delDia = actividades
    .filter((a) => a.fecha === fecha)
    .sort((a, b) => (a.horaInicio || "").localeCompare(b.horaInicio || ""));

  return (
    <div>
      <PageHeader
        title={formatLong(fecha)}
        back="/agenda"
        description="Actividades programadas para este día."
        action={
          <Link
            to={`/agenda/nueva?fecha=${fecha}`}
            className="flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800"
          >
            <Plus size={18} /> Nueva actividad
          </Link>
        }
      />

      {delDia.length === 0 ? (
        <EmptyState
          icon={CalendarDays}
          title="No hay actividades este día"
          description="Toque 'Nueva actividad' para programar una."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {delDia.map((a) => {
            const cat = CATEGORIAS_ACTIVIDAD[a.categoria] || CATEGORIAS_ACTIVIDAD.Otro;
            return (
              <div key={a.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${cat.color}`} />
                    <div>
                      <p className="font-bold text-slate-900">{a.titulo}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                        {(a.horaInicio || a.horaTermino) && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} /> {a.horaInicio || "—"}{a.horaTermino ? ` a ${a.horaTermino}` : ""}
                          </span>
                        )}
                        <span className="flex items-center gap-1"><MapPin size={13} /> {a.lugar}</span>
                        <span className={`rounded-full border px-2 py-0.5 font-semibold ${cat.light}`}>{a.categoria}</span>
                      </div>
                      {a.descripcion && <p className="mt-2 text-sm text-slate-600">{a.descripcion}</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge estado={a.estado} />
                    <SyncBadge syncStatus={a.syncStatus} />
                    <Link
                      to={`/agenda/${a.id}/editar`}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Pencil size={13} /> Editar
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
