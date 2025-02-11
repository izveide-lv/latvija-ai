<script setup lang="ts">
const cardConfig = useAppConfig().directory?.grid?.card;

defineProps(["item"]);
</script>

<template>
  <a
    :href="item.url"
    target="_blank"
    v-if="cardConfig?.type !== 'bullet'"
    data-umami-event="click"
    :data-umami-event-url="item.url"
    class="border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-900 hover:border-solid dark:hover:border-primary-900 rounded relative group transition-all"
    :class="
      cardConfig?.type === 'shadow'
        ? 'shadow-sm'
        : cardConfig?.type === 'dashed'
        ? 'border-dashed'
        : ''
    "
  >
    <DirectoryFeaturedTag class="ml-6" v-if="item.featured" />
    <NuxtImg
      v-if="item.card_image"
      sizes="400px"
      :alt="`${item.title}`"
      class="w-full rounded-t object-cover"
      lazy
      :src="item.card_image ?? '/logo.png'"
    />
    <div
      v-else
      class="w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600"
    >
      {{ item.title }}
    </div>
    <div class="p-6">
      <h3 class="m-0 text-lg font-semibold dark:text-gray-50">
        {{ item.title }}
      </h3>
      <p class="line-clamp-4 mt-2 text-sm">
        {{ item.description }}
      </p>
      <div class="p-0 mt-2 font-bold flex-wrap">
        {{ item.url.replace("https://", "").replace("http://", "") }}
      </div>
    </div>
  </a>
  <NuxtLink v-else :to="item._path">
    <div class="inline-flex gap-2 items-center">
      <img class="h-5 w-5" :src="item.cover ?? '/logo.png'" />
      <span class="font-semibold dark:text-gray-50">{{ item.title }}</span> -
      <span class="text-gray-600 dark:text-gray-300">{{
        item.description
      }}</span>
    </div>
  </NuxtLink>
</template>
