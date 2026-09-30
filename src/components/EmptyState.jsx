// Estado vacío que guía en vez de mostrar una pantalla en blanco:
// reduce la ansiedad del primer uso para un usuario de baja afinidad digital.
export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      {Icon && (
        <div className="mb-1 rounded-full bg-blue-50 p-4 text-blue-600">
          <Icon size={32} strokeWidth={1.75} />
        </div>
      )}
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="max-w-sm text-sm text-slate-500">{description}</p>
      {action}
    </div>
  );
}
