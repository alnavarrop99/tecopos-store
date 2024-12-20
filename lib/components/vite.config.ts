import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'components',
      fileName: 'index',
      formats: ['es']
    },
    outDir: resolve(__dirname, 'dist', "vite"),
    rollupOptions: {
      external: ['react', 'react-dom', 'clsx', 'tailwind-merge', 'dayjs'],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
          "clsx": "clsx",
          "tailwind-merge": "tw",
          "dayjs": "dayjs"
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
})
