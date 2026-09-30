import { Clock, CheckCircle2, PauseCircle, XCircle, Calendar, CloudOff, Cloud } from "lucide-react";

// Estado con color + ícono + texto simultáneamente: nunca solo color.
// (Accesibilidad para daltonismo + reconocimiento en vez de recuerdo.)
const ESTADO_MAP = {
  // Casos
  "En trámite": { icon: Clock, cls: "bg-amber-50 text-amber-800 border-amber-200" },
  Concluido: { icon: CheckCircle2, cls: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  Suspendido: { icon: PauseCircle, cls: "bg-slate-100 text-slate-700 border-slate-300" },
  // Actuaciones
  Pendiente: { icon: Clock, cls: "bg-amber-50 text-amber-800 border-amber-200" },
  Atendida: { icon: CheckCircle2, cls: "bg-blue-50 text-blue-800 border-blue-200" },
  Concluida: { icon: CheckCircle2, cls: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  // Actividades
  Programada: { icon: Calendar, cls: "bg-blue-50 text-blue-800 border-blue-200" },
  Realizada: { icon: CheckCircle2, cls: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  Cancelada: { icon: XCircle, cls: "bg-red-50 text-red-800 border-red-200" },
};

export function StatusBadge({ estado, className = "" }) {
  const cfg = ESTADO_MAP[estado] || { icon: Clock, cls: "bg-slate-100 text-slate-700 border-slate-300" };
  const Icon = cfg.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${cfg.cls} ${className}`}
    >
      <Icon size={14} strokeWidth={2.5} />
      {estado}
    </span>
  );
}

export function SyncBadge({ syncStatus, className = "" }) {
  const synced = syncStatus === "sincronizado";
  const Icon = synced ? Cloud : CloudOff;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
        synced
          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
          : "bg-amber-50 text-amber-800 border-amber-200"
      } ${className}`}
      title={synced ? "Sincronizado con el servidor" : "Guardado en este dispositivo, pendiente de sincronizar"}
    >
      <Icon size={14} strokeWidth={2.5} />
      {synced ? "Sincronizado" : "Guardado en el dispositivo"}
    </span>
  );
}
