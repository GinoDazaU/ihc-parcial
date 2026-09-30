import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, CalendarSearch, ArrowRight, X } from "lucide-react";
import { useData } from "../../context/DataContext";
import { PageHeader } from "../../components/PageHeader";
import { inputClass } from "../../components/FormField";
import { CATEGORIAS_ACTIVIDAD } from "../../data/constants";
import { getMonthGrid, monthLabel, todayISO } from "../../utils/date";

const DIAS_CORTO = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export function AgendaMes() {
  const { actividades } = useData();
  const navigate = useNavigate();
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [showSearch, setShowSearch] = useState(false);
  const [searchDate, setSearchDate] = useState("");
  const todayIso = todayISO();

  const weeks = useMemo(() => getMonthGrid(year, month), [year, month]);

  const byDate = useMemo(() => {
    const map = {};
    for (const a of actividades) {
      if (!map[a.fecha]) map[a.fecha] = [];
      map[a.fecha].push(a);
    }
    return map;
  }, [actividades]);

  const changeMonth = (delta) => {
    let m = month + delta;
    let y = year;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setMonth(m); setYear(y);
  };

  const goToday = () => { setYear(today.getFullYear()); setMonth(today.getMonth()); };

  const irAFecha = () => {
    if (!searchDate) return;
    navigate(`/agenda/dia/${searchDate}`);
  };

  return (
    <div>
      <PageHeader
        title="Agenda"
        description="Organice audiencias, reuniones, visitas y otras actividades."
        action={
          <Link
            to="/agenda/nueva"
            className="flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800"
          >
            <Plus size={18} /> Nueva actividad
          </Link>
        }
      />

      <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <button onClick={() => changeMonth(-1)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Mes anterior">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => changeMonth(1)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Mes siguiente">
              <ChevronRight size={20} />
            </button>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">{monthLabel(year, month)}</h2>
          <div className="flex items-center gap-2">
            <button onClick={goToday} className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50">
              Hoy
            </button>
            <button
              onClick={() => setShowSearch((v) => !v)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold ${
                showSearch ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-300 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <CalendarSearch size={15} />
              Buscar una fecha
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className={`${inputClass} max-w-[200px] py-2`}
              autoFocus
            />
            <button
              onClick={irAFecha}
              disabled={!searchDate}
              className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-3 py-2 text-sm font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              Ir a esa fecha <ArrowRight size={15} />
            </button>
            <button
              onClick={() => { setShowSearch(false); setSearchDate(""); }}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Cerrar búsqueda"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
          {DIAS_CORTO.map((d) => <div key={d} className="py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7">
          {weeks.flat().map((day) => {
            const items = byDate[day.iso] || [];
            const isToday = day.iso === todayIso;
            return (
              <button
                key={day.iso}
                onClick={() => navigate(`/agenda/dia/${day.iso}`)}
                className={`flex min-h-[84px] flex-col items-stretch gap-1 border-b border-r border-slate-100 p-1.5 text-left last:border-r-0 hover:bg-blue-50/40 ${
                  day.inMonth ? "bg-white" : "bg-slate-50/60"
                }`}
              >
                <span
                  className={`ml-auto flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    isToday ? "bg-blue-700 text-white" : day.inMonth ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  {day.date.getDate()}
                </span>
                <div className="flex flex-col gap-0.5">
                  {items.slice(0, 3).map((a) => {
                    const cat = CATEGORIAS_ACTIVIDAD[a.categoria] || CATEGORIAS_ACTIVIDAD.Otro;
                    return (
                      <span
                        key={a.id}
                        className={`truncate rounded px-1.5 py-0.5 text-[10px] font-semibold ${cat.light}`}
                        title={a.titulo}
                      >
                        {a.titulo}
                      </span>
                    );
                  })}
                  {items.length > 3 && (
                    <span className="text-[10px] font-semibold text-slate-400">+{items.length - 3} más</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(CATEGORIAS_ACTIVIDAD).map(([nombre, cfg]) => (
          <span key={nombre} className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <span className={`h-2.5 w-2.5 rounded-full ${cfg.color}`} /> {nombre}
          </span>
        ))}
      </div>
    </div>
  );
}
