import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@storage': path.resolve(__dirname, 'src/storage'),
            '@renderers': path.resolve(__dirname, 'src/renderers'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
});