<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "Default Button",
  },
});
</script>

<template>
  <button class="btn-default">{{ props.text }}</button>
</template>

<style scoped>
.btn-default {
  background-color: var(--default-button-bg);
  color: var(--default-button-color);
}
.btn-default:hover {
  background-color: var(--default-button-bg-hover);
}
</style>
