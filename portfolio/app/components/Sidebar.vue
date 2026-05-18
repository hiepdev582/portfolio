<script setup lang="ts"></script>

<template>
  <nav
    class="bg-main text-secondary p-5 [&::selection]:bg-secondary [&::selection]:text-main"
  >
    <section>
      <ul class="flex flex-col justify-center items-center">
        <li class="text-center">
          <div
            class="border-2 border-secondary mb-2 rounded-full size-20 overflow-hidden mx-auto"
          >
            <NuxtImg
              src="/images/me.webp"
              alt="Avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="text-lg">Nguyễn Ngọc Hiệp</p>
          <span class="text-sm">Web Developer</span>
        </li>
        <li class="text-center">
          <p>0972844478</p>
          <p>hiepdev582@gmail.com</p>
        </li>
        <li>
          <p>Hanoi, Vietnam</p>
        </li>
      </ul>
    </section>
    <hr class="border-secondary my-4" />
    <section>
      <p class="text-lg font-semibold">Skills:</p>
      <ul class="list-disc pl-6">
        <li>HTML</li>
        <li>CSS / SCSS / TailwindCSS</li>
        <li>JavaScript / TypeScript</li>
        <li>Vue.js / Nuxt</li>
      </ul>
    </section>
    <hr class="border-secondary my-4" />
    <section>
      <ul>
        <li>
          <NuxtLink
            to="#work-exp"
            class="text-lg font-semibold hover:underline underline-offset-3"
            >Work experience</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#personal-project"
            class="text-lg font-semibold hover:underline underline-offset-3"
            >Personal projects</NuxtLink
          >
        </li>
      </ul>
    </section>
  </nav>
</template>
