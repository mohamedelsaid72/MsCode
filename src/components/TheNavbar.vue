<script setup></script>

<template>
  <nav>
    <div class="navbar-brand">
      <router-link to="/">mohamed-elsayed</router-link>
    </div>
    <div :class="{ responsive: isNavbarOpen }" class="navbar-list">
      <ul class="start-list">
        <li class="link">
          <router-link @click="toggleNavbar" to="/">_hello</router-link>
        </li>
        <li class="link">
          <router-link @click="toggleNavbar" to="/about">_about-me</router-link>
        </li>
        <li class="link">
          <router-link @click="toggleNavbar" to="/projects"
            >_projects</router-link
          >
        </li>
      </ul>
      <ul class="end-list">
        <li class="link">
          <router-link @click="toggleNavbar" to="/contact"
            >_contact-me</router-link
          >
        </li>
      </ul>
    </div>
    <div class="btn-toggle">
      <button
        title="toggle-button"
        @click="toggleNavbar"
        class="navbar-toggler"
      >
        <i :class="isNavbarOpen ? 'ri-close-line' : 'ri-menu-fill'"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>
