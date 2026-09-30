// Datos de ejemplo precargados para que el prototipo no arranque vacío.
// Todo lo demás se crea/edita en vivo desde la propia app.

const uid = () => Math.random().toString(36).slice(2, 10);

export const seedCasos = [
  {
    id: uid(),
    codigo: "CASO-2026-0001",
    fechaRegistro: "2026-09-18",
    tipoConflicto: "Conflicto vecinal",
    descripcion: "Disputa por el uso de un camino de acceso compartido entre dos predios.",
    estado: "En trámite",
    observaciones: "",
    partes: [
      { id: uid(), nombre: "Rosa Quispe Mamani", tipoDoc: "DNI", numDoc: "41029384", telefono: "987654321", direccion: "Comunidad Huayllabamba", rol: "Solicitante" },
      { id: uid(), nombre: "Teodoro Ccahuana", tipoDoc: "", numDoc: "", telefono: "", direccion: "Comunidad Huayllabamba", rol: "Invitado" },
    ],
    seguimiento: [
      { id: uid(), fecha: "2026-09-18", descripcion: "Recepción del caso y primera escucha a ambas partes.", proximaFecha: "2026-10-05", resultado: "", documento: "" },
    ],
    syncStatus: "sincronizado",
    updatedAt: "2026-09-18T10:00:00",
  },
  {
    id: uid(),
    codigo: "CASO-2026-0002",
    fechaRegistro: "2026-08-30",
    tipoConflicto: "Deuda o pago pendiente",
    descripcion: "Incumplimiento de pago por venta de ganado acordada verbalmente.",
    estado: "Concluido",
    observaciones: "Las partes llegaron a un acuerdo de pago en 3 cuotas.",
    partes: [
      { id: uid(), nombre: "Fermín Quispe Huamán", tipoDoc: "DNI", numDoc: "28394758", telefono: "912345678", direccion: "Comunidad Santa Rosa", rol: "Solicitante" },
      { id: uid(), nombre: "Alberto Mamani Cruz", tipoDoc: "DNI", numDoc: "30293847", telefono: "", direccion: "Comunidad Santa Rosa", rol: "Invitado" },
    ],
    seguimiento: [
      { id: uid(), fecha: "2026-08-30", descripcion: "Registro del caso.", proximaFecha: "2026-09-06", resultado: "", documento: "" },
      { id: uid(), fecha: "2026-09-06", descripcion: "Audiencia de conciliación.", proximaFecha: "", resultado: "Acuerdo de pago en 3 cuotas mensuales, firmado por ambas partes.", documento: "acta-conciliacion.pdf" },
    ],
    syncStatus: "sincronizado",
    updatedAt: "2026-09-06T15:30:00",
  },
];

export const seedActuaciones = [
  {
    id: uid(),
    codigo: "NOT-2026-0001",
    fechaSolicitud: "2026-09-22",
    fechaAtencion: "2026-09-22",
    tipo: "Constancia de posesión",
    descripcion: "Constancia de posesión de terreno agrícola para trámite de conexión de agua.",
    estado: "Atendida",
    observaciones: "",
    personas: [
      { id: uid(), nombre: "Marcelina Huamán Ttito", tipoDoc: "DNI", numDoc: "45678901", telefono: "998877665", direccion: "Comunidad Pampahuasi", participacion: "Solicitante" },
    ],
    resultado: "",
    fechaEntrega: "",
    documento: "",
    syncStatus: "sincronizado",
    updatedAt: "2026-09-22T09:15:00",
  },
];

export const seedActividades = [
  {
    id: uid(),
    titulo: "Audiencia: camino compartido",
    fecha: "2026-10-05",
    horaInicio: "09:00",
    horaTermino: "10:30",
    lugar: "Comunidad Huayllabamba",
    descripcion: "Seguimiento del CASO-2026-0001.",
    estado: "Programada",
    categoria: "Audiencia",
    syncStatus: "sincronizado",
    updatedAt: "2026-09-18T10:05:00",
  },
  {
    id: uid(),
    titulo: "Reunión con teniente gobernador",
    fecha: "2026-09-30",
    horaInicio: "11:00",
    horaTermino: "",
    lugar: "Comunidad Santa Rosa",
    descripcion: "Coordinación de actividades del próximo mes.",
    estado: "Programada",
    categoria: "Reunión",
    syncStatus: "sincronizado",
    updatedAt: "2026-09-15T08:00:00",
  },
  {
    id: uid(),
    titulo: "Visita a Pampahuasi",
    fecha: "2026-10-02",
    horaInicio: "",
    horaTermino: "",
    lugar: "Comunidad Pampahuasi",
    descripcion: "Atención de solicitudes notariales pendientes.",
    estado: "Programada",
    categoria: "Visita",
    syncStatus: "sincronizado",
    updatedAt: "2026-09-20T12:00:00",
  },
];

export { uid };
