import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate'
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animate, daisyui
  ],
} satisfies Config;

