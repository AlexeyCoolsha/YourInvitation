import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Теперь `@/` всегда указывает на папку `src`
      '@s': path.resolve(__dirname, './src/shared'), // Теперь `@s` всегда указывает на папку `src/shared`
      '@sa': path.resolve(__dirname, './src/shared/api'), // Теперь `@sa/` всегда указывает на папку `src/shared/api`
      '@sas': path.resolve(__dirname, './src/shared/assets'), // Теперь `@sa/` всегда указывает на папку `src/shared/assets`
      '@su': path.resolve(__dirname, './src/shared/ui'), // Теперь `@su/` всегда указывает на папку `src/shared/ui`
    },
  },
})