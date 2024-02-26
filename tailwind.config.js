const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const Vayu = require("vayu");

module.exports = {
  content: [
    "./node_modules/vayu-vue/**/*.cjs",
    "./node_modules/vayu-vue/**/*.js",
    "./node_modules/vayu/**/*.cjs",
    "./node_modules/vayu/*.cjs",
  ],

  plugins: [
    Vayu.plugin({
      components: ["button", "notification", "copy", "icon", "select", "field"],
    }),
  ],
};
