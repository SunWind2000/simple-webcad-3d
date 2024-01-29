import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  build: {
    lib: {
      name: 'simple-webcad-3d',
      entry: './packages/index.ts',
      formats: ['es', 'umd']
    },
    outDir: 'lib'
  }
})
