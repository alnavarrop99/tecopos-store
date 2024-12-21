import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import 'class-variance-authority'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'components',
      fileName: 'index',
    },
    outDir: resolve(__dirname, 'dist', 'vite'),
    rollupOptions: {
      external: ['react', 'react-dom', 'dayjs'],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
          "dayjs": "Dayjs",
        }
      }
    }
  },
  plugins: [react({
    babel: {
      plugins: [
          ["babel-plugin-react-compiler", { target: '19' }],
      ],
    }
  })],
  css: {
    postcss: {}
  }
})
