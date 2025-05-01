import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte()],
    build: {
        outDir: 'public/build',
        assetsDir: '',
        rollupOptions: {
            input: {
                app: './assets/app.js'
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true
            }
        }
    },
    optimizeDeps: {
        exclude: ['@sveltejs/vite-plugin-svelte']
    }
}); 