import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectsStore = defineStore("projectsStore", () => {
  const projects = ref([
    {
      name: "E-commerce",
      category: ["vue.js"],
      type: "vue.js",
      preDescription: "An e-commerce website",
      fullDescription:
        "Is a simple e-commere website deal with api and using pinia state management. You can add and remove items from cart. The website has a simple, user-friendly interfaceand a responsive design.",
      url: "https://pinia-ecommerce.web.app/products",
      img: "ecommerce.webp",
      github: "https://github.com/mohamedelsaid72/pinia-ecommerce",
    },
    {
      name: "Agenda 42 Group",
      category: ["vue.js"],
      type: "vue.js",
      preDescription: "Company system",
      fullDescription:
        "Is a company management system. You can handle meetings, tasks, news, recommendations, and add and remove employees. It is a multi-language website. My role was to make pixel-perfect designs and integrate API to handle user permissions and roles.",
      url: "https://agenda.42.guru/",
      img: "agenda.webp",
    },
    {
      name: "Al Taqwa",
      category: ["html", "css", "javaScript"],
      type: "javaScript",
      preDescription: "An islamic website",
      fullDescription:
        "Taqwa: An Islamic resource platform with prayer times, Quranic verses, and information on the five pillars of Islam.",
      url: "https://mohamedelsaid72.github.io/Islamic/",
      img: "islamic.webp",
      github: "https://github.com/mohamedelsaid72/Islamic",
    },
    {
      name: "Portfolio",
      category: ["html", "css", "javaScript"],
      type: "javaScript",
      preDescription: "My personal portfolio",
      fullDescription:
        "This is my personal portfolio. You can see my projects, skills, and contact information.It comes with a dark and light mode and a responsive design.",
      url: "https://mohamedelsaid72.github.io/Portfolio/",
      img: "PortfolioTemplate.webp",
      github: "https://github.com/mohamedelsaid72/Portfolio",
    },
    {
      name: "Eatly",
      category: ["html", "css"],
      type: "html-css",
      preDescription: "A static food website",
      fullDescription:
        "This website, Eatly, focuses on promoting healthy eating habits.",
      url: "https://mohamedelsaid72.github.io/Eatly/",
      img: "Eatly.webp",
      github: "https://github.com/mohamedelsaid72/Eatly",
    },
    {
      name: "TodoDaily",
      category: ["html", "css", "javaScript"],
      type: "javaScript",
      preDescription: "A Todo list website",
      fullDescription:
        "TodoDaily is a Todo list website. with a simple and user-friendly interface. You can add and delete tasks. and save them to local storage. It comes with a dark and light mode and a responsive design.",
      url: "https://mohamedelsaid72.github.io/TodoDaily/",
      img: "tododaily.webp",
      github: "https://github.com/mohamedelsaid72/TodoDaily",
    },
  ]);

  return { projects };
});
