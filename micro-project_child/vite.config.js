import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
export default defineConfig({
  plugins: [
    react(),
    qiankun('person-center', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
  resolve:{
    alias:{
      "@":resolve(__dirname, 'src')
    }
  },
  server:{
    port:5174,
  }
})
