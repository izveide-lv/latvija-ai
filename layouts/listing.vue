<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
const { data: featured } = await useFeatured();
</script>

<template>
  <div class="p-7 mx-auto">
    <a
      class="block max-w-xl mx-auto"
      :href="page.url"
      target="_blank"
      data-umami-event="click"
      :data-umami-event-url="page.url"
    >
      <h1
        class="hover:dark:text-gray-200 transition-all hover:text-gray-800 mt-8 dark:text-white text-gray-900 text-3xl font-bold"
      >
        {{ page.title }}
      </h1>

      <h2
        class="hover:dark:text-gray-200 transition-all underline hover:text-primary-900 dark:text-white text-gray-900 text-2xl font-semibold"
      >
        {{ page.url.replace("https://", "").replace("http://", "") }}
      </h2>
    </a>
    <p class="mt-2 mx-auto max-w-xl text-lg dark:text-gray-100">
      {{ page.description }}
    </p>

    <a
      :href="page.url"
      target="_blank"
      data-umami-event="click"
      :data-umami-event-url="page.url"
      classs="mx-auto max-w-xl block"
    >
      <NuxtImg
        v-if="page.card_image"
        sizes="1024px"
        :alt="`${page.title}`"
        class="mt-12 mx-auto shadow-xl rounded max-w-[1024px] w-full rounded-t object-cover"
        loading="lazy"
        :src="page.card_image ?? '/logo.png'"
      />
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-10 lg:gap-8 py-10">
      <!-- <div
          class="max-w-prose px-5 lg:col-start-3 lg:px-0 2xl:col-start-4 col-span-4"
        >
          <DocumentProse> <slot /> </DocumentProse>
        </div> -->

      <div
        v-if="config.directory.featured?.showOnAllPages"
        class="col-span-1 lg:col-span-4 2xl:col-span-3 order-last lg:mr-20 mx-5 lg:mx-0"
      >
        <DirectoryFeaturedRecommendation
          v-if="
            config?.directory?.featured?.showOnAllPages &&
            page &&
            !page.featured
          "
          :to="featured?._path"
        />
      </div>
    </div>
  </div>
</template>
