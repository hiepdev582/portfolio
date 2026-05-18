<script setup lang="ts">
import { computed } from "vue";

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
  const durations = myExperiences.map((exp) =>
    getTimeDiffComponents(exp.start, exp.end),
  );
  return sumTimeDurations(durations);
});
</script>

<template>
  <div
    class="bg-secondary text-main py-5 px-7 [&::selection]:bg-main [&::selection]:text-secondary h-full overflow-y-auto"
  >
    <section id="work-exp">
      <p class="text-xl font-bold tracking-tight text-main mb-4">
        Work experience
      </p>

      <div class="relative border-l-2 border-main/20 ml-3 pl-6 space-y-7 my-6">
        <div
          v-for="exp in myExperiences"
          :key="exp.company"
          class="relative group select-none"
        >
          <div
            class="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-2 border-main bg-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-main group-hover:shadow-[0_0_8px_rgba(30,16,78,0.5)]"
          >
            <div
              class="w-1.5 h-1.5 rounded-full bg-main transition-all duration-300 group-hover:bg-secondary"
            ></div>
          </div>

          <div class="transition-all duration-300 group-hover:translate-x-1">
            <span class="text-xs font-semibold text-main/60 block mb-1">
              {{ exp.start }} - {{ exp.end }} ({{
                timeDiff(exp.start, exp.end)
              }})
            </span>
            <h3 class="text-lg font-bold text-main tracking-tight leading-snug">
              {{ exp.company }}
            </h3>
            <p class="text-sm font-semibold text-main/70 mt-0.5">
              {{ exp.role }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-main/60"></span>
        <span class="font-semibold text-sm tracking-wide text-main/70">
          Total experience:
          <span class="font-bold text-main">{{ totalExperience }}</span>
        </span>
      </div>
    </section>
    <hr class="border-main/20 my-8" />
    <section id="personal-project">
      <p class="text-xl font-bold tracking-tight text-main mb-4">
        Personal projects
      </p>
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
