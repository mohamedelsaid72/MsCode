import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";

// animate.css and remixicon
import "remixicon/fonts/remixicon.css";
import "animate.css";

// components
import PrimaryBtn from "@/ui/PrimaryBtn.vue";
import DefaultBtn from "@/ui/DefaultBtn.vue";
import PrePage from "@/pages/PrePage.vue";
import SideBar from "@/components/TheSidebar.vue";
import PageMain from "@/components/PageMain.vue";
import PagesContainer from "@/components/PagesContainer.vue";

import AboutBio from "@/components/AboutBio.vue";
import AboutSkills from "@/components/AboutSkills.vue";

const app = createApp(App);
const head = createHead();
app.component("PrimaryBtn", PrimaryBtn);
app.component("DefaultBtn", DefaultBtn);
app.component("PrePage", PrePage);
app.component("SideBar", SideBar);
app.component("PageMain", PageMain);
app.component("AboutBio", AboutBio);
app.component("AboutSkills", AboutSkills);
app.component("PagesContainer", PagesContainer);

app.use(router);
app.use(createPinia());
app.use(head);
app.mount("#app");
