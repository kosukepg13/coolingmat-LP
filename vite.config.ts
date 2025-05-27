import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  root: 'project',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: 'assets'
  }
});