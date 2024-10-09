import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      webp: {
        quality: 50,
      },
      svgo: true, // Enable SVG optimization
    }),
  ],
  build: {
    target: 'esnext', // Target modern browsers
    minify: 'terser',  // Use Terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    cssCodeSplit: true, // Split CSS into separate files
  },
  // Uncomment the server proxy if needed
  // server: {
  //   proxy: {
  //     "/": {
  //       target: "http://localhost:5050/api",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
