<script setup lang="ts">
const config = useAppConfig().directory.grid;
</script>

<template>
  <div class="col-span-4">
    <p v-if="config?.emptyState?.type === 'simple'">
      {{ config.emptyState.text }}
    </p>
    <NuxtLink to="/pievienoties" v-if="config?.emptyState?.type === 'link'">{{
      config.emptyState.text
    }}</NuxtLink>
    <div
      class="flex flex-col items-center justify-center gap-3 rounded px-2 py-12"
      v-if="config?.emptyState?.type === 'button'"
    >
      <Icon size="50" :name="config.emptyState.icon ?? 'tabler:mood-empty'" />
      <p>
        {{ config.emptyState.text }}
      </p>
      <NuxtLink class="rounded" to="/pievienoties">
        <UiButton> Pievienot mājaslapu </UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
