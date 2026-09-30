import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, FileText, ChevronRight, Users } from "lucide-react";
import { useData } from "../../context/DataContext";
import { PageHeader } from "../../components/PageHeader";
import { SearchFilterBar } from "../../components/SearchFilterBar";
import { StatusBadge, SyncBadge } from "../../components/StatusBadge";
import { EmptyState } from "../../components/EmptyState";
import { ESTADOS_ACTUACION } from "../../data/constants";
import { formatShort } from "../../utils/date";

export function ActuacionesList() {
  const { actuaciones } = useData();
  const [query, setQuery] = useState("");
  const [estado, setEstado] = useState("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return actuaciones.filter((a) => {
      const matchEstado = estado === "Todos" || a.estado === estado;
      if (!matchEstado) return false;
      if (!q) return true;
      const personas = a.personas.map((p) => p.nombre).join(" ").toLowerCase();
      return (
        a.codigo.toLowerCase().includes(q) ||
        a.descripcion.toLowerCase().includes(q) ||
        a.tipo.toLowerCase().includes(q) ||
        personas.includes(q)
      );
    });
  }, [actuaciones, query, estado]);

  return (
    <div>
      <PageHeader
        title="Actuaciones notariales"
        description="Deje constancia de una actuación y localícela fácilmente después."
        action={
          <Link
            to="/notarial/nuevo"
            className="flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800"
          >
            <Plus size={18} />
            Nueva actuación
          </Link>
        }
      />

      <SearchFilterBar
        query={query}
        onQuery={setQuery}
        placeholder="Buscar por código, asunto o nombre de una persona..."
        filters={["Todos", ...ESTADOS_ACTUACION]}
        active={estado}
        onFilter={setEstado}
      />

      {filtered.length === 0 ? (
        <EmptyState
          icon={FileText}
          title={actuaciones.length === 0 ? "Aún no hay actuaciones registradas" : "No se encontraron actuaciones"}
          description={
            actuaciones.length === 0
              ? "Toque 'Nueva actuación' para registrar la primera."
              : "Pruebe con otro término de búsqueda o cambie el filtro de estado."
          }
          action={
            actuaciones.length === 0 ? (
              <Link to="/notarial/nuevo" className="mt-2 flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-800">
                <Plus size={16} /> Nueva actuación
              </Link>
            ) : null
          }
        />
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((a) => (
            <Link
              key={a.id}
              to={`/notarial/${a.id}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold text-slate-900">{a.codigo}</p>
                  <StatusBadge estado={a.estado} />
                  <SyncBadge syncStatus={a.syncStatus} />
                </div>
                <p className="mt-1 truncate text-sm text-slate-600">{a.tipo} · {a.descripcion}</p>
                <div className="mt-1.5 flex items-center gap-3 text-xs text-slate-400">
                  <span>Solicitada el {formatShort(a.fechaSolicitud)}</span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {a.personas.length} persona{a.personas.length === 1 ? "" : "s"}
                  </span>
                </div>
              </div>
              <ChevronRight size={20} className="shrink-0 text-slate-300" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
