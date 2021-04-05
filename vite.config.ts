import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//vite.config.ts
const { resolve } = require('path')
//引入resole
//如果报错 请 yarn add @types/node -D

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
      '/@components': resolve(__dirname, './src/components')
    }
  }
})
