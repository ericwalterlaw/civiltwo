import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// vite.config.js
export default defineConfig({
  base: '/', 
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html' // Ensure this points to your entry HTML file
      }
    }
  }
})