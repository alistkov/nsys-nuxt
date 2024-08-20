<script setup lang="ts"></script>

<template>
  <header class="flex w-full items-center px-10 py-5 shadow-md">
    <img
      src="https://nsysgroup.com/media/xmfof0pb/nsys-group.webp"
      alt=""
      class="w-[160px]"
    />
    <nav class="ml-auto text-[#727e87]">
      <ul class="flex">
        <li class="mr-5">
          <NuxtLink to="/" class="hover:text-[#67c1bf] transition-colors"
            >Home</NuxtLink
          >
        </li>
        <li class="mr-5">
          <NuxtLink to="/blog" class="hover:text-[#67c1bf] transition-colors"
            >Blog</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
