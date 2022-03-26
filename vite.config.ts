import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // css: {
  //   preprocessorOptions: {
  //     scss: { charset: false, additionalData: `@import "./src/assets/styles/mixins.scss";` },
  //     css: { charset: false },
  //   },
  // },
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/biketag.js`,
        chunkFileNames: `assets/vendor.js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  // root: './public',
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    port: 8080,
  },
})
