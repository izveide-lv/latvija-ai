<script setup lang="ts">
import type ListingContent from "~/types/Listing";
import formatString from "~/util/formatString";
import Tag from "~/types/Tag";

const route = useRoute();
const config = useAppConfig();

const title = computed(() =>
  formatString(config.directory.tagPages?.title || "All {0}", route.params.slug)
);
const description = computed(() =>
  formatString(
    config.directory.tagPages?.description || "All {0}",
    route.params.slug
  )
);

const tags = useAppConfig().directory.tags as Tag[] | undefined;

const { data } = await useAsyncData(`tag-${route.params.slug}`, () =>
  queryContent("/dir")
    .where({
      $and: [
        { _extension: "md" },
        { tags: { $icontains: route.params.slug as string } },
      ],
    })
    .find()
);

const getPrettyTagName = (name: string) => {
  // return availableTags.value;
  const tag = tags?.filter((tag) => tag.name == name);
  return tag[0].prettyName;
};

// SEO setup
const app = useNuxtApp();

useSeoMeta({
  title: "Latvija.ai" || "Missing Title",
  description: description.value || "Missing Description",
});

defineOgImage({
  url: "/latvija.ai.webp",
});

definePageMeta({
  documentDriven: false,
});
</script>

<template>
  <div class="">
    <h1>{{ getPrettyTagName(title) }}</h1>
    <DirectoryPureGrid :listings="data as unknown as ListingContent[]" />
    <br />
    <NuxtLink class="pt-12 mt-4 text-md" to="/"
      >← Atgriezties uz sākumu</NuxtLink
    >

    <SponsorExample
      title="Tiec pie bezmaksas mājaslapas!"
      description="Tiec pie ⚡ ātras un 🔐 drošas mājaslapas pilnīgi bez maksas! Pieteikšanās līdz 28. februārim."
      url="https://izveide.lv/bezmaksas"
    ></SponsorExample>
  </div>
</template>
