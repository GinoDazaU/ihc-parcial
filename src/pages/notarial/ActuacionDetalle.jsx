import { useParams, Link, Navigate } from "react-router-dom";
import { Pencil, User, Phone, MapPin, IdCard, Paperclip } from "lucide-react";
import { useData } from "../../context/DataContext";
import { PageHeader } from "../../components/PageHeader";
import { StatusBadge, SyncBadge } from "../../components/StatusBadge";
import { formatLong, formatShort } from "../../utils/date";

export function ActuacionDetalle() {
  const { id } = useParams();
  const { actuaciones } = useData();
  const actuacion = actuaciones.find((a) => a.id === id);

  if (!actuacion) return <Navigate to="/notarial" replace />;

  return (
    <div>
      <PageHeader
        title={actuacion.codigo}
        back="/notarial"
        description={`${actuacion.tipo} · Solicitada el ${formatShort(actuacion.fechaSolicitud)}`}
        action={
          <div className="flex items-center gap-2">
            <StatusBadge estado={actuacion.estado} />
            <SyncBadge syncStatus={actuacion.syncStatus} />
            <Link
              to={`/notarial/${actuacion.id}/editar`}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              <Pencil size={16} /> Editar
            </Link>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Section title="Información de la actuación">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Tipo de actuación notarial" value={actuacion.tipo} />
              <Field label="Fecha de atención" value={actuacion.fechaAtencion ? formatLong(actuacion.fechaAtencion) : "Aún no definida"} muted={!actuacion.fechaAtencion} />
              <Field label="Descripción o asunto" value={actuacion.descripcion} full />
              <Field label="Observaciones" value={actuacion.observaciones || "Sin observaciones registradas."} full muted={!actuacion.observaciones} />
            </dl>
          </Section>

          <Section title="Resultado y documentación">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Resultado de la actuación"
                value={actuacion.resultado || "Pendiente de definir."}
                full
                muted={!actuacion.resultado}
              />
              <Field
                label="Fecha de entrega o conclusión"
                value={actuacion.fechaEntrega ? formatLong(actuacion.fechaEntrega) : "No definida"}
                muted={!actuacion.fechaEntrega}
              />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Documento</dt>
                <dd className="mt-0.5 text-sm text-slate-800">
                  {actuacion.documento ? (
                    <span className="flex items-center gap-1.5"><Paperclip size={14} className="text-slate-400" /> {actuacion.documento}</span>
                  ) : (
                    <span className="text-slate-400">No se adjuntó documento ni referencia.</span>
                  )}
                </dd>
              </div>
            </dl>
          </Section>
        </div>

        <Section title={`Personas participantes (${actuacion.personas.length})`}>
          <div className="flex flex-col gap-3">
            {actuacion.personas.map((p) => (
              <div key={p.id} className="rounded-xl border border-slate-200 p-3">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <p className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                    <User size={14} className="text-slate-400" /> {p.nombre}
                  </p>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                    {p.participacion}
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
  );
}

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-base font-bold text-slate-900">{title}</h2>
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
