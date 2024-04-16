<template>
  <div class="contact-me">
    <SideBar>
      <p class="highlight">contacts</p>
      <div class="contact-links">
        <p>
          <a href="mailto:mohamedelsaid25737@gmail.com">
            <i class="ri-mail-fill"></i> email-me</a
          >
        </p>
        <p>
          <a href="tel:01023214474"
            ><i class="ri-phone-fill"></i> 01023214474</a
          >
        </p>
      </div>
      <p class="highlight">find-me-also-in</p>
      <div class="contact-links">
        <p>
          <a
            href="https://www.linkedin.com/in/mohamed-elsayed72/"
            rel="noopener noreferrer"
            target="_blank"
            title="linkedin"
            ><i class="ri-linkedin-fill"></i> <span>Linkedin</span></a
          >
        </p>
        <p>
          <a
            href="https://www.facebook.com/profile.php?id=100008125182310"
            rel="noopener noreferrer"
            target="_blank"
            title="linkedin"
            ><i class="ri-facebook-fill"></i> <span>Facebook</span></a
          >
        </p>
        <p>
          <a
            href="https://twitter.com/Mohamed72Elsaid"
            rel="noopener noreferrer"
            target="_blank"
            title="twitter"
            ><i class="ri-twitter-fill"></i> <span>Twitter</span></a
          >
        </p>
      </div>
    </SideBar>
    <PageMain>
      <div class="pre-header"><div class="gray be-1px">contacts</div></div>
      <pages-container>
        <template #left>
          <transition name="fade" mode="out-in">
            <form
              v-if="!isContacted"
              @submit.prevent="submitForm"
              method="post"
              enctype="text/plain"
            >
              <div class="form-group">
                <label for="name">_name:</label>
                <input required type="text" id="name" v-model="enteredName" />
              </div>
              <div class="form-group">
                <label for="email">_email:</label>
                <input
                  required
                  type="email"
                  id="email"
                  v-model="enteredEmail"
                />
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
              <button value="send" type="submit" class="submit-btn">
                <span v-if="isLoading" class="loader"></span>
                <span v-else>submit-message</span>
              </button>
            </form>
            <div v-else class="isContacted">
              <p class="thank-you">thank you! 🤘</p>
              <p class="thanks-message">
                Your message has been accepted. You will recieve answer really
                soon!
              </p>
              <button type="button" @click="clearLocalStorage">
                send-new-message
              </button>
            </div>
          </transition>
        </template>
        <template #right>
          <div class="code-snippet">
            <ol>
              <li>
                <span class="purple">const </span>
                <span class="blue">button </span>
                <span class="purple">= </span>
                <span class="blue">document.querySelector</span>
                <span>(</span>
                <span class="orange">'#sendBtn'</span>
                <span>);</span>
              </li>
              <li></li>
              <li>
                <span class="purple">const </span>
                <span class="blue">button </span>
                <span class="purple">= </span>
                <span>{</span>
              </li>
              <li>
                <p class="marginLeft">
                  <span class="blue">name: </span>
                  <span class="orange name">"{{ enteredName }}"</span>,
                </p>
              </li>
              <li>
                <p class="marginLeft">
                  <span class="blue">email: </span>
                  <span class="orange">"{{ enteredEmail }}"</span>,
                </p>
              </li>
              <li>
                <p class="marginLeft">
                  <span class="blue">message: </span>
                  <span class="orange">"{{ enteredMessage }}"</span>
                </p>
              </li>
              <li><span>}</span></li>
              <li></li>
              <li>
                <span class="blue">button.addEventListener</span>
                <span>(</span>
                <span class="orange">'click'</span>,
                <span> ()</span>
                <span class="purple"> => </span>
                <span>{</span>
              </li>
              <li>
                <span class="blue marginLeft">form.send</span>
                <span>(</span>
                <span class="blue">message</span>
                <span class="blue">)</span>;
              </li>
              <li>
                <span>});</span>
              </li>
            </ol>
          </div>
        </template>
      </pages-container>
    </PageMain>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { ref } from "vue";
// import CodeSnippet from "./contact/ContactCodeSnippet.vue";

useHead({
  title: "Mohamed Elsayed | Contact",
  meta: [
    {
      title: "description",
      content: "Contact Page",
    },
  ],
});

const enteredName = ref("");
const enteredEmail = ref("");
const enteredMessage = ref("");
const isLoading = ref(false);
const isContacted = ref(false);

const storedContact = localStorage.getItem("contactInfo");
if (storedContact) {
  isContacted.value = true;
  enteredName.value = JSON.parse(storedContact).name;
  enteredEmail.value = JSON.parse(storedContact).subject;
  enteredMessage.value = JSON.parse(storedContact).message;
}

const submitForm = async () => {
  isLoading.value = true;
  try {
    const requestBody = {
      subject: enteredEmail.value,
      message: enteredMessage.value,
      name: enteredName.value,
    };

    localStorage.setItem("contactInfo", JSON.stringify(requestBody));

    await fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "mohamedelsaid25737@gmail.com",
        subject: enteredEmail.value,
        message: enteredMessage.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    enteredName.value = "";
    enteredEmail.value = "";
    enteredMessage.value = "";

    isContacted.value = true;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const clearLocalStorage = () => {
  localStorage.removeItem("contactInfo");
  isContacted.value = false;
};
</script>
