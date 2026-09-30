import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Pencil, Plus, User, Phone, MapPin, IdCard, CalendarClock,
  CheckCircle2, Paperclip, ArrowRight, X,
} from "lucide-react";
import { useData } from "../../context/DataContext";
import { PageHeader } from "../../components/PageHeader";
import { StatusBadge, SyncBadge } from "../../components/StatusBadge";
import { FormField, inputClass } from "../../components/FormField";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { formatLong, formatShort, isPast, todayISO } from "../../utils/date";

export function CasoDetalle() {
  const { id } = useParams();
  const { casos, updateCaso } = useData();
  const caso = casos.find((c) => c.id === id);

  const [showAdd, setShowAdd] = useState(false);
  const [showConcluir, setShowConcluir] = useState(false);
  const [confirmConcluir, setConfirmConcluir] = useState(false);
  const [resultadoPendiente, setResultadoPendiente] = useState("");

  if (!caso) return <Navigate to="/casos" replace />;

  return (
    <div>
      <PageHeader
        title={caso.codigo}
        back="/casos"
        description={`${caso.tipoConflicto} · Registrado el ${formatShort(caso.fechaRegistro)}`}
        action={
          <div className="flex items-center gap-2">
            <StatusBadge estado={caso.estado} />
            <SyncBadge syncStatus={caso.syncStatus} />
            <Link
              to={`/casos/${caso.id}/editar`}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              <Pencil size={16} /> Editar
            </Link>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Section title="Información del caso">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Tipo de conflicto o materia" value={caso.tipoConflicto} />
              <Field label="Fecha de registro" value={formatLong(caso.fechaRegistro)} />
              <Field label="Descripción del motivo" value={caso.descripcion} full />
              <Field label="Observaciones" value={caso.observaciones || "Sin observaciones registradas."} full muted={!caso.observaciones} />
            </dl>
          </Section>

          <Section
            title="Seguimiento del caso"
            action={
              caso.estado !== "Concluido" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowAdd((v) => !v)}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    <Plus size={14} /> Agregar avance
                  </button>
                  <button
                    onClick={() => setShowConcluir((v) => !v)}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <CheckCircle2 size={14} /> Marcar concluido
                  </button>
                </div>
              )
            }
          >
            {showAdd && (
              <AgregarAvanceForm
                onCancel={() => setShowAdd(false)}
                onSave={(entry) => {
                  updateCaso(caso.id, { seguimiento: [...caso.seguimiento, entry] });
                  setShowAdd(false);
                }}
              />
            )}

            {showConcluir && (
              <ConcluirForm
                onCancel={() => setShowConcluir(false)}
                onSave={(resultado) => {
                  setResultadoPendiente(resultado);
                  setConfirmConcluir(true);
                }}
              />
            )}

            <ConfirmDialog
              open={confirmConcluir}
              title="¿Marcar este caso como concluido?"
              description="El caso pasará a estado 'Concluido' y se registrará el resultado en el seguimiento. Esta acción se puede volver a editar después desde 'Editar caso'."
              confirmLabel="Sí, marcar concluido"
              tone="primary"
              onCancel={() => setConfirmConcluir(false)}
              onConfirm={() => {
                updateCaso(caso.id, {
                  estado: "Concluido",
                  seguimiento: [
                    ...caso.seguimiento,
                    {
                      id: Math.random().toString(36).slice(2, 9),
                      fecha: todayISO(),
                      descripcion: "Caso concluido.",
                      proximaFecha: "",
                      resultado: resultadoPendiente,
                      documento: "",
                    },
                  ],
                });
                setConfirmConcluir(false);
                setShowConcluir(false);
              }}
            />

            {caso.seguimiento.length === 0 ? (
              <p className="py-6 text-center text-sm text-slate-400">Aún no hay avances registrados para este caso.</p>
            ) : (
              <ol className="flex flex-col gap-4 border-l-2 border-slate-200 pl-4">
                {caso.seguimiento.map((s) => (
                  <li key={s.id} className="relative">
                    <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{formatLong(s.fecha)}</p>
                    <p className="mt-0.5 text-sm text-slate-800">{s.descripcion}</p>
                    {s.resultado && (
                      <p className="mt-1 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                        <strong>Resultado:</strong> {s.resultado}
                      </p>
                    )}
                    {s.proximaFecha && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                        <CalendarClock size={13} /> Próxima atención: {formatShort(s.proximaFecha)}
                        {isPast(s.proximaFecha) && " (vencida)"}
                      </p>
                    )}
                    {s.documento && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <Paperclip size={13} /> {s.documento}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </Section>
        </div>

        <div className="flex flex-col gap-4">
          <Section title={`Partes involucradas (${caso.partes.length})`}>
            <div className="flex flex-col gap-3">
              {caso.partes.map((p) => (
                <div key={p.id} className="rounded-xl border border-slate-200 p-3">
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <p className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                      <User size={14} className="text-slate-400" /> {p.nombre}
                    </p>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                      {p.rol}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-slate-500">
                    {p.numDoc && (
                      <span className="flex items-center gap-1.5"><IdCard size={12} /> {p.tipoDoc} {p.numDoc}</span>
                    )}
                    {p.telefono && (
                      <span className="flex items-center gap-1.5"><Phone size={12} /> {p.telefono}</span>
                    )}
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {p.direccion}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, action, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function Field({ label, value, full, muted }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className={`mt-0.5 text-sm ${muted ? "text-slate-400" : "text-slate-800"}`}>{value}</dd>
    </div>
  );
}

function AgregarAvanceForm({ onCancel, onSave }) {
  const [fecha, setFecha] = useState(todayISO());
  const [descripcion, setDescripcion] = useState("");
  const [proximaFecha, setProximaFecha] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!descripcion.trim()) {
      setError("Describa brevemente el avance antes de guardar.");
      return;
    }
    onSave({
      id: Math.random().toString(36).slice(2, 9),
      fecha,
      descripcion: descripcion.trim(),
      proximaFecha,
      resultado: "",
      documento: "",
    });
  };

  return (
    <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50/40 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-bold text-slate-800">Nuevo avance</p>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <FormField label="Fecha de la actuación" required>
          <input type="date" max={todayISO()} value={fecha} onChange={(e) => setFecha(e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Próxima fecha de atención" hint="Deje en blanco si no aplica">
          <input type="date" min={todayISO()} value={proximaFecha} onChange={(e) => setProximaFecha(e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Descripción del avance" required error={error} hint="Ej: Se citó a las partes para audiencia de conciliación.">
          <textarea rows={2} value={descripcion} onChange={(e) => { setDescripcion(e.target.value); setError(""); }} className={inputClass} />
        </FormField>
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <button onClick={onCancel} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-white">Cancelar</button>
        <button onClick={submit} className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800">
          Guardar avance <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

function ConcluirForm({ onCancel, onSave }) {
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!resultado.trim()) {
      setError("El resultado o acuerdo es obligatorio para concluir el caso.");
      return;
    }
    onSave(resultado.trim());
  };

  return (
    <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-bold text-slate-800">Concluir caso</p>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
      </div>
      <FormField label="Resultado o acuerdo alcanzado" required error={error} hint="Este campo es obligatorio porque el caso pasará a estado Concluido.">
        <textarea rows={2} value={resultado} onChange={(e) => { setResultado(e.target.value); setError(""); }} className={inputClass} />
      </FormField>
      <div className="mt-3 flex justify-end gap-2">
        <button onClick={onCancel} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-white">Cancelar</button>
        <button onClick={submit} className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">
          Continuar <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
