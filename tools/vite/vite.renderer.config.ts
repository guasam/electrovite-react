import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Renderer process - Vite configuration
 */
export default defineConfig(({ mode }) => {
  process.env.NODE_ENV = mode; // Force use mode (fixes HMR for vite plugins)

  return {
    plugins: [react()],
    server: {
      hmr: true,
    },
  };
});
