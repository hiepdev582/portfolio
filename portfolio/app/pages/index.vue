<script setup lang="ts">
interface Project {
  id: number;
  name: string;
  description: string;
  startedAt: number;
  endedAt?: number;
  thumbnail: string;
  alt: string;
  techstack: string[];
  role: string;
  linkDemo: string;
  linkSourcecode: string;
}

const myProjects: Project[] = [];
</script>

<template>
  <div>
    <section id="work-exp">
    <ul>
      <li>
        <span>Misa JSC</span>
        <span>Fullstack Developer</span>
        <span>03/2023-01/2024 (11 months)</span>
      </li>
      <li>
        <span>VIVAS (A memeber of VNPT Technology)</span>
        <span>Frontend Developer</span>
        <span>07/2024-04/2026 (1 year 10 months)</span>
      </li>
    </ul>
    <span>Total: 2 years 9 months</span>
  </section>
  <section id="personal-project">
    <ul v-if="myProjects.length">
      <li v-for="project of myProjects" :key="project.id">
        <img :src="project.thumbnail" :alt="project.alt" />
        <div>
          <p>{{ project.name }}</p>
          <span>{{ project.description }}</span>
        </div>
        <ul>
          <li v-for="stack in project.techstack">{{ stack }}</li>
        </ul>
        <li>Role: {{ project.role }}</li>
        <li>Period: {{ project.startedAt }} - {{ project.endedAt }}</li>
        <li v-if="project.linkDemo">
          <NuxtLink :to="project.linkDemo">Live Demo</NuxtLink>
        </li>
        <li v-if="project.linkSourcecode">
          <NuxtLink :to="project.linkSourcecode">Source code</NuxtLink>
        </li>
      </li>
    </ul>
    <div v-else>No projects have been done yet</div>
  </section>
  </div>
</template>
