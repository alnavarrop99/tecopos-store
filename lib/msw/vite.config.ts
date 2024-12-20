import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'msw',
      fileName: 'index',
      formats: ['es']
    },
    outDir: resolve(__dirname, 'dist', 'vite')
  }
})
