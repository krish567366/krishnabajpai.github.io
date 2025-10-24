import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        // Ensure content hash in file names for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable asset optimization
    assetsInlineLimit: 4096, // Inline assets < 4kb
    cssCodeSplit: false, // Disable CSS code splitting to inline critical CSS
    sourcemap: false, // Disable sourcemaps in production
    // Enable asset compression
    reportCompressedSize: false, // Disable compression reporting for faster builds
    target: 'esnext', // Modern browsers only for smaller bundles
    minify: 'terser',
    terserOptions: {
      compress: {
        ecma: 2020,
        pure_getters: true,
        passes: 2,
      }
    },
  },
}));
