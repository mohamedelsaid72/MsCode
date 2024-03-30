<template>
  <div class="prepage" v-if="shouldDisplayPrepage">
    <div class="container">
      <div>
        <p>// Hi, I'm mohamed</p>
        <p>// Write the code below to continue:</p>
        <div class="container-input">
          <span
            class="animate__animated animate__fadeInLeft animate__slow animate__repeat-3"
            >></span
          >
          <div class="input-div">
            <input
              autofocus
              title="complete"
              type="text"
              v-model="enteredValue"
              @blur="onBlur"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const enteredValue = ref("");
const shouldDisplayPrepage = computed(() => {
  return enteredValue.value !== "whois";
});
function onBlur() {
  document.activeElement.blur();
}
</script>

<style scoped>
.prepage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  --animate-duration: 1s;
}
.container p:first-child {
  font-size: 12px;
}
.container p {
  color: var(--secondary-white);
  margin-bottom: 1rem;
  font-size: var(--code-snippet-text);
}
.container p:nth-child(2) {
  font-size: 20px;
  color: var(--accent-orange);
}
.container .container-input {
  display: flex;
  align-items: center;
  color: var(--secondary-green);
}
.container .container-input span {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}
.container .input-div {
  position: relative;
  width: 100%;
  z-index: 0;
}
.container .input-div::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "whois";
  color: var(--gradient-green);
  opacity: 0.5;
  z-index: -1;
}
.container .input-div input {
  all: unset;
  /* Vendor prefixes */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

/* Media Quries */
@media (max-width: 768px) {
  .container p:nth-child(2) {
    font-size: 14px;
  }
}
</style>
