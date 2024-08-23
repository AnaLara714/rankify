/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// const aktifo = require("./public/F");

// export default {
module.exports = withMT({
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      EBGaramond: "EB Garamond",
      Aktifo: "FSP DEMO - Aktifo A Bold",
    },
  },
  plugins: [],
});
