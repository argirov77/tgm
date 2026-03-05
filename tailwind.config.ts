// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#06B6D4",
        darkBlue: "#0F172A",
        purple: "#4B0082",
        lightGray: "#F9F9F9",
        primary: "#3B82F6",
        "primary-hover": "#2563EB",
        "card-bg": "#111827",
        "text-main": "#E5E7EB",
        "text-muted-custom": "#9CA3AF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
