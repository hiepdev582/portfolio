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
    class="bg-secondary text-main py-7 px-5 md:px-8 [&::selection]:bg-main [&::selection]:text-secondary h-full overflow-y-auto space-y-8"
  >
    <section
      id="work-exp"
      class="bg-white/50 backdrop-blur-md border border-white/30 shadow-sm rounded-2xl px-6 py-5 md:px-8 md:py-7 transition-all duration-300 hover:shadow-md"
    >
      <p class="text-xl font-bold tracking-tight text-main mb-6">
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
            <span class="text-xs font-semibold text-main/70 block mb-1">
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

      <div class="mt-8 pt-4 border-t border-main/15 flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-main/60"></span>
        <span class="font-semibold tracking-wide text-main/70">
          Total experience:
          <span class="font-bold text-main">{{ totalExperience }}</span>
        </span>
      </div>
    </section>

    <section
      id="personal-project"
      class="bg-white/50 backdrop-blur-md border border-white/30 shadow-sm rounded-2xl px-6 py-5 md:px-8 md:py-7 transition-all duration-300 hover:shadow-md"
    >
      <p class="text-xl font-bold tracking-tight text-main mb-6">
        Personal projects
      </p>

      <ul v-if="myProjects.length" class="space-y-6">
        <li
          v-for="project of myProjects"
          :key="project.id"
          class="border-b border-main/10 pb-6 last:border-b-0 last:pb-0"
        >
          <img
            :src="project.thumbnail"
            :alt="project.alt"
            class="rounded-xl overflow-hidden mb-3 border border-main/10 max-h-48 object-cover w-full"
          />
          <div>
            <p class="text-lg font-bold text-main">{{ project.name }}</p>
            <span class="text-sm text-main/80">{{ project.description }}</span>
          </div>
          <ul class="flex flex-wrap gap-1.5 my-2">
            <li
              v-for="stack in project.techstack"
              :key="stack"
              class="text-xs font-semibold bg-main/5 text-main/80 px-2 py-0.5 rounded-md border border-main/10"
            >
              {{ stack }}
            </li>
          </ul>
          <p class="text-sm font-medium text-main/70">
            Role: {{ project.role }}
          </p>
          <p class="text-sm font-medium text-main/70">
            Period: {{ project.startedAt }} - {{ project.endedAt }}
          </p>
          <div class="flex gap-4 mt-3">
            <NuxtLink
              v-if="project.linkDemo"
              :to="project.linkDemo"
              class="text-xs font-bold text-main hover:underline"
              >Live Demo →</NuxtLink
            >
            <NuxtLink
              v-if="project.linkSourcecode"
              :to="project.linkSourcecode"
              class="text-xs font-bold text-main hover:underline"
              >Source code →</NuxtLink
            >
          </div>
        </li>
      </ul>

      <div
        v-else
        class="flex flex-col items-center justify-center py-10 px-4 text-center"
      >
        <div
          class="w-16 h-16 rounded-full bg-main/5 flex items-center justify-center mb-4 text-main/40 border border-main/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </div>
        <p class="text-md font-semibold text-main/80">
          No projects completed yet
        </p>
        <p class="text-sm text-main/70 mt-1 max-w-[280px]">
          Working on exciting new applications and tools. Check back soon for
          updates!
        </p>
      </div>
    </section>
  </div>
</template>
