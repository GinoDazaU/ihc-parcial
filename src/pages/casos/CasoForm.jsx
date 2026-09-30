import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Plus, Trash2, Save, User } from "lucide-react";
import { useData } from "../../context/DataContext";
import { useToast } from "../../context/ToastContext";
import { PageHeader } from "../../components/PageHeader";
import { FormField, inputClass } from "../../components/FormField";
import { ChangeSummaryDialog } from "../../components/ChangeSummaryDialog";
import { TIPOS_CONFLICTO, ESTADOS_CASO, ROLES_PARTE, TIPO_DOCUMENTO } from "../../data/constants";
import { uid } from "../../data/seed";
import { todayISO } from "../../utils/date";
import { buildDiff } from "../../utils/diff";

const parteVacia = () => ({
  id: uid(),
  nombre: "",
  tipoDoc: "",
  numDoc: "",
  telefono: "",
  direccion: "",
  rol: "Solicitante",
});

const CASO_LABELS = {
  tipoConflicto: "Tipo de conflicto o materia",
  descripcion: "Descripción del motivo",
  estado: "Estado del caso",
  observaciones: "Observaciones",
};

const resumenPartes = (arr) => arr.map((p) => `${p.nombre} (${p.rol})`).join("; ");

export function CasoForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { casos, addCaso, updateCaso } = useData();
  const { showToast } = useToast();
  const existente = isEdit ? casos.find((c) => c.id === id) : null;

  if (isEdit && !existente) return <Navigate to="/casos" replace />;

  const [tipoConflicto, setTipoConflicto] = useState(existente?.tipoConflicto || "");
  const [descripcion, setDescripcion] = useState(existente?.descripcion || "");
  const [estado, setEstado] = useState(existente?.estado || "En trámite");
  const [observaciones, setObservaciones] = useState(existente?.observaciones || "");
  const [resultadoConclusion, setResultadoConclusion] = useState("");
  const [partes, setPartes] = useState(existente?.partes?.length ? existente.partes : [parteVacia()]);
  const [errors, setErrors] = useState({});
  const [changes, setChanges] = useState([]);
  const [pendingData, setPendingData] = useState(null);

  const wasConcluido = existente?.estado === "Concluido";
  const pideResultado = estado === "Concluido" && !wasConcluido;

  const updateParte = (idx, field, value) => {
    setPartes((prev) => prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)));
  };
  const addParte = () => setPartes((prev) => [...prev, parteVacia()]);
  const removeParte = (idx) => setPartes((prev) => prev.filter((_, i) => i !== idx));

  const validate = () => {
    const e = {};
    if (!tipoConflicto) e.tipoConflicto = "Seleccione el tipo de conflicto o materia.";
    if (descripcion.trim().length < 10) e.descripcion = "Describa el motivo con al menos 10 caracteres.";
    if (pideResultado && !resultadoConclusion.trim()) {
      e.resultadoConclusion = "El resultado es obligatorio al concluir el caso.";
    }
    partes.forEach((p, i) => {
      if (!p.nombre.trim()) e[`parte-${i}-nombre`] = "Ingrese el nombre de la persona.";
      if (!p.direccion.trim()) e[`parte-${i}-direccion`] = "Indique al menos la comunidad o localidad.";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const data = {
      tipoConflicto,
      descripcion: descripcion.trim(),
      estado,
      observaciones: observaciones.trim(),
      partes,
    };
    if (pideResultado) {
      data.seguimiento = [
        ...(existente?.seguimiento || []),
        {
          id: uid(),
          fecha: todayISO(),
          descripcion: "Caso concluido.",
          proximaFecha: "",
          resultado: resultadoConclusion.trim(),
          documento: "",
        },
      ];
    }
    if (isEdit) {
      const fieldChanges = buildDiff(existente, data, CASO_LABELS);
      const partesAntes = resumenPartes(existente.partes);
      const partesDespues = resumenPartes(partes);
      if (partesAntes !== partesDespues) {
        fieldChanges.push({ key: "partes", label: "Partes involucradas", before: partesAntes, after: partesDespues });
      }
      if (fieldChanges.length === 0) {
        showToast("No se detectaron cambios en el caso.", "info");
        navigate(`/casos/${existente.id}`);
        return;
      }
      setChanges(fieldChanges);
      setPendingData(data);
    } else {
      const nuevo = addCaso({ ...data, seguimiento: data.seguimiento || [] });
      navigate(`/casos/${nuevo.id}`);
    }
  };

  const confirmarGuardado = () => {
    updateCaso(existente.id, pendingData);
    setPendingData(null);
    navigate(`/casos/${existente.id}`);
  };

  return (
    <div>
      <PageHeader
        title={isEdit ? `Editar ${existente.codigo}` : "Nuevo caso judicial"}
        back={isEdit ? `/casos/${id}` : "/casos"}
        description={isEdit ? "Los cambios se indicarán claramente y se confirmará el guardado." : "El código del caso se genera automáticamente al guardar."}
      />

      <div className="flex flex-col gap-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-base font-bold text-slate-900">Información del caso</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Tipo de conflicto o materia" required error={errors.tipoConflicto}>
              <select value={tipoConflicto} onChange={(e) => setTipoConflicto(e.target.value)} className={inputClass}>
                <option value="">Seleccionar...</option>
                {TIPOS_CONFLICTO.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </FormField>
            <FormField label="Estado del caso" required>
              <select value={estado} onChange={(e) => setEstado(e.target.value)} className={inputClass}>
                {ESTADOS_CASO.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </FormField>
            <FormField label="Descripción breve del motivo" required error={errors.descripcion} hint="Ej: Disputa por límites de terreno entre vecinos.">
              <textarea rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className={inputClass} />
            </FormField>
            <FormField label="Observaciones">
              <textarea rows={3} value={observaciones} onChange={(e) => setObservaciones(e.target.value)} className={inputClass} />
            </FormField>
            {pideResultado && (
              <div className="sm:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                <FormField
                  label="Resultado o acuerdo alcanzado"
                  required
                  error={errors.resultadoConclusion}
                  hint="Obligatorio porque el caso se está marcando como Concluido."
                >
                  <textarea rows={2} value={resultadoConclusion} onChange={(e) => setResultadoConclusion(e.target.value)} className={inputClass} />
                </FormField>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Partes involucradas</h2>
              <p className="text-xs text-slate-500">Se requiere al menos una parte para guardar el caso.</p>
            </div>
            <button onClick={addParte} className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50">
              <Plus size={14} /> Agregar parte
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {partes.map((p, idx) => (
              <div key={p.id} className="rounded-xl border border-slate-200 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
                    <User size={14} className="text-slate-400" /> Parte {idx + 1}
                  </p>
                  {partes.length > 1 && (
                    <button onClick={() => removeParte(idx)} className="flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700">
                      <Trash2 size={13} /> Quitar
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <FormField label="Nombres y apellidos" required error={errors[`parte-${idx}-nombre`]}>
                    <input value={p.nombre} onChange={(e) => updateParte(idx, "nombre", e.target.value)} className={inputClass} />
                  </FormField>
                  <FormField label="Rol en el caso" required>
                    <select value={p.rol} onChange={(e) => updateParte(idx, "rol", e.target.value)} className={inputClass}>
                      {ROLES_PARTE.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Tipo de documento" hint="Si corresponde">
                    <select value={p.tipoDoc} onChange={(e) => updateParte(idx, "tipoDoc", e.target.value)} className={inputClass}>
                      <option value="">No indicado</option>
                      {TIPO_DOCUMENTO.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Número de documento" hint="Si corresponde">
                    <input value={p.numDoc} onChange={(e) => updateParte(idx, "numDoc", e.target.value)} className={inputClass} disabled={!p.tipoDoc} />
                  </FormField>
                  <FormField label="Teléfono o medio de contacto" hint="Si se dispone">
                    <input value={p.telefono} onChange={(e) => updateParte(idx, "telefono", e.target.value)} className={inputClass} />
                  </FormField>
                  <FormField label="Dirección, comunidad o localidad" required error={errors[`parte-${idx}-direccion`]}>
                    <input value={p.direccion} onChange={(e) => updateParte(idx, "direccion", e.target.value)} className={inputClass} />
                  </FormField>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-end gap-3 pb-6">
          <button
            onClick={() => navigate(isEdit ? `/casos/${id}` : "/casos")}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Cancelar
          </button>
          <button onClick={submit} className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
            <Save size={17} /> {isEdit ? "Guardar cambios" : "Guardar caso"}
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
