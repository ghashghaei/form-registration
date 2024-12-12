import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Simulates a browser environment
    globals: true, // Enables global `describe` and `it` without imports
  },
});
