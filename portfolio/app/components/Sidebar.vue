<script setup lang="ts"></script>

<template>
  <nav
    class="bg-main text-secondary p-6 md:px-8 md:py-7 [&::selection]:bg-secondary [&::selection]:text-main flex flex-col justify-between gap-8 h-full border-r border-white/10 overflow-y-auto"
  >
    <div class="flex flex-col items-center w-full gap-6">
      <section class="text-center w-full">
        <div
          class="mb-3 rounded-full size-28 overflow-hidden mx-auto border-2 border-secondary/60 p-1 group/avatar transition-all duration-300 hover:border-secondary shadow-md hover:shadow-lg"
        >
          <NuxtImg
            src="/images/me.webp"
            alt="Avatar"
            class="w-full h-full object-cover rounded-full z-10 relative transition-transform duration-500 group-hover/avatar:scale-110"
          />
        </div>
        <p class="text-xl font-bold tracking-tight text-secondary">
          Nguyễn Ngọc Hiệp
        </p>
        <span
          class="text-xs font-semibold tracking-wider uppercase text-secondary/70 block mt-1"
          >Web Developer</span
        >
      </section>

      <hr class="border-secondary/20 w-full my-0" />

      <section class="w-full">
        <p
          class="text-xs font-bold uppercase tracking-wider text-secondary/70 mb-3"
        >
          Contact Info
        </p>
        <ul class="flex flex-col gap-2.5 w-full text-xs text-secondary/80">
          <li
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:text-secondary group"
          >
            <span
              class="text-secondary/80 group-hover:text-secondary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-4 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.127-3.805-6.63-6.63l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <span class="font-medium tracking-wide">0972844478</span>
          </li>
          <li
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:text-secondary group"
          >
            <span
              class="text-secondary/80 group-hover:text-secondary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-4 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <span class="font-medium tracking-wide break-all"
              >hiepdev582@gmail.com</span
            >
          </li>
          <li
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:text-secondary group"
          >
            <span
              class="text-secondary/80 group-hover:text-secondary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-4 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <span class="font-medium tracking-wide">Hanoi, Vietnam</span>
          </li>
        </ul>
      </section>
    </div>

    <div class="flex flex-col items-center w-full gap-6">
      <hr class="border-secondary/20 w-full my-0" />

      <section class="w-full">
        <p
          class="text-xs font-bold uppercase tracking-wider text-secondary/70 mb-3"
        >
          Skills
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in [
              'HTML',
              'CSS / SCSS',
              'TailwindCSS',
              'JavaScript',
              'TypeScript',
              'Vue / Nuxt',
            ]"
            :key="skill"
            class="text-xs font-semibold rounded-full py-1.5 px-3 bg-secondary/10 text-secondary border border-secondary/25 transition-all duration-300 hover:bg-secondary hover:text-main hover:border-secondary cursor-default hover:scale-105"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <hr class="border-secondary/20 w-full my-0" />

      <section class="w-full">
        <p
          class="text-xs font-bold uppercase tracking-wider text-secondary/70 mb-3"
        >
          Navigation
        </p>
        <ul class="flex flex-col gap-2">
          <li>
            <NuxtLink
              to="#work-exp"
              class="flex items-center justify-between px-4 py-2.5 rounded-xl border border-secondary/10 bg-white/5 text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-secondary hover:text-main hover:border-secondary hover:translate-x-1"
            >
              <span>Work experience</span>
              <span>→</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#personal-project"
              class="flex items-center justify-between px-4 py-2.5 rounded-xl border border-secondary/10 bg-white/5 text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-secondary hover:text-main hover:border-secondary hover:translate-x-1"
            >
              <span>Personal projects</span>
              <span>→</span>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </nav>
</template>
