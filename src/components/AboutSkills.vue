<template>
  <pages-container>
    <template #left>
      <div class="skills">
        <ol>
          <li>/**</li>
          <li>* <b>Skills</b></li>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          <li>**/</li>
        </ol>
      </div>
    </template>
    <template #right>
      <div class="services">
        <h4>// Services</h4>
        <div class="services-code-block">
          <p>
            <span class="purple">const </span>
            <span class="blue">services</span> = <span class="ref">ref(</span
            ><span class="green">[</span>
          </p>
          <div v-for="(service, index) in services" :key="index">
            <span class="blue">{</span>
            <p>
              <span class="blue">title</span>:
              <span> "{{ service.title }}"</span>,
            </p>
            <p>
              <span class="blue">description</span>:
              <span class="description-content">
                "{{ service.description }}",</span
              >
            </p>
            <span class="blue">}</span>,
          </div>
          <p><span class="green">]</span><span class="ref">)</span>;</p>
        </div>
      </div>
    </template>
  </pages-container>
</template>
<script setup>
import { useSkillsStore } from "@/stores/skillsStore";

const skillsStore = useSkillsStore();
const skills = skillsStore.skills;
const services = skillsStore.services;
</script>
