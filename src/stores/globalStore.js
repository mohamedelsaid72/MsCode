import { defineStore } from "pinia";
import { computed } from "vue";

export const useGlobalStore = defineStore("globalStore", () => {
  const navbarHeight = computed(() => {
    return document.querySelector("nav").offsetHeight;
  });
  const footerHeight = computed(() => {
    return document.querySelector("footer").offsetHeight;
  });

  const totalHeight = computed(() => {
    return navbarHeight.value + footerHeight.value;
  });

  return {
    navbarHeight,
    footerHeight,
    totalHeight,
  };
});
