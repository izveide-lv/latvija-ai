<script setup>
const item = computed(() => ({
  title: "Latvijas labākās mājaslapas",
  description:
    "Katalogs, kurā apkopoti Latvijas interneta veikali, pakalpojumu sniedzēji un rīki.",
  featured: true,
  card_image: "/latvija.ai.png",
}));
</script>

<template>
  <span
    class="text-sm font-medium py-0.5 group-hover:border-primary-500 -top-3 border border-300 rounded-full bg-white px-3.5 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white"
  >
    Izceltie 💯
  </span>
</template>
