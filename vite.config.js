import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress", // Utiliser Brotli (meilleure compression)
      threshold: 1024, // Compresser les fichiers > 1KB
    }),
  ],
});
