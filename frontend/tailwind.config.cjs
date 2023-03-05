const daisyui = require("daisyui");
const tailwindTypography = require("@tailwindcss/typography")

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [tailwindTypography, daisyui],
};

module.exports = config;
