// Opciones controladas de cada módulo. Centralizadas para que los 3 módulos
// mantengan la misma estructura y vocabulario (Heurística 4: Consistencia y estándares).

export const TIPOS_CONFLICTO = [
  "Conflicto vecinal",
  "Conflicto familiar",
  "Deuda o pago pendiente",
  "Conflicto de tierras",
  "Otro",
];

export const ESTADOS_CASO = ["En trámite", "Concluido", "Suspendido"];

export const ROLES_PARTE = ["Solicitante", "Invitado", "Testigo", "Otro"];

export const TIPOS_ACTUACION = [
  "Constancia de posesión",
  "Declaración jurada",
  "Legalización de firma",
  "Constancia de convivencia",
  "Otro",
];

export const ESTADOS_ACTUACION = ["Pendiente", "Atendida", "Concluida"];

export const PARTICIPACION_PERSONA = ["Solicitante", "Declarante", "Testigo"];

export const ESTADOS_ACTIVIDAD = ["Programada", "Realizada", "Cancelada"];

// Cada categoría define color e ícono: el color nunca es la única señal.
export const CATEGORIAS_ACTIVIDAD = {
  Audiencia: { color: "bg-blue-500", light: "bg-blue-50 text-blue-700 border-blue-200", icon: "Gavel" },
  Reunión: { color: "bg-violet-500", light: "bg-violet-50 text-violet-700 border-violet-200", icon: "Users" },
  Visita: { color: "bg-emerald-500", light: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "MapPin" },
  Otro: { color: "bg-slate-400", light: "bg-slate-50 text-slate-700 border-slate-200", icon: "Circle" },
};

export const TIPO_DOCUMENTO = ["DNI", "Carné de extranjería", "Otro"];
