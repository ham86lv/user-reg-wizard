import {resolve} from 'path';
import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import terser from '@rollup/plugin-terser';
import viteCompression from 'vite-plugin-compression';

const base = '/';
const root: string = resolve(__dirname, 'src');
const outDir: string = resolve(__dirname, 'dist');
const publicDir: string = resolve(__dirname, 'public');

export default defineConfig({
  resolve: {
    alias: {
      '@': root,
    },
  },
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    allowedHosts: ['localhost'],
  },
  base,
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      },
      output: {
        manualChunks(id: string): string | undefined {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0];
          }
        },
      },
      plugins: [
        terser({
          compress: {
            unused: true,
            dead_code: true,
            drop_console: true,
            drop_debugger: true,
            passes: 2,
          },
          format: {
            comments: false,
          },
        }),
      ],
    },
    chunkSizeWarningLimit: 500,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts',
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});
