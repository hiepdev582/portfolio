<script setup lang="ts">
import { computed } from 'vue';

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

interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
}

const myExperiences: Experience[] = [
  {
    company: "Alphaway",
    role: "Frontend Developer",
    start: "05/2026",
    end: "now",
  },
  {
    company: "VIVAS (A member of VNPT Technology)",
    role: "Frontend Developer",
    start: "07/2024",
    end: "05/2026",
  },
  {
    company: "MISA JSC",
    role: "Fullstack Developer",
    start: "03/2023",
    end: "02/2024",
  },
];

const totalExperience = computed(() => {
  const durations = myExperiences.map(exp => getTimeDiffComponents(exp.start, exp.end));
  return sumTimeDurations(durations);
});
</script>

<template>
  <div
    class="bg-secondary text-main py-5 px-7 [&::selection]:bg-main [&::selection]:text-secondary h-full overflow-y-auto"
  >
    <section id="work-exp">
      <p class="text-lg font-semibold">Work experience</p>
      <table class="w-full border border-main border-collapse my-2">
        <thead>
          <tr>
            <th class="border border-main text-left px-2 py-1">Company</th>
            <th class="border border-main text-left px-2 py-1">Role</th>
            <th class="border border-main text-left px-2 py-1">Period</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exp in myExperiences" :key="exp.company">
            <td class="border border-main px-2 py-1">{{ exp.company }}</td>
            <td class="border border-main px-2 py-1">{{ exp.role }}</td>
            <td class="border border-main px-2 py-1">
              {{ exp.start }}-{{ exp.end }} ({{ timeDiff(exp.start, exp.end) }})
            </td>
          </tr>
        </tbody>
      </table>
      <span class="font-semibold">Total: {{ totalExperience }}</span>
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
