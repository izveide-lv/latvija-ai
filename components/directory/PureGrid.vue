<script setup lang="ts">
import type ListingContent from "~/types/Listing";

defineProps({
  listView: { type: Boolean, default: false },
  showSubmit: { type: Boolean, default: false },
  submitFirst: {
    type: Boolean,
    default: false,
  },
  listings: {
    type: Array<ListingContent>,
    required: true,
  },
});
</script>

<template>
  <div
    class="not-prose pt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <DirectoryEmptyQueryIndicator v-if="listings?.length === 0" />
    <DirectorySubmitBox v-if="showSubmit && submitFirst" />
    <UiCard v-for="(listing, index) in listings" :item="listing" :key="index" />
    <DirectorySubmitBox v-if="showSubmit && !submitFirst" />
  </div>
</template>
