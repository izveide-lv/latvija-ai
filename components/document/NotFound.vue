<template>
  <div
    class="not-prose mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 lg:px-8"
  >
    <p
      class="text-base font-semibold leading-8 text-primary-900 dark:text-primary-100"
    >
      404
    </p>
    <h1
      class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
    >
      Lapa nav atrasta
    </h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
      Pieprasītā lapa netika atrasta, taču, iespējams, tā atrodas
      <a
        class="font-semibold underline"
        href="https://blog.latvija.ai"
        target="_blank"
        >Latvija.ai blogā</a
      >.
    </p>
    <div class="mt-10">
      <NuxtLink to="/" class="mr-2">
        <UiButton>Doties uz sākumu</UiButton>
      </NuxtLink>
      <a href="https://blog.latvija.ai" target="_blank">
        <UiButton>Doties uz blogu</UiButton>
      </a>
    </div>
  </div>
</template>
