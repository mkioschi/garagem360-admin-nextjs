/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['cva'],
}
