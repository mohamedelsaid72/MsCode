<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "Primary Button",
  },
});
</script>

<template>
  <button class="btn-primary">{{ props.text }}</button>
</template>

<style scoped>
.btn-primary {
  background-color: var(--primary-button-bg);
  color: var(--primary-button-color);
}
.btn-primary:hover {
  background-color: var(--primary-button-bg-hover);
}
</style>
