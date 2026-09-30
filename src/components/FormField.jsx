import { AlertCircle } from "lucide-react";

// Envoltorio único para todos los campos de formulario de la app.
// Marca "obligatorio" vs "(opcional)" de forma explícita (Heurística 5:
// prevención de errores) y muestra el error específico inline, nunca una
// alerta genérica al enviar (Heurística 9: ayudar a reconocer y recuperarse
// de errores).
export const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 " +
  "placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 " +
  "disabled:bg-slate-50 disabled:text-slate-500";

export function FormField({ label, required, hint, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline gap-1.5 text-sm font-semibold text-slate-800">
        {label}
        {required ? (
          <span className="text-red-600" aria-hidden="true">*</span>
        ) : (
          <span className="text-xs font-normal text-slate-400">(opcional)</span>
        )}
      </span>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700">
          <AlertCircle size={15} className="shrink-0" />
          {error}
        </p>
      )}
    </label>
  );
}
