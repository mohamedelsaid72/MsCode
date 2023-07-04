import { createRouter, createWebHistory } from "vue-router";

// import components
import Home from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import ContactMe from "./pages/ContactMe.vue";
import Projects from "./pages/ProjectsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/contact",
    name: "ContactMe",
    component: ContactMe,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
