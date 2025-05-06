import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            '$lib': path.resolve('./assets/lib')
        }
    },
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
        cors: true,
        strictPort: true,
        port: 5173,
        origin: 'http://localhost:5173',
        hmr: {
            host: 'localhost',
        },
        fs: {
            allow: ['..']
        },
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