import { PageHeader } from "../components/PageHeader";

const CAMPOS_CASO = [
  ["Código del caso", "—", "Autogenerado por la aplicación, de solo lectura."],
  ["Tipo de conflicto o materia", "Obligatorio", "Selección de lista controlada."],
  ["Descripción del motivo", "Obligatorio", "Mínimo 10 caracteres."],
  ["Estado", "Obligatorio", "En trámite / Concluido / Suspendido. Por defecto 'En trámite'."],
  ["Observaciones", "Opcional", "—"],
  ["Partes: nombres y apellidos", "Obligatorio", "Al menos una parte."],
  ["Partes: documento de identidad", "Opcional", "\"Si corresponde\", según el propio caso."],
  ["Partes: teléfono", "Opcional", "\"Si se dispone\", puede no existir en zona rural."],
  ["Partes: dirección/comunidad", "Obligatorio", "Acepta solo el nombre de la comunidad."],
  ["Partes: rol en el caso", "Obligatorio", "Solicitante / Invitado / Testigo / Otro."],
  ["Seguimiento: fecha y descripción", "Obligatorio al agregar", "No se exige tener seguimiento para guardar el caso."],
  ["Seguimiento: resultado/acuerdo", "Condicional", "Obligatorio solo si el estado pasa a 'Concluido'."],
];

const CAMPOS_ACTUACION = [
  ["Código de registro", "—", "Autogenerado por la aplicación, de solo lectura."],
  ["Tipo de actuación notarial", "Obligatorio", "Selección con lenguaje simple, sin jerga innecesaria."],
  ["Descripción o asunto", "Obligatorio", "Mínimo 10 caracteres."],
  ["Estado de la atención", "Obligatorio", "Pendiente / Atendida / Concluida. Por defecto 'Pendiente'."],
  ["Fecha de atención", "Opcional", "Puede definirse después de la solicitud."],
  ["Personas: nombre", "Obligatorio", "Al menos una persona."],
  ["Personas: documento / teléfono", "Opcional", "\"Si corresponde\" / \"si se dispone\"."],
  ["Personas: dirección/comunidad", "Obligatorio", "Mismo criterio que en Casos."],
  ["Personas: participación", "Obligatorio", "Solicitante / Declarante / Testigo."],
  ["Resultado de la actuación", "Condicional", "Obligatorio solo si el estado es 'Concluida'."],
  ["Documento adjunto o referencia", "Opcional", "Acepta referencia a un archivo físico."],
];

const CAMPOS_ACTIVIDAD = [
  ["Título de la actividad", "Obligatorio", "—"],
  ["Fecha", "Obligatorio", "—"],
  ["Hora de inicio / término", "Opcional", "Permite actividades sin horario fijo."],
  ["Lugar o comunidad", "Obligatorio", "Necesario para planificar el desplazamiento."],
  ["Descripción / motivo", "Opcional", "—"],
  ["Estado", "Obligatorio", "Programada / Realizada / Cancelada."],
  ["Categoría", "Obligatorio", "Define color e ícono; nunca solo color."],
];

const DECISIONES = [
  ["Barra de estado de conexión y sincronización siempre visible", "Heurística 1 — Visibilidad del estado del sistema", "Saber en todo momento si el trabajo está seguro."],
  ["Código de caso/actuación autogenerado, de solo lectura", "Prevención de error humano (Norman)", "Evita duplicados y errores de tipeo en identificadores."],
  ["Lenguaje simple en formularios, sin jerga jurídica innecesaria", "Heurística 2 — Coincidencia entre el sistema y el mundo real", "Usuario sin experiencia frecuente en apps digitales."],
  ["Asterisco + etiqueta \"(opcional)\" explícita en cada campo", "Heurística 5 — Prevención de errores + Visibilidad (Norman)", "Evita bloqueos por datos que no existen en zona rural."],
  ["Validación inline con mensaje específico antes de enviar", "Heurística 9 — Ayudar a reconocer y recuperarse de errores", "Reduce frustración frente a intentos repetidos a ciegas."],
  ["Confirmación visible (\"toast\") tras guardar cada registro", "Feedback (Norman)", "Cumple lo pedido explícitamente por el caso."],
  ["Estado con color + ícono + texto, nunca solo color", "Accesibilidad (daltonismo) + reconocimiento vs. recuerdo", "Reconocer el estado de un caso de un vistazo."],
  ["Ícono siempre acompañado de texto en toda acción", "Heurística 6 — Reconocimiento en vez de recuerdo", "Usuario no memoriza símbolos abstractos."],
  ["Botón \"+ Nuevo\" grande y fijo por módulo", "Affordance clara + Mapping directo", "La acción más frecuente siempre alcanzable con el pulgar."],
  ["Confirmación con opción de cancelar antes de concluir un caso", "Heurística 3 — Control y libertad del usuario", "Previene una acción difícil de revertir por error."],
  ["Al editar, diálogo que lista los campos modificados (antes → después) antes de guardar", "Visibilidad del estado + Heurística 3 — Control y libertad del usuario", "Cumple lo pedido explícitamente: indicar qué datos se están modificando, no solo confirmar al final."],
  ["Misma estructura de navegación y formularios en los 3 módulos", "Heurística 4 — Consistencia y estándares", "El modelo mental de un módulo sirve para los otros dos."],
  ["Estados vacíos con instrucción, nunca pantalla en blanco", "Guía activa ante la incertidumbre", "Reduce la ansiedad del primer uso."],
  ["Tipografía grande, alto contraste, objetivos táctiles amplios", "Factor humano: uso táctil, exteriores con sol", "Legibilidad y precisión de toque en campo."],
  ["Navegación lateral fija pensada para tableta en horizontal", "Factor humano: tamaño/orientación real del dispositivo", "Aprovecha el espacio de 10\" sin saturarlo."],
  ["\"Sincronizar ahora\" con resultado explícito de éxito", "Visibilidad del estado + literal del caso", "Confirma si el proceso se completó correctamente."],
  ["Badge ámbar \"Guardado en el dispositivo\" vs. verde \"Sincronizado\"", "Visibilidad + reduce carga de memoria", "El usuario nunca tiene que adivinar si algo se sincronizó."],
  ["Sincronización automática al recuperar conexión + botón manual de respaldo", "Automatización sin perder control (Heurística 3)", "No depende de que la jueza recuerde sincronizar manualmente."],
  ["Hora de la última sincronización siempre visible en la barra superior", "Heurística 1 — Visibilidad del estado del sistema", "Confianza en que la información está al día, sin tener que preguntarse cuándo se guardó."],
];

