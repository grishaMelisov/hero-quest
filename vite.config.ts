import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/hero-quest/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
  plugins: [
    svgr({
      svgrOptions: {
        svgo: true,
        svgoConfig: {
          plugins: [{ name: 'convertColors', params: { currentColor: true } }],
        },
      },
    }),
    react(),
    tailwindcss(),
  ],
}));
