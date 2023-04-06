import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

console.log(">>",loadEnv("Development", process.cwd()).VITE_PORT_PREVIEW)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: loadEnv("Development", process.cwd()).VITE_PORT_DEV ,
  },
  preview:{
    host: true,
    port: loadEnv("Production", process.cwd()).VITE_PORT_PREVIEW ,
  }
})
