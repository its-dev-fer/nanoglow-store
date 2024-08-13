import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'es-MX',
        name: 'Nanoglow',
        short_name: 'Nanoglow',
        description: 'Proyecto Nanoglow',
        theme_color: '#ffffff', //Depende del color principal del proyecto
        background_color: '#ffffff', //Depende del color establecido en el proyecto
        // icons: [],
      }
    })
  ],
})
