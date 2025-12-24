import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment - update 'wild-rose-site' to your repo name
  base: process.env.NODE_ENV === 'production' ? '/wild-rose-site/' : '/',
})
