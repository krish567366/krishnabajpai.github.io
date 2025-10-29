import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

const routes = [
  'about',
  'services',
  'case-studies',
  'contact',
  'real-estate-consortium',
  'consortium-application',
  'consortium-process',
  'tools',
  'case-studies/fintech-fraud-case-study',
  'case-studies/healthcare-automation-case-study',
  'case-studies/manufacturing-case-study',
  'case-studies/supply-chain-case-study'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '',
        },
        ...routes.map(route => ({
          src: 'index.html',
          dest: route,
          rename: 'index.html',
          transform: (content: string | Buffer) => {
            // Add prerender meta tag for Cloudflare
            return content.toString().replace(
              '</head>',
              '<meta name="prerender-status-code" content="200"></head>'
            );
          }
        }))
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
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
