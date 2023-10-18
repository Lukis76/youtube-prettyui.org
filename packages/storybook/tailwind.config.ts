import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    '../components/*/src/**/*.{js,jsx,ts,tsx}',
    '../components/*/stories/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  plugins: [],
}
export default config