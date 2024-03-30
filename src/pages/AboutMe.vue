<template>
  <div class="about-me">
    <SideBar>
      <p class="highlight">personal-info</p>
      <ul class="toggle-links">
        <li
          :class="{ active: selectedComponent === 'about-bio' }"
          @click="setSelectedComponent('about-bio')"
        >
          <i class="ri-folder-3-fill"></i> bio
        </li>
        <li
          :class="{ active: selectedComponent === 'about-skills' }"
          @click="setSelectedComponent('about-skills')"
        >
          <i class="ri-folder-3-fill"></i> skills
        </li>
      </ul>
      <p class="highlight">contacts</p>
      <div class="contact-links">
        <p>
          <a href="mailto:mohamedelsaid25737@gmail.com">
            <i class="ri-mail-fill"></i> email-me</a
          >
        </p>
        <p>
          <a href="tel:01023214474"><i class="ri-phone-fill"></i> call-me</a>
        </p>
      </div>
    </SideBar>
    <PageMain>
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>
    </PageMain>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedComponent = ref("about-bio");

function setSelectedComponent(cmp) {
  selectedComponent.value = cmp;
}
</script>
