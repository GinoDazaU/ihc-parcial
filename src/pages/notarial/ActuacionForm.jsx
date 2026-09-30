import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Plus, Trash2, Save, User } from "lucide-react";
import { useData } from "../../context/DataContext";
import { useToast } from "../../context/ToastContext";
import { PageHeader } from "../../components/PageHeader";
import { FormField, inputClass } from "../../components/FormField";
import { ChangeSummaryDialog } from "../../components/ChangeSummaryDialog";
import { TIPOS_ACTUACION, ESTADOS_ACTUACION, PARTICIPACION_PERSONA, TIPO_DOCUMENTO } from "../../data/constants";
import { uid } from "../../data/seed";
import { todayISO } from "../../utils/date";
import { buildDiff } from "../../utils/diff";

const personaVacia = () => ({
  id: uid(),
  nombre: "",
  tipoDoc: "",
  numDoc: "",
  telefono: "",
  direccion: "",
  participacion: "Solicitante",
});

const ACTUACION_LABELS = {
  tipo: "Tipo de actuación notarial",
  fechaSolicitud: "Fecha de solicitud",
  fechaAtencion: "Fecha de atención",
  descripcion: "Descripción o asunto",
  estado: "Estado de la atención",
  observaciones: "Observaciones",
  resultado: "Resultado de la actuación",
  fechaEntrega: "Fecha de entrega o conclusión",
  documento: "Documento adjunto o referencia",
};

const resumenPersonas = (arr) => arr.map((p) => `${p.nombre} (${p.participacion})`).join("; ");

