import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Permite servir el prototipo a través del túnel de Cloudflare
    // (subdominio *.trycloudflare.com, cambia en cada ejecución).
    allowedHosts: true,
    // El proyecto vive en /mnt/c (disco de Windows montado en WSL): los eventos
    // nativos de inotify no llegan de forma confiable ahí, así que sin polling
    // el HMR no detecta cambios de archivo y hay que reiniciar el server a mano.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
