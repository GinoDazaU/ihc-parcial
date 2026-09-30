import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { seedCasos, seedActuaciones, seedActividades, uid } from "../data/seed";
import { useNetwork } from "./NetworkContext";
import { useToast } from "./ToastContext";

const DataContext = createContext(null);
const STORAGE_KEY = "justicia-cercana:datos";

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // localStorage no disponible (modo privado, etc.) -> seguimos con datos de ejemplo
  }
  return { casos: seedCasos, actuaciones: seedActuaciones, actividades: seedActividades, lastSyncAt: null };
}

function pad(n) {
  return String(n).length < 4 ? String(n).padStart(4, "0") : String(n);
}

export function DataProvider({ children }) {
  const [state, setState] = useState(loadInitial);
  const { online } = useNetwork();
  const { showToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Si falla el guardado local, no interrumpimos el flujo: el estado
      // sigue vivo en memoria durante la sesión.
    }
  }, [state]);

  const now = () => new Date().toISOString();
  const syncStatusForNew = () => (online ? "sincronizado" : "pendiente");
  // Cuando el registro queda sincronizado de entrada (se guardó estando en línea),
  // ese mismo guardado cuenta como la sincronización más reciente.
  const lastSyncPatch = () => (online ? { lastSyncAt: now() } : {});

  // ---------- Casos ----------
  const nextCodigoCaso = () =>
    `CASO-2026-${pad(state.casos.length + 1)}`;

  const addCaso = (data) => {
    const caso = {
      ...data,
      id: uid(),
      codigo: nextCodigoCaso(),
      fechaRegistro: new Date().toISOString().slice(0, 10),
      syncStatus: syncStatusForNew(),
      updatedAt: now(),
    };
    setState((s) => ({ ...s, casos: [caso, ...s.casos], ...lastSyncPatch() }));
    showToast(
      online
        ? `Caso ${caso.codigo} guardado y sincronizado.`
        : `Caso ${caso.codigo} guardado en este dispositivo. Pendiente de sincronización.`,
      online ? "success" : "warning"
    );
    return caso;
  };

  const updateCaso = (id, data) => {
    let codigo = "";
    setState((s) => ({
      ...s,
      casos: s.casos.map((c) => {
        if (c.id !== id) return c;
        codigo = c.codigo;
        return { ...c, ...data, syncStatus: syncStatusForNew(), updatedAt: now() };
      }),
      ...lastSyncPatch(),
    }));
    showToast(
      online
        ? `Caso ${codigo} actualizado y sincronizado.`
        : `Caso ${codigo} actualizado en este dispositivo. Pendiente de sincronización.`,
      online ? "success" : "warning"
    );
  };

  // ---------- Actuaciones notariales ----------
  const nextCodigoActuacion = () =>
    `NOT-2026-${pad(state.actuaciones.length + 1)}`;

  const addActuacion = (data) => {
    const actuacion = {
      ...data,
      id: uid(),
      codigo: nextCodigoActuacion(),
      fechaSolicitud: data.fechaSolicitud || new Date().toISOString().slice(0, 10),
      syncStatus: syncStatusForNew(),
      updatedAt: now(),
    };
    setState((s) => ({ ...s, actuaciones: [actuacion, ...s.actuaciones], ...lastSyncPatch() }));
    showToast(
      online
        ? `Actuación ${actuacion.codigo} guardada y sincronizada.`
        : `Actuación ${actuacion.codigo} guardada en este dispositivo. Pendiente de sincronización.`,
      online ? "success" : "warning"
    );
    return actuacion;
  };

  const updateActuacion = (id, data) => {
    let codigo = "";
    setState((s) => ({
      ...s,
      actuaciones: s.actuaciones.map((a) => {
        if (a.id !== id) return a;
        codigo = a.codigo;
        return { ...a, ...data, syncStatus: syncStatusForNew(), updatedAt: now() };
      }),
      ...lastSyncPatch(),
    }));
    showToast(
      online
        ? `Actuación ${codigo} actualizada y sincronizada.`
        : `Actuación ${codigo} actualizada en este dispositivo. Pendiente de sincronización.`,
      online ? "success" : "warning"
    );
  };

  // ---------- Agenda ----------
  const addActividad = (data) => {
    const actividad = {
      ...data,
      id: uid(),
      syncStatus: syncStatusForNew(),
      updatedAt: now(),
    };
    setState((s) => ({ ...s, actividades: [actividad, ...s.actividades], ...lastSyncPatch() }));
    showToast(
      online
        ? "Actividad guardada y sincronizada."
        : "Actividad guardada en este dispositivo. Pendiente de sincronización.",
      online ? "success" : "warning"
    );
    return actividad;
  };

  const updateActividad = (id, data) => {
    setState((s) => ({
      ...s,
      actividades: s.actividades.map((a) =>
        a.id === id ? { ...a, ...data, syncStatus: syncStatusForNew(), updatedAt: now() } : a
      ),
      ...lastSyncPatch(),
    }));
    showToast(
      online
        ? "Actividad actualizada y sincronizada."
        : "Actividad actualizada en este dispositivo. Pendiente de sincronización.",
      online ? "success" : "warning"
    );
  };

  // ---------- Sincronización ----------
  const pendingCount = useMemo(
    () =>
      [...state.casos, ...state.actuaciones, ...state.actividades].filter(
        (r) => r.syncStatus === "pendiente"
      ).length,
    [state]
  );

  const runSync = (trigger) => {
    if (!online || pendingCount === 0) return;
    const count = pendingCount;
    setState((s) => ({
      ...s,
      casos: s.casos.map((c) => (c.syncStatus === "pendiente" ? { ...c, syncStatus: "sincronizado" } : c)),
      actuaciones: s.actuaciones.map((a) =>
        a.syncStatus === "pendiente" ? { ...a, syncStatus: "sincronizado" } : a
      ),
      actividades: s.actividades.map((a) =>
        a.syncStatus === "pendiente" ? { ...a, syncStatus: "sincronizado" } : a
      ),
      lastSyncAt: now(),
    }));
    const registros = `${count} registro${count === 1 ? "" : "s"}`;
    showToast(
      trigger === "auto"
        ? `Conexión recuperada: ${registros} sincronizado${count === 1 ? "" : "s"} automáticamente.`
        : `${registros} sincronizado${count === 1 ? "" : "s"} correctamente.`,
      "success"
    );
  };

  // Sincronización automática: apenas vuelve la conexión, si hay pendientes,
  // se sincronizan solos. El botón manual queda como respaldo y para que el
  // usuario tenga control explícito de repetir el intento cuando quiera.
  const wasOnline = useRef(online);
  useEffect(() => {
    if (online && !wasOnline.current && pendingCount > 0) {
      runSync("auto");
    }
    wasOnline.current = online;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online]);

  // También sincroniza pendientes que ya existían al abrir la app (p. ej. se
  // cerró estando offline) si arranca con conexión disponible.
  const didInitialSync = useRef(false);
  useEffect(() => {
    if (!didInitialSync.current && online && pendingCount > 0) {
      runSync("auto");
    }
    didInitialSync.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const syncPendientes = () => {
    if (!online) {
      showToast("No hay conexión disponible. Vuelve a intentarlo cuando tengas Internet.", "warning");
      return;
    }
    if (pendingCount === 0) {
      showToast("No hay registros pendientes por sincronizar.", "info");
      return;
    }
    runSync("manual");
  };

  const value = {
    casos: state.casos,
    actuaciones: state.actuaciones,
    actividades: state.actividades,
    addCaso,
    updateCaso,
    addActuacion,
    updateActuacion,
    addActividad,
    updateActividad,
    pendingCount,
    lastSyncAt: state.lastSyncAt,
    syncPendientes,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData debe usarse dentro de DataProvider");
  return ctx;
}
