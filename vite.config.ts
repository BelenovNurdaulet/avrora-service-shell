import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        catalog: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: {
        react: {  requiredVersion: "^19.2.0" },
        "react-dom": { requiredVersion: "^19.2.0" },
      },
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  }
})
