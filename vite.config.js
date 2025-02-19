import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import ViteImagemin from "vite-plugin-imagemin";

// Configuration de Vite
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithms: [
        { algorithm: "brotliCompress", ext: ".br", threshold: 1024 },
        { algorithm: "gzip", ext: ".gz", threshold: 1024 },
      ],
    }),
    ViteImagemin({
      // Configuration pour optimiser les images
      gifsicle: {
        optimizationLevel: 3, // Niveau d'optimisation pour les images GIF
      },
      mozjpeg: {
        quality: 75, // Qualité pour les images JPEG
      },
      optipng: {
        optimizationLevel: 5, // Niveau d'optimisation pour les images PNG
      },
      svgo: {
        plugins: [
          { removeViewBox: false }, // Pour ne pas supprimer le ViewBox des images SVG
        ],
      },
      pngquant: {
        quality: [0.6, 0.8], // Plage de qualité pour les PNG
      },
      webp: {
        quality: 75, // Qualité des images WebP
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
