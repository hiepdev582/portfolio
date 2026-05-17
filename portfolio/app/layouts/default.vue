<script setup lang="ts"></script>

<template>
  <main
    class="grid grid-cols-1 lg:grid-cols-[300px_1fr] w-full lg:h-screen overflow-hidden"
  >
    <Sidebar />
    <slot />
  </main>
</template>
