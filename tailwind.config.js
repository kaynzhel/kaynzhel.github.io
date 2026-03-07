/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#B9A0CC",
        light: "#f5f5f5",
        primary: "#3A243B",
        primaryLight1: "#DBD7DB",
        primaryLight2: "#B9AFB9",
        primaryLight3: "#978A97",
        primaryLight4: "#776677",
        primaryLight5: "#584458",
        primaryComplementGreen: "#203f24",
        primaryComplementDarkOrange: "#472918",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
}
