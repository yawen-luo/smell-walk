import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/smell-walk/',
  plugins: [react()],
  server: {
    host: true,
  },
})
