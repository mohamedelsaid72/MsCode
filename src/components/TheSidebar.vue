<template>
  <aside>
    <slot></slot>
  </aside>
</template>
<script setup>
import { useGlobalStore } from "@/stores/globalStore";
import { computed } from "vue";

const globalStore = useGlobalStore();

const SideBarWidth = computed(() => {
  return globalStore.navbarBrandWidth;
});
</script>

<style scoped>
aside {
  position: relative;
  height: 100%;
  border-right: 1px solid var(--border-gray);
  flex: 0 0 v-bind(SideBarWidth + "px");
}
@media screen and (max-width: 800px) {
  aside {
    border-bottom: 1px solid var(--border-gray);
    flex: 0 0 50px;
  }
}
@media screen and (max-width: 450px) {
  aside {
    flex: 0 0 50px;
  }
}
</style>
