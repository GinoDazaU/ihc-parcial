import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function PageHeader({ title, description, back, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        {back && (
          <Link
            to={back}
            className="mb-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <ChevronLeft size={16} />
            Volver
          </Link>
        )}
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        {description && <p className="mt-1 max-w-2xl text-sm text-slate-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}
