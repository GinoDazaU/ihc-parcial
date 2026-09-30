import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { CasosList } from "./pages/casos/CasosList";
import { CasoDetalle } from "./pages/casos/CasoDetalle";
import { CasoForm } from "./pages/casos/CasoForm";
import { ActuacionesList } from "./pages/notarial/ActuacionesList";
import { ActuacionDetalle } from "./pages/notarial/ActuacionDetalle";
import { ActuacionForm } from "./pages/notarial/ActuacionForm";
import { AgendaMes } from "./pages/agenda/AgendaMes";
import { AgendaDia } from "./pages/agenda/AgendaDia";
import { ActividadForm } from "./pages/agenda/ActividadForm";
import { Justificacion } from "./pages/Justificacion";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/casos" element={<CasosList />} />
        <Route path="/casos/nuevo" element={<CasoForm />} />
        <Route path="/casos/:id" element={<CasoDetalle />} />
        <Route path="/casos/:id/editar" element={<CasoForm />} />

        <Route path="/notarial" element={<ActuacionesList />} />
        <Route path="/notarial/nuevo" element={<ActuacionForm />} />
        <Route path="/notarial/:id" element={<ActuacionDetalle />} />
        <Route path="/notarial/:id/editar" element={<ActuacionForm />} />

        <Route path="/agenda" element={<AgendaMes />} />
        <Route path="/agenda/nueva" element={<ActividadForm />} />
        <Route path="/agenda/dia/:fecha" element={<AgendaDia />} />
        <Route path="/agenda/:id/editar" element={<ActividadForm />} />

        <Route path="/justificacion" element={<Justificacion />} />
      </Route>
    </Routes>
  );
}
