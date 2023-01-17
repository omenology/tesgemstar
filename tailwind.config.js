/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        main: "#1E67AF",
        dcdc: "#DCDCDC",
        blkfnt: "#323A46",
        mainbg: "#F5F6FA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
