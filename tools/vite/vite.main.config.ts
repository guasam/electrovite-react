import { defineConfig } from 'vite';

/**
 * Main process - Vite configuration
 */
export default defineConfig({
  build: {
    rollupOptions: {
      external: [], // Provide native modules as externals for eg (serialport, sqlite3)
    }
  }
});
