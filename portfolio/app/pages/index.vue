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
  <div
    class="bg-secondary text-main py-5 px-7 [&::selection]:bg-main [&::selection]:text-secondary"
  >
    <section id="work-exp">
      <p class="text-lg font-semibold">Work experience</p>
      <ul>
        <li class="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-x-6">
          <span>MISA JSC</span>
          <span>Fullstack Developer</span>
          <span>03/2023-01/2024 (11 months)</span>
        </li>
        <li class="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-x-6">
          <span>VIVAS (A member of VNPT Technology)</span>
          <span>Frontend Developer</span>
          <span>07/2024-04/2026 (1 year 10 months)</span>
        </li>
        <li class="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-x-6">
          <span>Alphaway</span>
          <span>Frontend Developer</span>
          <span>05/2026-now (1 month)</span>
        </li>
      </ul>
      <span class="font-semibold">Total: 2 years 10 months</span>
    </section>
    <hr class="border-main my-4" />
    <section id="personal-project">
      <p class="text-lg font-semibold">Personal projects</p>
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
          <p>Role: {{ project.role }}</p>
          <p>Period: {{ project.startedAt }} - {{ project.endedAt }}</p>
          <p v-if="project.linkDemo">
            <NuxtLink :to="project.linkDemo">Live Demo</NuxtLink>
          </p>
          <p v-if="project.linkSourcecode">
            <NuxtLink :to="project.linkSourcecode">Source code</NuxtLink>
          </p>
        </li>
      </ul>
      <div v-else class="italic">No projects have been done yet</div>
    </section>
  </div>
</template>
