<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <span
    class="absolute text-sm font-medium py-0.5 hover:border-primary-900 transition -top-4 -right-1 border border-300 rounded-full bg-white px-3.5 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white"
  >
    {{ config?.directory?.featured?.labelForCard }}
  </span>
</template>
