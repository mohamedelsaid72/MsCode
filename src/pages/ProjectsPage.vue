<template>
  <div class="projects">
    <SideBar>
      <p class="highlight">projects</p>
      <ul class="filters">
        <li>
          <input
            type="checkbox"
            name="vue.js"
            id="vue.js"
            value="vue.js"
            v-model="selectedCategories"
            @change="filterProjects"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18.81px"
            height="18.81px"
          >
            <path
              d="M3.31677 3L12.001 18L20.6852 3H23.001L12.001 22L1.00098 3H3.31677ZM7.65887 3L12.001 10.5L16.3431 3H18.6589L12.001 14.5L5.34308 3H7.65887Z"
            ></path>
          </svg>
          <label for="vue.js">vue.js</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="html-css"
            id="html-css"
            value="html-css"
            v-model="selectedCategories"
            @change="filterProjects"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18.81px"
            height="18.81px"
          >
            <path
              d="M12 18.1778L7.38083 16.9222L7.0517 13.3778H9.32156L9.48045 15.2222L12 15.8889L14.5195 15.2222L14.7806 12.3556H6.96091L6.32535 5.67778H17.6747L17.4477 7.88889H8.82219L9.02648 10.1444H17.2434L16.6192 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2ZM5.18844 4L6.48986 18.4339L12 19.9278L17.5101 18.4339L18.8116 4H5.18844Z"
            ></path>
          </svg>
          <label for="html-css">HTML CSS</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="javaScript"
            id="javaScript"
            value="javaScript"
            v-model="selectedCategories"
            @change="filterProjects"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18.81px"
            height="18.81px"
          >
            <path
              d="M13.3344 16.055 12.4764 17.243C13.2904 17.969 14.3024 18.332 15.5124 18.332 16.4364 18.31 17.1404 18.0717 17.6244 17.617 18.1157 17.155 18.3614 16.605 18.3614 15.967 18.3614 15.3437 18.1891 14.8303 17.8444 14.427 17.4997 14.0237 16.9204 13.701 16.1064 13.459 15.4317 13.2537 14.9551 13.0667 14.6764 12.898 14.3977 12.722 14.2584 12.5093 14.2584 12.26 14.2584 12.0327 14.3721 11.8493 14.5994 11.71 14.8267 11.5707 15.1311 11.501 15.5124 11.501 15.7911 11.501 16.1064 11.556 16.4584 11.666 16.8104 11.7613 17.1221 11.9153 17.3934 12.128L18.1634 10.929C17.4887 10.3863 16.5941 10.115 15.4794 10.115 14.6801 10.115 14.0237 10.3203 13.5104 10.731 12.9824 11.1417 12.7184 11.6513 12.7184 12.26 12.7257 12.9053 12.9384 13.4077 13.3564 13.767 13.7817 14.1263 14.3867 14.4197 15.1714 14.647 15.8241 14.8523 16.2677 15.0577 16.5024 15.263 16.7297 15.4683 16.8434 15.7177 16.8434 16.011 16.8434 16.297 16.7297 16.517 16.5024 16.671 16.2677 16.8323 15.9304 16.913 15.4904 16.913 14.7717 16.9203 14.0531 16.6343 13.3344 16.055ZM7.80405 16.693C7.58405 16.561 7.37872 16.3667 7.18805 16.11L6.15405 16.957C6.46205 17.4777 6.84339 17.8407 7.29805 18.046 7.72339 18.2367 8.21105 18.332 8.76105 18.332 9.06172 18.332 9.37339 18.2843 9.69605 18.189 10.0187 18.0937 10.3157 17.9323 10.5871 17.705 11.0637 17.3237 11.3131 16.7003 11.3351 15.835V10.247H9.85005V15.549C9.85005 16.055 9.73639 16.4107 9.50905 16.616 9.28172 16.814 8.99572 16.913 8.65105 16.913 8.32105 16.913 8.03872 16.8397 7.80405 16.693ZM3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z"
            ></path>
          </svg>
          <label for="javaScript">JavaScript</label>
        </li>
        <li class="view-all-projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
            ></path>
          </svg>
          <a href="">All Projects</a>
        </li>
      </ul>
    </SideBar>
    <PageMain>
      <div class="pre-header">
        <div class="category-box highlight">
          <div class="gap" v-if="selectedCategories.length > 0">
            <span v-for="category in selectedCategories" :key="category">
              {{ category }}
            </span>
          </div>
          <span v-else>all</span>
          <svg
            v-if="selectedCategories.length > 0"
            @click="selectedCategories = []"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.34722 4.65244L9.05972 0.939941L10.1202 2.00044L6.40772 5.71294L10.1202 9.42544L9.05972 10.4859L5.34722 6.77344L1.63472 10.4859L0.574219 9.42544L4.28672 5.71294L0.574219 2.00044L1.63472 0.939941L5.34722 4.65244Z"
              fill="#607B96"
            />
          </svg>
        </div>
      </div>

      <div class="projects-container">
        <transition-group name="fade" mode="in-out">
          <div v-for="project in filteredProjects" :key="project.category">
            <project-card :project="project" />
          </div>
        </transition-group>
      </div>
    </PageMain>
  </div>
</template>
<script setup>
import projectCard from "@/components/projectCard.vue";
import { useHead } from "@vueuse/head";
import { ref, computed } from "vue";
import { useProjectsStore } from "@/stores/projectsStore";

useHead({
  title: "Mohamed Elsayed | Projects",
  meta: [
    {
      title: "description",
      content: "Projects Page",
    },
  ],
});

const projectsStore = useProjectsStore();
const projects = computed(() => {
  return projectsStore.projects;
});

const selectedCategories = ref([]);

const filteredProjects = computed(() => {
  if (selectedCategories.value.length === 0) {
    return projects.value;
  } else {
    return projects.value.filter((project) =>
      selectedCategories.value.includes(project.type)
    );
  }
});
const filterProjects = () => {
  selectedCategories.value = [...selectedCategories.value];
};
</script>
