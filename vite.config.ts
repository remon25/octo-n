import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: 'esnext', // Target modern browsers
    minify: 'esbuild',  // Use Terser for minification
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
