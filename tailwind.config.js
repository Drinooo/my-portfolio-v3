/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Teko", "sans-serif"],
      body: ["Alumni Sans", "sans-serif"],
    },
    colors: {
      black: "#151516",
      white: "#FFF",
      transparent: "#FFF0",
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontSize: {
      nav: ["24px", { lineHeight: "auto" }],
      button: ["18px", {lineHeight: "auto"}],
      footer: ["20px", {lineHeight: "auto"}],
      h1: ["150px", {lineHeight: "auto"}],
      h2: ["70px", {lineHeight: "auto"}],
      h3: ["50px", {lineHeight: "auto"}],
      body1: ["24px"],
      name: ["80px"],
      'sm-name': ["60px"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    }
  },
  plugins: [],
});
