/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        silverpink: "#c1a5a9",
        charmpink: "#f08cae",
        plum: "#9a4c95",
        englishviolet: "#4d2d52",
        darkpurple: "#1d1a31",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
