<script setup lang="ts">
import Tag from "~/types/Tag";
const { selectedTags, availableTags, addTagWithEvent, removeTag } = useTags();
const tags = useAppConfig().directory.tags as Tag[] | undefined;

const getPrettyTagName = (name: string) => {
  // return availableTags.value;
  const tag = tags?.filter((tag) => tag.name == name);
  return tag[0].prettyName;
};
</script>

<template>
  <div class="flex flex-wrap m-0 gap-4 mt-4 py-2">
    <select
      :modelValue="null"
      @change="addTagWithEvent"
      class="border border-dashed border-gray-300 rounded-lg font-medium text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400"
    >
      <option value="" disabled selected>Kategorija</option>
      <option v-for="tag in availableTags" :key="tag.name" :value="tag.name">
        {{ tag.prettyName }}
      </option>
    </select>
    <div
      v-for="myTag in selectedTags"
      class="relative group border-2 shadow-sm font-semibold text-blue-500 bg-blue-600/10 rounded-lg px-1.5 py-1 inline-flex items-center justify-center"
      :class="`border-blue-500`"
    >
      <span
        @click="() => removeTag(myTag)"
        class="absolute text-gray-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-gray-100 flex items-center justify-center -top-4 left-0 bg-white rounded-full h-6 w-6 border dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800"
      >
        <Icon name="tabler:x" />
      </span>
      {{ getPrettyTagName(myTag) }}
    </div>
  </div>
</template>
