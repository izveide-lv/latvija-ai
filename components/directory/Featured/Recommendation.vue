<script setup lang="ts">
import type { AsyncData } from "#app";
import type ListingContent from "~/types/Listing";

const { data: featured } = (await useAsyncData("featured", () =>
  queryContent("/lapa")
    .where({ featured: { $exists: true } })
    .only(["title", "description", "_path", "card_image"])
    .findOne()
)) as AsyncData<ListingContent, Error | null>;
const config = useAppConfig();
const featuredExists = computed(() => featured.value);
</script>

<template>
  <div
    v-if="featuredExists"
    class="flex flex-row flex-wrap border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border-gray-200 rounded-lg p-6 gap-3"
  >
    <NuxtImg
      v-if="featured?.card_image"
      class="rounded-lg"
      :src="featured?.card_image"
    />
    <div class="flex flex-col justify-between">
      <div class="space-y-">
        <p class="font-bold text-2xl dark:text-white tracking-tight">
          {{ featured?.title }}
        </p>
        <p class="text-gray-700 mt-2 text-md dark:text-gray-300">
          {{ featured?.description }}
        </p>
      </div>
      <NuxtLink class="mt-3" :to="featured._path">
        <UiButton>Uzzināt vairāk</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
