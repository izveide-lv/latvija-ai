<script setup lang="ts">
const cardConfig = useAppConfig().directory?.grid?.card;
import { AppModal } from "#components";
import { ModalsContainer, useModal } from "vue-final-modal";

const props = defineProps(["item"]);

const { open, close } = useModal({
  component: AppModal,
  attrs: {
    url: props.item.url?.replace("https://", "").replace("http://", ""),
    onConfirm() {
      close();
    },
  },
  slots: {
    default: "",
  },
});
</script>

<template>
  <ModalsContainer />
  <div class="relative mb-9">
    <button
      class="absolute left-0 shadow-sm border -top-8 font-semibold px-2 py-1 rounded-md text-sm hover:bg-primary-50 hover:text-primary-900 dark:hover:text-white dark:hover:bg-gray-700 transition-all"
      @click="() => open()"
    >
      ⭐ Atsauksmes
    </button>
    <a
      :href="item.url"
      target="_blank"
      v-if="cardConfig?.type !== 'bullet'"
      data-umami-event="click"
      :data-umami-event-url="item.url"
      class="block h-full shadow-lg border rounded border-gray-200 dark:border-gray-500 hover:border-primary-900 hover:border-solid dark:hover:border-primary-900 transition-all"
      :class="
        cardConfig?.type === 'shadow'
          ? 'shadow-sm'
          : cardConfig?.type === 'dashed'
          ? 'border-dashed'
          : ''
      "
    >
      <DirectoryFeaturedTag class="" v-if="item.featured" />
      <NuxtImg
        v-if="item.card_image"
        sizes="400px"
        :alt="`${item.title}`"
        class="w-full object-cover rounded-t h-44 shadow-md object-left-top"
        loading="lazy"
        :src="item.card_image ?? '/logo.png'"
      />
      <!-- <div
      v-else
      class="w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600"
    >
      {{ item.title }}
    </div> -->
      <div class="p-6 flex flex-col">
        <h3 class="m-0 text-lg font-semibold dark:text-gray-50">
          {{ item.title }}
        </h3>
        <h4 class="p-0 mt-auto font-bold truncate">
          {{ item.url?.replace("https://", "").replace("http://", "") }}
        </h4>
        <p class="mt-2 text-sm">
          {{ item.description }}
        </p>
      </div>
    </a>
  </div>
  <!-- <NuxtLink v-else :to="item._path">
    <div class="inline-flex gap-2 items-center">
      <img class="h-5 w-5" :src="item.cover ?? '/logo.png'" />
      <span class="font-semibold dark:text-gray-50">{{ item.title }}</span> -
      <span class="text-gray-600 dark:text-gray-300">{{
        item.description
      }}</span>
    </div>
  </NuxtLink> -->
</template>
