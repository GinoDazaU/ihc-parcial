import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertTriangle, Info, X } from "lucide-react";

// Feedback inmediato y obvio tras cada acción (principio de Feedback, Norman).
// Se usa para confirmar guardado, sincronización y errores de validación.
const ToastContext = createContext(null);

const ICONS = { success: CheckCircle2, warning: AlertTriangle, info: Info };
const STYLES = {
  success: "bg-emerald-600",
  warning: "bg-amber-600",
  info: "bg-slate-800",
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  }, []);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 w-[min(92vw,420px)]">
        {toasts.map((t) => {
          const Icon = ICONS[t.type] || Info;
          return (
            <div
              key={t.id}
              className={`${STYLES[t.type]} text-white rounded-xl shadow-lg px-4 py-3 flex items-start gap-3 animate-[fadeIn_.2s_ease]`}
              role="status"
            >
              <Icon size={22} className="shrink-0 mt-0.5" />
              <p className="text-sm font-medium leading-snug flex-1">{t.message}</p>
              <button
                onClick={() => dismiss(t.id)}
                className="shrink-0 opacity-80 hover:opacity-100"
                aria-label="Cerrar aviso"
              >
                <X size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider");
  return ctx;
}
