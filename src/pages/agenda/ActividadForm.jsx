import { useState } from "react";
import { useParams, useNavigate, Navigate, useSearchParams } from "react-router-dom";
import { Save } from "lucide-react";
import { useData } from "../../context/DataContext";
import { useToast } from "../../context/ToastContext";
import { PageHeader } from "../../components/PageHeader";
import { FormField, inputClass } from "../../components/FormField";
import { ChangeSummaryDialog } from "../../components/ChangeSummaryDialog";
import { ESTADOS_ACTIVIDAD, CATEGORIAS_ACTIVIDAD } from "../../data/constants";
import { todayISO } from "../../utils/date";
import { buildDiff } from "../../utils/diff";

const ACTIVIDAD_LABELS = {
  titulo: "Título de la actividad",
  fecha: "Fecha",
  horaInicio: "Hora de inicio",
  horaTermino: "Hora de término",
  lugar: "Lugar o comunidad",
  descripcion: "Descripción o motivo",
  estado: "Estado",
  categoria: "Categoría",
};

export function ActividadForm() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { actividades, addActividad, updateActividad } = useData();
  const { showToast } = useToast();
  const existente = isEdit ? actividades.find((a) => a.id === id) : null;

  if (isEdit && !existente) return <Navigate to="/agenda" replace />;

  const [titulo, setTitulo] = useState(existente?.titulo || "");
  const [fecha, setFecha] = useState(existente?.fecha || searchParams.get("fecha") || todayISO());
  const [horaInicio, setHoraInicio] = useState(existente?.horaInicio || "");
  const [horaTermino, setHoraTermino] = useState(existente?.horaTermino || "");
  const [lugar, setLugar] = useState(existente?.lugar || "");
  const [descripcion, setDescripcion] = useState(existente?.descripcion || "");
  const [estado, setEstado] = useState(existente?.estado || "Programada");
  const [categoria, setCategoria] = useState(existente?.categoria || "Reunión");
  const [errors, setErrors] = useState({});
  const [changes, setChanges] = useState([]);
  const [pendingData, setPendingData] = useState(null);

  const validate = () => {
    const e = {};
    if (!titulo.trim()) e.titulo = "Indique el título o nombre de la actividad.";
    if (!fecha) e.fecha = "Seleccione una fecha.";
    if (!lugar.trim()) e.lugar = "Indique el lugar o comunidad, necesario para planificar el desplazamiento.";
    if (horaInicio && horaTermino && horaTermino <= horaInicio) {
      e.horaTermino = "La hora de término debe ser posterior a la hora de inicio.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const data = {
      titulo: titulo.trim(),
      fecha,
      horaInicio,
      horaTermino,
      lugar: lugar.trim(),
      descripcion: descripcion.trim(),
      estado,
      categoria,
    };
    if (isEdit) {
      const fieldChanges = buildDiff(existente, data, ACTIVIDAD_LABELS);
      if (fieldChanges.length === 0) {
        showToast("No se detectaron cambios en la actividad.", "info");
        navigate(`/agenda/dia/${existente.fecha}`);
        return;
      }
      setChanges(fieldChanges);
      setPendingData(data);
      return;
    }
    addActividad(data);
    navigate(`/agenda/dia/${fecha}`);
  };

  const confirmarGuardado = () => {
    updateActividad(existente.id, pendingData);
    const fechaFinal = pendingData.fecha;
    setPendingData(null);
    navigate(`/agenda/dia/${fechaFinal}`);
  };

  return (
    <div>
      <PageHeader
        title={isEdit ? "Editar actividad" : "Nueva actividad"}
        back={isEdit ? `/agenda/dia/${existente.fecha}` : "/agenda"}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Título o nombre de la actividad" required error={errors.titulo}>
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} className={inputClass} placeholder="Ej: Audiencia de conciliación" />
          </FormField>
          <FormField label="Categoría" required hint="Define el color y el ícono en el calendario">
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className={inputClass}>
              {Object.keys(CATEGORIAS_ACTIVIDAD).map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </FormField>
          <FormField label="Fecha" required error={errors.fecha}>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Estado" required>
            <select value={estado} onChange={(e) => setEstado(e.target.value)} className={inputClass}>
              {ESTADOS_ACTIVIDAD.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </FormField>
          <FormField label="Hora de inicio" hint="Deje en blanco si no requiere horario fijo">
            <input type="time" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Hora de término" error={errors.horaTermino}>
            <input type="time" value={horaTermino} onChange={(e) => setHoraTermino(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Lugar o comunidad" required error={errors.lugar}>
            <input value={lugar} onChange={(e) => setLugar(e.target.value)} className={inputClass} placeholder="Ej: Comunidad Huayllabamba" />
          </FormField>
          <FormField label="Descripción o motivo">
            <textarea rows={2} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className={inputClass} />
          </FormField>
        </div>
      </section>

      <div className="mt-6 flex justify-end gap-3 pb-6">
        <button
          onClick={() => navigate(isEdit ? `/agenda/dia/${existente.fecha}` : "/agenda")}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          Cancelar
        </button>
        <button onClick={submit} className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
          <Save size={17} /> {isEdit ? "Guardar cambios" : "Guardar actividad"}
        </button>
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
