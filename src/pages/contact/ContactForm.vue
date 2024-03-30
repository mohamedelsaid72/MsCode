<template>
  <form @submit.prevent="submitForm" method="post" enctype="text/plain">
    <div class="form-group">
      <label for="name">_name:</label>
      <input required type="text" id="name" v-model="enteredName" />
    </div>
    <div class="form-group">
      <label for="email">_email:</label>
      <input required type="email" id="email" v-model="enteredEmail" />
    </div>
    <div class="form-group">
      <label for="message">_message:</label>
      <textarea
        id="message"
        cols="30"
        rows="4"
        v-model="enteredMessage"
      ></textarea>
    </div>
    <button value="send" type="submit">submit-message</button>
  </form>
</template>

<script setup>
import { ref, defineProps } from "vue";

const enteredName = ref("");
const enteredEmail = ref("");
const enteredMessage = ref("");

const props = defineProps(["enteredName", "enteredEmail", "enteredMessage"]);
console.log(props.enteredName);
</script>

<style scoped>
form .form-group {
  display: flex;
  flex-direction: column;
}
form .form-group input,
form .form-group textarea {
  all: unset;
  padding: 0.4rem 1rem;
  border: 1px solid var(--border-gray);
  border-radius: 0.7rem;
  margin-bottom: 10px;
  background-color: var(--primary-bg-dark);
  transition: all 0.1s ease-in-out;
}
form .form-group input:focus {
  border: 3px solid var(--border-gray);
}
form button {
  font-size: var(--code-snippet-text);
  margin: 1rem 0;
  background-color: var(--border-gray);
  color: var(--secondary-white);
  transition: all 0.3s ease-in-out;
}
form button:hover {
  background-color: var(--default-button-bg-hover);
}
</style>
