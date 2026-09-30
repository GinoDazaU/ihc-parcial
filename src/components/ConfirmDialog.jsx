import { AlertTriangle } from "lucide-react";

// Confirmación explícita con opción de cancelar antes de cualquier acción
// difícil de revertir (Heurística 3: control y libertad del usuario).
export function ConfirmDialog({ open, title, description, confirmLabel = "Confirmar", tone = "danger", onConfirm, onCancel }) {
  if (!open) return null;
  const toneCls = tone === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="rounded-full bg-red-50 p-2 text-red-600">
            <AlertTriangle size={22} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        <p className="mb-6 text-sm text-slate-600">{description}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-300 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 rounded-xl py-3 text-sm font-semibold text-white ${toneCls}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
