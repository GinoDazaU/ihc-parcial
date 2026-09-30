import { ArrowRight, X, Pencil } from "lucide-react";

// Antes de guardar una edición, muestra exactamente qué campos cambiaron
// (valor anterior -> nuevo) y exige una confirmación explícita.
// Heurística 3 (control y libertad del usuario) + requisito literal del caso:
// "indicar qué datos se están modificando y confirmar que los cambios quedaron guardados".
export function ChangeSummaryDialog({ open, changes, onCancel, onConfirm }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4" role="dialog" aria-modal="true">
      <div className="flex max-h-[85vh] w-full max-w-md flex-col rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-1 flex items-center gap-2.5">
          <div className="rounded-full bg-blue-50 p-2 text-blue-700">
            <Pencil size={18} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Confirmar cambios</h3>
          <button onClick={onCancel} className="ml-auto text-slate-400 hover:text-slate-600" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>
        <p className="mb-4 text-sm text-slate-500">Está a punto de guardar los siguientes cambios:</p>

        <ul className="mb-6 flex flex-col gap-2.5 overflow-y-auto pr-1">
          {changes.map((c) => (
            <li key={c.key} className="rounded-xl border border-amber-200 bg-amber-50/60 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-700">{c.label}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                <span className="text-slate-400 line-through">{String(c.before || "(vacío)")}</span>
                <ArrowRight size={14} className="shrink-0 text-slate-400" />
                <span className="font-semibold text-slate-900">{String(c.after || "(vacío)")}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-300 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Seguir editando
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Confirmar y guardar
          </button>
        </div>
      </div>
    </div>
  );
}
