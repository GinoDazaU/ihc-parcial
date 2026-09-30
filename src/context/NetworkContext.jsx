import { createContext, useContext, useState } from "react";

// Simula el estado de conectividad real del caso: la jueza puede pasar horas
// sin Internet y debe poder seguir trabajando. Como este prototipo no tiene
// backend, este interruptor deja DEMOSTRAR el flujo completo offline -> online -> sincronizar
// en vez de solo describirlo.
const NetworkContext = createContext(null);

export function NetworkProvider({ children }) {
  const [online, setOnline] = useState(true);

  const toggleOnline = () => setOnline((prev) => !prev);

  return (
    <NetworkContext.Provider value={{ online, toggleOnline }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const ctx = useContext(NetworkContext);
  if (!ctx) throw new Error("useNetwork debe usarse dentro de NetworkProvider");
  return ctx;
}
