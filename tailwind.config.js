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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#24243b",
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
  },
  plugins: [],
}
