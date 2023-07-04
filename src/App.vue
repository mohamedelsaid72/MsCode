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
/* import css & google fonts */
@import url("./assets/css/variables.css");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap");

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Code", monospace;
}
body {
  background-color: var(--primary-bg);
  color: var(--secondary-white);
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
}
button {
  all: unset;
  cursor: pointer;
  padding: var(--button-padding);
  border-radius: var(--border-radius);
  font-size: 14px;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
/* classes */
.headline-text {
  font-size: var(--headline-text);
}
.subheadline-text {
  font-size: var(--subheadline-text);
}
.code-snippet-text {
  font-size: var(--code-snippet-text);
}
.blue {
  color: var(--secondary-blue);
}
.green {
  color: var(--secondary-green);
}
.orange {
  color: var(--accent-orange);
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* App Styles */
.app-content-body {
  position: relative;
  margin-top: v-bind(navbarHeight + "px");
  min-height: calc(100vh - v-bind(navbarHeight + footerHeight + 2 + "px"));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Media Queries */
@media (max-width: 768px) {
  .headline-text {
    font-size: 2rem;
  }
  .subheadline-text {
    font-size: 1.3rem;
  }
}
</style>
