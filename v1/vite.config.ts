import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base relative : le build fonctionne aussi bien ouvert depuis un sous-chemin
// (GitHub Pages, Netlify, dossier local) que depuis la racine d'un domaine.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173, open: true },
});
