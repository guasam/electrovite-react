import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Project root directory path.
const rootDir = process.cwd();

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
    resolve: {
      alias: {
        $src: path.join(rootDir, 'src'),
        $main: path.join(rootDir, 'src/main'),
        $renderer: path.join(rootDir, 'src/renderer'),
        $assets: path.join(rootDir, 'assets'),
        $components: path.join(rootDir, 'src/renderer/components'),
        $styles: path.join(rootDir, 'src/renderer/styles'),
      },
    },
  };
});
