<template>
  <div class="app-content">
    <transition name="fade" mode="out-in">
      <PrePage />
    </transition>
    <Navbar />
    <div class="app-content-body">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { useGlobalStore } from "./stores/globalStore";
import { reactive, computed } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";

const globalStore = useGlobalStore();

const navbarHeight = computed(() => {
  return globalStore.navbarHeight;
});
const footerHeight = computed(() => {
  return globalStore.footerHeight;
});

const siteDate = reactive({
  title: "Mohamed Elsayed",
  description: "Personal Portfolio Website with Vue 3 and Pinia Store",
});

useHead({
  title: siteDate.title,
  meta: [
    {
      name: "description",
      content: siteDate.description,
    },
    {
      name: "keywords",
      content: "Vue 3, Pinia, Vueuse, Vue Router",
    },
    {
      name: "author",
      content: "Mohamed Elsayed",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});
</script>

<style>
@import "./assets/css/main.css";

.app-content-body {
  position: relative;
  margin-top: v-bind(navbarHeight + "px");
  height: calc(100vh - v-bind(navbarHeight + footerHeight + 2 + "px"));
  min-height: calc(100vh - v-bind(navbarHeight + footerHeight + 2 + "px"));
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
