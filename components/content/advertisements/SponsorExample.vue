<script setup>
defineProps(["title", "description", "url"]);
</script>

<template>
  <a
    class="bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-md shadow-sm w-full p-8 flex flex-col mt-8"
    :href="url"
    target="_blank"
  >
    <span class="text-indigo-100 text-sm font-medium">{{
      url.replace("https://", "")
    }}</span>
    <span class="text-white text-2xl font-semibold">
      {{ title }}
    </span>
    <span class="text-white">{{ description }}</span>
  </a>
</template>
