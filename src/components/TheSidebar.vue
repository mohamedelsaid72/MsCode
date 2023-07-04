<template>
  <aside>
    <slot></slot>
  </aside>
</template>

<script setup></script>
<style scoped>
aside {
  width: 221px;
  height: 100%;
  border: 1px solid var(--border-gray);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
</style>
