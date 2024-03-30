import { defineStore } from "pinia";
import { ref } from "vue";

export const useSkillsStore = defineStore("skillsStore", () => {
  const skills = ref([
    "* HTML5,CSS3,SASS",
    "* JavaScript (DOM,BOM,OOP,ES6)",
    "* Vue.JS (Composition API, Vuex,Pinia State)",
    "* Rest API",
    "* Bootstrap",
    "* Git & Github",
    "* Firebase",
    "* Figma",
  ]);

  const services = ref([
    {
      title: "Frontend Development",
      description:
        "I build functional and interactive frontend components using HTML, CSS, and JavaScript. Whether it's developing static websites or dynamic web applications.",
    },
    {
      title: "Website Maintenance",
      description:
        "I can help you maintain your website by updating it with the latest technologies.",
    },
    {
      title: "Responsive Web Design",
      description:
        "I optimize websites to be fully responsive, adapting seamlessly to different screen sizes and resolutions.",
    },
  ]);

  return {
    skills,
    services,
  };
});
