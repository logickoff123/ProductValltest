import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/actions/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBackground: '#1C1C1D',
        secondaryBackground: '#141415',
        testInfoText: '#718096'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
  