import { Search } from "lucide-react";

// Buscador + filtros como "chips" grandes en vez de un menú desplegable:
// más fácil de tocar y de entender de un vistazo en una tableta.
export function SearchFilterBar({ query, onQuery, placeholder, filters, active, onFilter }) {
  return (
    <div className="mb-5 flex flex-col gap-3">
      <div className="relative">
        <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />
      </div>
      {filters && (
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => onFilter(f === active ? "Todos" : f)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                active === f
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
