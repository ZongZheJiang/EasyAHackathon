import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
    server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Your backend server address
        changeOrigin: true,
        // Optional: rewrite path, but not needed if backend routes also start with /api
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
});