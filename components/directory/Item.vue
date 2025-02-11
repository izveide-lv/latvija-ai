<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<template>
  <div class="col-span-1 rounded relative group transition-all">
    <DirectoryFeaturedTag v-if="item.featured" />
  </div>
</template>
