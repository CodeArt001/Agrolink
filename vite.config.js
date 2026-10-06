import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Keep any other plugins/options your Agrolink project already has.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/agrolink/' : '/',
  plugins: [react(), tailwindcss()],
}))