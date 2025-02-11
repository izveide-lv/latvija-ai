<script setup lang="ts">
import type { LocationQueryRaw } from "vue-router";
import formatString from "~~/util/formatString";

const search: Ref<string> = useState("search");
const selectedTags: Ref<string[]> = useState("tags", () => []);

const searchConfig = useAppConfig().directory.search;
const searchPlaceholder = await getSearchPlaceholder();

async function getSearchPlaceholder() {
  if (searchConfig?.placeholder && searchConfig.placeholder.includes("{0}")) {
    const { data: count } = await useAsyncData("content-count", () =>
      queryContent("/lapa").where({ _extension: "md" }).count()
    );
    return formatString(
      searchConfig?.placeholder ?? "Search among {0} listings",
      count.value
    );
  }

  return searchConfig?.placeholder ?? "Search";
}

const searchInput = useKeyFocus();
</script>

<template>
  <div class="mb-10 not-prose">
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div
          v-if="searchConfig?.icon"
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <Icon
            :name="searchConfig.icon"
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          v-model="search"
          ref="searchInput"
          class="block w-full shadow-md rounded-md py-1.5 border-0 text-gray-900 ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-gray-200 dark:placeholder:text-gray-400"
          :class="searchConfig?.icon ? 'pl-10' : ''"
          :placeholder="searchPlaceholder"
        />
      </div>
    </div>
    <UiTagSelect v-if="searchConfig?.tags?.display === 'select'" />
    <UiTagGrid v-else-if="searchConfig?.tags?.display === 'show-all'" />
  </div>
</template>
