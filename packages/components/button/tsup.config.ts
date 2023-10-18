import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  minify: true,
  target: 'es2022',
  format: ['cjs', 'esm'],
  banner: { js: '"use client";' },
})