import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resource-demo-react/', // GitHub Pages 基础路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001, // 使用不同的端口，避免与 demo-react 冲突
    open: true,
    fs: {
      allow: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../design-system'),
      ],
    },
  },
  build: {
    outDir: 'docs', // GitHub Pages 输出目录
    sourcemap: true,
    // 确保构建后的资源路径正确
    assetsDir: 'static',
  },
})

