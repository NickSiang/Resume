import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    // 只在開發模式下啟用 vueDevTools
    process.env.NODE_ENV === 'development' && vueDevTools(),
  ].filter(Boolean), // 過濾掉 false 和 undefined
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: "/Resume/",
})
