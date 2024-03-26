import close from "~/components/icons/close.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(`VClose`, close);
});
