import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/search': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/ward': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/voter': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/summary': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/ward-summaries': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      }
    }
  }
});