export function ActuacionForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { actuaciones, addActuacion, updateActuacion } = useData();
  const { showToast } = useToast();
  const existente = isEdit ? actuaciones.find((a) => a.id === id) : null;

  if (isEdit && !existente) return <Navigate to="/notarial" replace />;

  const [tipo, setTipo] = useState(existente?.tipo || "");
  const [fechaSolicitud, setFechaSolicitud] = useState(existente?.fechaSolicitud || todayISO());
  const [fechaAtencion, setFechaAtencion] = useState(existente?.fechaAtencion || "");
  const [descripcion, setDescripcion] = useState(existente?.descripcion || "");
  const [estado, setEstado] = useState(existente?.estado || "Pendiente");
  const [observaciones, setObservaciones] = useState(existente?.observaciones || "");
  const [resultado, setResultado] = useState(existente?.resultado || "");
  const [fechaEntrega, setFechaEntrega] = useState(existente?.fechaEntrega || "");
  const [documento, setDocumento] = useState(existente?.documento || "");
  const [personas, setPersonas] = useState(existente?.personas?.length ? existente.personas : [personaVacia()]);
  const [errors, setErrors] = useState({});
  const [changes, setChanges] = useState([]);
  const [pendingData, setPendingData] = useState(null);

  const requiereResultado = estado === "Concluida";

  const updatePersona = (idx, field, value) => {
    setPersonas((prev) => prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)));
  };
  const addPersona = () => setPersonas((prev) => [...prev, personaVacia()]);
  const removePersona = (idx) => setPersonas((prev) => prev.filter((_, i) => i !== idx));

  const validate = () => {
    const e = {};
    if (!tipo) e.tipo = "Seleccione el tipo de actuación notarial.";
    if (descripcion.trim().length < 10) e.descripcion = "Describa el asunto con al menos 10 caracteres.";
    if (requiereResultado && !resultado.trim()) e.resultado = "El resultado es obligatorio al marcar la actuación como concluida.";
    personas.forEach((p, i) => {
      if (!p.nombre.trim()) e[`persona-${i}-nombre`] = "Ingrese el nombre de la persona.";
      if (!p.direccion.trim()) e[`persona-${i}-direccion`] = "Indique al menos la comunidad o localidad.";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const data = {
      tipo,
      fechaSolicitud,
      fechaAtencion,
      descripcion: descripcion.trim(),
      estado,
      observaciones: observaciones.trim(),
      resultado: resultado.trim(),
      fechaEntrega,
      documento: documento.trim(),
      personas,
    };
    if (isEdit) {
      const fieldChanges = buildDiff(existente, data, ACTUACION_LABELS);
      const personasAntes = resumenPersonas(existente.personas);
      const personasDespues = resumenPersonas(personas);
      if (personasAntes !== personasDespues) {
        fieldChanges.push({ key: "personas", label: "Personas participantes", before: personasAntes, after: personasDespues });
      }
      if (fieldChanges.length === 0) {
        showToast("No se detectaron cambios en la actuación.", "info");
        navigate(`/notarial/${existente.id}`);
        return;
      }
      setChanges(fieldChanges);
      setPendingData(data);
    } else {
      const nueva = addActuacion(data);
      navigate(`/notarial/${nueva.id}`);
    }
  };

  const confirmarGuardado = () => {
    updateActuacion(existente.id, pendingData);
    setPendingData(null);
    navigate(`/notarial/${existente.id}`);
  };

  return (
    <div>
      <PageHeader
        title={isEdit ? `Editar ${existente.codigo}` : "Nueva actuación notarial"}
        back={isEdit ? `/notarial/${id}` : "/notarial"}
        description={isEdit ? "Los cambios se indicarán claramente y se confirmará el guardado." : "El código de registro se genera automáticamente al guardar."}
      />

      <div className="flex flex-col gap-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-base font-bold text-slate-900">Información de la actuación</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Tipo de actuación notarial" required error={errors.tipo}>
              <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={inputClass}>
                <option value="">Seleccionar...</option>
                {TIPOS_ACTUACION.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </FormField>
            <FormField label="Estado de la atención" required>
              <select value={estado} onChange={(e) => setEstado(e.target.value)} className={inputClass}>
                {ESTADOS_ACTUACION.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </FormField>
            <FormField label="Fecha de solicitud" required>
              <input type="date" value={fechaSolicitud} onChange={(e) => setFechaSolicitud(e.target.value)} className={inputClass} />
            </FormField>
            <FormField label="Fecha de atención" hint="Puede definirse más adelante">
              <input type="date" value={fechaAtencion} onChange={(e) => setFechaAtencion(e.target.value)} className={inputClass} />
            </FormField>
            <FormField label="Descripción o asunto" required error={errors.descripcion} hint="Ej: Constancia de posesión de terreno para trámite municipal.">
              <textarea rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className={inputClass} />
            </FormField>
            <FormField label="Observaciones">
              <textarea rows={3} value={observaciones} onChange={(e) => setObservaciones(e.target.value)} className={inputClass} />
            </FormField>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Personas participantes</h2>
              <p className="text-xs text-slate-500">Se requiere al menos una persona para guardar la actuación.</p>
            </div>
            <button onClick={addPersona} className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50">
              <Plus size={14} /> Agregar persona
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {personas.map((p, idx) => (
              <div key={p.id} className="rounded-xl border border-slate-200 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
                    <User size={14} className="text-slate-400" /> Persona {idx + 1}
                  </p>
                  {personas.length > 1 && (
                    <button onClick={() => removePersona(idx)} className="flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700">
                      <Trash2 size={13} /> Quitar
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <FormField label="Nombres y apellidos" required error={errors[`persona-${idx}-nombre`]}>
                    <input value={p.nombre} onChange={(e) => updatePersona(idx, "nombre", e.target.value)} className={inputClass} />
                  </FormField>
                  <FormField label="Participación" required>
                    <select value={p.participacion} onChange={(e) => updatePersona(idx, "participacion", e.target.value)} className={inputClass}>
                      {PARTICIPACION_PERSONA.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Tipo de documento" hint="Si corresponde">
                    <select value={p.tipoDoc} onChange={(e) => updatePersona(idx, "tipoDoc", e.target.value)} className={inputClass}>
                      <option value="">No indicado</option>
                      {TIPO_DOCUMENTO.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Número de documento" hint="Si corresponde">
                    <input value={p.numDoc} onChange={(e) => updatePersona(idx, "numDoc", e.target.value)} className={inputClass} disabled={!p.tipoDoc} />
                  </FormField>
                  <FormField label="Teléfono o medio de contacto" hint="Si se dispone">
                    <input value={p.telefono} onChange={(e) => updatePersona(idx, "telefono", e.target.value)} className={inputClass} />
                  </FormField>
                  <FormField label="Dirección, comunidad o localidad" required error={errors[`persona-${idx}-direccion`]}>
                    <input value={p.direccion} onChange={(e) => updatePersona(idx, "direccion", e.target.value)} className={inputClass} />
                  </FormField>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-base font-bold text-slate-900">Resultado y documentación</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Resultado de la actuación"
              required={requiereResultado}
              error={errors.resultado}
              hint={requiereResultado ? "Obligatorio porque el estado es Concluida." : "Puede completarse cuando la actuación concluya."}
            >
              <textarea rows={2} value={resultado} onChange={(e) => setResultado(e.target.value)} className={inputClass} />
            </FormField>
            <FormField label="Fecha de entrega o conclusión">
              <input type="date" value={fechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)} className={inputClass} />
            </FormField>
            <FormField label="Documento adjunto o referencia física" hint='Ej: "Archivo físico N.º 12" si no se adjunta digitalmente'>
              <input value={documento} onChange={(e) => setDocumento(e.target.value)} className={inputClass} />
            </FormField>
          </div>
        </section>

        <div className="flex justify-end gap-3 pb-6">
          <button
            onClick={() => navigate(isEdit ? `/notarial/${id}` : "/notarial")}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Cancelar
          </button>
          <button onClick={submit} className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
            <Save size={17} /> {isEdit ? "Guardar cambios" : "Guardar actuación"}
          </button>
        </div>
      </div>

      <ChangeSummaryDialog
        open={Boolean(pendingData)}
        changes={changes}
        onCancel={() => setPendingData(null)}
        onConfirm={confirmarGuardado}
      />
    </div>
  );
}
