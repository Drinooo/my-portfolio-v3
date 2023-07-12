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
      job: ["28px"],
      company: ["24px"],
      h1: ["150px", {lineHeight: "auto"}],
      h2: ["100px", {lineHeight: "auto"}],
     'sm-h2': ["50px", {lineHeight: "auto"}],

      h3: ["50px", {lineHeight: "auto"}],
      'sm-h3': ["30px", {lineHeight: "auto"}],

      h4: ["30px", {lineHeight: "auto"}],
      'sm-h4': ["26px", {lineHeight: "auto"}],

      body1: ["24px", {lineHeight: "auto"}],
      'sm-body1': ["18px", {lineHeight: "auto"}],

      body2: ["20px", {lineHeight: "auto"}],
      'sm-body2': ["18px", {lineHeight: "auto"}],
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