export function Justificacion() {
  return (
    <div>
      <PageHeader
        title="Justificación de diseño"
        description="Documentación del prototipo: qué decisión se tomó, qué principio o heurística la respalda, y qué necesidad del usuario atiende. Equivalente interactivo del entregable en PDF que pide el enunciado."
      />

      <div className="flex flex-col gap-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-2 text-base font-bold text-slate-900">El caso, en una frase</h2>
          <p className="text-sm text-slate-600">
            Una jueza de paz rural, con poca práctica en apps digitales, necesita registrar casos judiciales,
            actuaciones notariales y organizar su agenda desde una tableta de 10", trabajando la mayor parte
            del tiempo <strong>sin conexión a Internet</strong>. El diseño completo de este prototipo se deriva
            de esas tres restricciones: bajo alfabetismo digital, dispositivo táctil de 10" y conectividad
            intermitente como condición normal, no como excepción.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-1 text-base font-bold text-slate-900">Funcionamiento sin conexión</h2>
          <p className="mb-4 text-sm text-slate-600">
            Todo registro nuevo o editado se guarda de inmediato en el dispositivo. Si hay conexión, se marca
            como <strong>&ldquo;Sincronizado&rdquo;</strong>; si no la hay, se marca como
            <strong> &ldquo;Guardado en el dispositivo&rdquo;</strong> (pendiente). Apenas la aplicación detecta
            que la conexión volvió, sincroniza los pendientes <strong>automáticamente</strong>, sin que la jueza
            tenga que acordarse de hacerlo — así funciona en la práctica: ella no necesariamente sabrá en qué
            momento exacto la tableta recuperó señal. El botón &ldquo;Sincronizar ahora&rdquo; se mantiene visible
            como control manual de respaldo (Heurística 3: control y libertad del usuario), y la hora de la
            última sincronización queda siempre a la vista en la barra superior. Al sincronizar, la aplicación
            confirma cuántos registros se sincronizaron correctamente — tal como lo exige el enunciado del caso.
            El interruptor &ldquo;Simular pérdida de conexión&rdquo; existe solo para poder demostrar este flujo
            completo dentro del prototipo, ya que no hay un servidor real detrás.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-extrabold text-slate-900">Campos por módulo</h2>
          <div className="flex flex-col gap-6">
            <CamposTable title="1. Registro de casos judiciales" rows={CAMPOS_CASO} />
            <CamposTable title="2. Registro de actuaciones notariales" rows={CAMPOS_ACTUACION} />
            <CamposTable title="3. Agenda o calendario" rows={CAMPOS_ACTIVIDAD} />
          </div>
        </section>

        <section>
          <h2 className="mb-1 text-lg font-extrabold text-slate-900">Principios, heurísticas y factores humanos aplicados</h2>
          <p className="mb-3 text-sm text-slate-500">Cada decisión de diseño del prototipo, con su fundamento y la necesidad que atiende.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Decisión de diseño</th>
                  <th className="px-4 py-3">Principio / heurística / factor humano</th>
                  <th className="px-4 py-3">Necesidad que atiende</th>
                </tr>
              </thead>
              <tbody>
                {DECISIONES.map(([decision, principio, necesidad], i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50/60" : ""}>
                    <td className="px-4 py-3 align-top font-semibold text-slate-800">{decision}</td>
                    <td className="px-4 py-3 align-top text-blue-700">{principio}</td>
                    <td className="px-4 py-3 align-top text-slate-600">{necesidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
          <h2 className="mb-2 text-base font-bold text-slate-900">Qué no alcanza este prototipo</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>No hay autenticación real ni backend: la sincronización es simulada.</li>
            <li>No se implementa carga real de archivos; los documentos quedan como referencia de nombre.</li>
            <li>El acceso desde computadora reutiliza el mismo diseño responsive, sin un layout de escritorio dedicado.</li>
            <li>No se realizaron pruebas de usabilidad con usuarios reales.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function CamposTable({ title, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-2.5">Campo</th>
            <th className="px-4 py-2.5">¿Obligatorio?</th>
            <th className="px-4 py-2.5">Validación / criterio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([campo, oblig, regla], i) => (
            <tr key={i} className={i % 2 ? "bg-slate-50/60" : ""}>
              <td className="px-4 py-2.5 align-top font-medium text-slate-800">{campo}</td>
              <td className="px-4 py-2.5 align-top">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    oblig === "Obligatorio"
                      ? "bg-blue-50 text-blue-700"
                      : oblig === "Opcional"
                      ? "bg-slate-100 text-slate-500"
                      : oblig === "—"
                      ? "bg-slate-100 text-slate-400"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {oblig}
                </span>
              </td>
              <td className="px-4 py-2.5 align-top text-slate-600">{regla}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
