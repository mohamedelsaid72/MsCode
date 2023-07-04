import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";

// animate.css and remixicon
import "remixicon/fonts/remixicon.css";
import "animate.css";

// components
import PrimaryBtn from "./ui/PrimaryBtn.vue";
import DefaultBtn from "./ui/DefaultBtn.vue";
import PrePage from "./pages/PrePage.vue";
import SideBar from "./components/TheSidebar.vue";

const app = createApp(App);
const head = createHead();
app.component("PrimaryBtn", PrimaryBtn);
app.component("DefaultBtn", DefaultBtn);
app.component("PrePage", PrePage);
app.component("SideBar", SideBar);

app.use(router);
app.use(createPinia());
app.use(head);
app.mount("#app");
