import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Gavel, ChevronRight, Users } from "lucide-react";
import { useData } from "../../context/DataContext";
import { PageHeader } from "../../components/PageHeader";
import { SearchFilterBar } from "../../components/SearchFilterBar";
import { StatusBadge, SyncBadge } from "../../components/StatusBadge";
import { EmptyState } from "../../components/EmptyState";
import { ESTADOS_CASO } from "../../data/constants";
import { formatShort } from "../../utils/date";

export function CasosList() {
  const { casos } = useData();
  const [query, setQuery] = useState("");
  const [estado, setEstado] = useState("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return casos.filter((c) => {
      const matchEstado = estado === "Todos" || c.estado === estado;
      if (!matchEstado) return false;
      if (!q) return true;
      const partes = c.partes.map((p) => p.nombre).join(" ").toLowerCase();
      return (
        c.codigo.toLowerCase().includes(q) ||
        c.descripcion.toLowerCase().includes(q) ||
        c.tipoConflicto.toLowerCase().includes(q) ||
        partes.includes(q)
      );
    });
  }, [casos, query, estado]);

  return (
    <div>
      <PageHeader
        title="Casos judiciales"
        description="Registre un nuevo caso, consulte los existentes y actualice su avance."
        action={
          <Link
            to="/casos/nuevo"
            className="flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800"
          >
            <Plus size={18} />
            Nuevo caso
          </Link>
        }
      />

      <SearchFilterBar
        query={query}
        onQuery={setQuery}
        placeholder="Buscar por código, motivo o nombre de una parte..."
        filters={["Todos", ...ESTADOS_CASO]}
        active={estado}
        onFilter={setEstado}
      />

      {filtered.length === 0 ? (
        <EmptyState
          icon={Gavel}
          title={casos.length === 0 ? "Aún no hay casos registrados" : "No se encontraron casos"}
          description={
            casos.length === 0
              ? "Toque 'Nuevo caso' para registrar el primero."
              : "Pruebe con otro término de búsqueda o cambie el filtro de estado."
          }
          action={
            casos.length === 0 ? (
              <Link to="/casos/nuevo" className="mt-2 flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-800">
                <Plus size={16} /> Nuevo caso
              </Link>
            ) : null
          }
        />
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((c) => (
            <Link
              key={c.id}
              to={`/casos/${c.id}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Gavel size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold text-slate-900">{c.codigo}</p>
                  <StatusBadge estado={c.estado} />
                  <SyncBadge syncStatus={c.syncStatus} />
                </div>
                <p className="mt-1 truncate text-sm text-slate-600">{c.tipoConflicto} · {c.descripcion}</p>
                <div className="mt-1.5 flex items-center gap-3 text-xs text-slate-400">
                  <span>Registrado el {formatShort(c.fechaRegistro)}</span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {c.partes.length} parte{c.partes.length === 1 ? "" : "s"}
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
