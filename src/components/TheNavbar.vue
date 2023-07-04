<script setup></script>

<template>
  <nav>
    <div class="navbar-brand">
      <router-link to="/">mohamed-elsayed</router-link>
    </div>
    <div :class="{ responsive: isNavbarOpen }" class="navbar-list">
      <ul class="start-list">
        <li class="link">
          <router-link @click="toggleNavbar" to="/">_hello</router-link>
        </li>
        <li class="link">
          <router-link @click="toggleNavbar" to="/about">_about-me</router-link>
        </li>
        <li class="link">
          <router-link @click="toggleNavbar" to="/projects"
            >_projects</router-link
          >
        </li>
      </ul>
      <ul class="end-list">
        <li class="link">
          <router-link @click="toggleNavbar" to="/contact"
            >_contact-me</router-link
          >
        </li>
      </ul>
    </div>
    <div class="btn-toggle">
      <button
        title="toggle button"
        @click="toggleNavbar"
        class="navbar-toggler"
      >
        <i :class="isNavbarOpen ? 'ri-close-line' : 'ri-menu-fill'"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border: 1px solid var(--border-gray);
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-bg);
  z-index: 998;
}

nav a {
  color: var(--secondary-white);
  font-size: var(--code-snippet-text);
  border-right: 1px solid var(--border-gray);
  padding: 0.8rem 2rem;
}
nav .navbar-brand {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .navbar-brand a {
  width: 220px;
  font-size: var(--body-text);
  font-weight: 500;
}
nav .navbar-list,
nav .navbar-list .start-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 200px);
}
nav .navbar-list .start-list {
  justify-content: start;
}
nav .navbar-list .end-list {
  float: right;
}
nav .navbar-list .end-list .link a {
  border-right: none;
  border-left: 1px solid var(--border-gray);
}
/* Active link */
nav .link a:active,
nav .link a:hover,
nav .link a.router-link-active {
  border-bottom: 2px solid var(--primary-button-bg);
}
nav .btn-toggle {
  display: none;
}
nav .btn-toggle button {
  color: var(--secondary-gray);
}
nav .btn-toggle button i {
  font-size: 1.4rem;
}

/* Media Queries */
@media (max-width: 900px) {
  nav .navbar-brand a {
    border: none;
    /* padding: 1rem 0.9rem; */
  }
  nav .navbar-list li {
    width: 100%;
    padding: 1rem 0.9rem;
    border-bottom: 1px solid var(--border-gray);
  }
  nav .navbar-list a {
    all: unset;
    cursor: pointer;
  }
  nav .navbar-list a:active,
  nav .navbar-list a:hover,
  nav .navbar-list a.router-link-active {
    border-bottom: none;
  }
  nav .navbar-list {
    display: none;
  }
  nav .btn-toggle {
    display: flex;
    align-items: center;
  }
  nav .navbar-list.responsive {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 95vh;
    background-color: var(--primary-bg);
    border: 1px solid var(--border-gray);
  }
  nav .navbar-list.responsive .start-list,
  nav .navbar-list.responsive .end-list {
    width: 100%;
    flex-direction: column;
    align-items: start;
  }
  nav .navbar-list .end-list {
    float: none;
  }
  nav .navbar-list .end-list .link a {
    border-left: none;
  }
}
</style>
