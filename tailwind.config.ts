import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./app/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./theme.config.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        white: "var(--white-color)",
        blue: "var(--blue-color)",
        dark: "var(--dark-color)",
        black: "var(--black-color)",
        gray: "var(--gray-color)",
        lightBg: "var(--light-bg-color)",
        error: "var(--error-color)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--container-padding-default)",
          sm: "var(--container-padding-sm)",
          md: "var(--container-padding-md)",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
} satisfies Config;
