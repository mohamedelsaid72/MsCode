<template>
  <div class="about-me">
    <SideBar>
      <p>personal-info</p>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </SideBar>
    <h2>About Me Component</h2>
  </div>
</template>

<script setup>
import { useGlobalStore } from "../stores/globalStore";
import { computed } from "vue";
import { useHead } from "@vueuse/head";

const globalStore = useGlobalStore();

const navbarHeight = computed(() => {
  return globalStore.navbarHeight;
});
const footerHeight = computed(() => {
  return globalStore.footerHeight;
});

useHead({
  title: "Mohamed Elsayed | About",
  meta: [
    {
      title: "description",
      content: "About Me Page",
    },
  ],
});
</script>

<style scoped>
.about-me {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.about-me aside {
  position: relative;
  height: 100%;
  min-height: calc(100vh - v-bind(navbarHeight + footerHeight + 2 + "px"));
}
</style>
