import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BuscarPerfil-github/', // Substitua pelo nome do repositório
});
