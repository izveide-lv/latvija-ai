<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
defineProps(["url"]);

const emit = defineEmits<{
  (e: "confirm"): void;
}>();
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-2xl w-full h-full p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <button
      class="shadow ml-auto px-2 py-1 border rounded text-sm font-semibold dark:text-white"
      @click="emit('confirm')"
    >
      Aizvērt
    </button>
    <iframe :src="'https://atsauksmes.latvija.ai?url=' + url" class="h-full" />
  </VueFinalModal>
</template>
