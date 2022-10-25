import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/styles/_tokens.sass"
        `
      }
    }
  }
})
