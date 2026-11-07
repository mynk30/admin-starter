import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })

export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '')
  return {
      plugins: [react(), tailwindcss()],
      server: {
        port: Number(env.VITE_PORT) || 5173,
        strictPort: true
      }
  }
})