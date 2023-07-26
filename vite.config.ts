import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts(),
  ],
  build: {
    lib: {
      entry: './index.ts',
      name: 'UnityRichTextConverter',
      formats: ['es', 'cjs'],
    },
  },
})
