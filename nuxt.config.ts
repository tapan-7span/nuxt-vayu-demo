// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/vayu-vue.client.js"],
  plugins: ["~/plugins/components.js"],
});
