<script setup lang="ts">
const { layout } = useContent();

const layoutName = computed(() => layout.value || "wide");
</script>

<template>
  <AppLayout>
    <NuxtLayout :name="layoutName">
      <NuxtPage class="page-enter-active" />
    </NuxtLayout>
  </AppLayout>
</template>
<style>
.dark body {
  @apply bg-gray-800;
}

html:not(.dark) .prose {
  --tw-prose-pre-code: rgb(4, 0, 0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}

.page-enter-active {
  animation: fadeInUp 0.6s forwards;
}

.page-leave-active {
  animation: fadeOutDown 0.6s backwards;
}
</style>
