<script setup lang="ts">
import type Tag from "~~/types/Tag";

const config = useAppConfig();
const socials = computed(() =>
  config.footer.socials
    ? Object.values(config.footer.socials).filter((i) => i?.icon && i?.link)
    : []
);

const navigation = [
  {
    title: "Katalogs",
    links: [
      { title: "Pievienoties", link: "/pievienoties" },
      { title: "Jaunumi", link: "/jaunumi" },
      { title: "Atbalsts", link: "/atbalsts" },
      { title: "Reklāma", link: "/reklama" },
      { title: "Blogs", link: "https://blog.latvija.ai" },
      {
        title: "Statistika",
        link: "https://stats.izveide.lv/share/bRVSIFNOk3q0Kk40/latvija.ai",
      },
    ],
  },
  {
    title: "Kategorijas",
    links: config.directory.tags
      ?.filter((e) => e && (e as Tag).name)
      .map((e) => ({
        title: (e as Tag).prettyName,
        link: `/tags/${(e as Tag).name}`,
      })),
  },
  {
    title: "Noderīgi",
    links: [
      { title: "Labākie piedāvājumi", link: "https://omnis.lv" },
      { title: "Mājaslapu izveide", link: "https://izveide.lv" },
      { title: "Mājaslapu labošana", link: "https://labojam.lv" },
      {
        title: "Mājaslapu novērtēšana",
        link: "https://lapa.page",
      },
      { title: "Latvijas ziņas", link: "https://zinas.news" },
    ],
  },
  {
    title: "Informācija",
    links: [{ title: "Privātuma politika", link: "/legal/privatuma-politika" }],
  },
];
</script>

<template>
  <footer
    class="border-t dark:border-gray-600 font-display"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <AppLogo />
          <div class="flex space-x-6">
            <a
              v-for="(item, key) in socials"
              :key="item?.link"
              :href="item?.link"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ key }}</span>
              <Icon :name="item.icon!" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div v-for="count in 2" class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                {{ navigation[count - 1].title }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="item in navigation[count - 1].links"
                  :key="item.title"
                >
                  <NuxtLink
                    :to="item.link"
                    class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:dark:text-gray-400 hover:text-gray-900"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                {{ navigation[count + 1].title }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="item in navigation[count + 1].links"
                  :key="item.title"
                >
                  <a
                    :href="item.link"
                    class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:dark:text-gray-400 hover:text-gray-900"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-16 border-t border-gray-900/10 dark:border-gray-600 pt-8 sm:mt-20 lg:mt-24"
      >
        <p class="text-xs leading-5 text-gray-500">
          &copy; {{ new Date().getFullYear() }}
          <a href="https://socialais.dev" class="font-semibold" target="_blank"
            >Sociālais kods</a
          >. E-pasts:
          <a href="mailto:latvija@latvija.ai" class="font-semibold"
            >latvija@latvija.ai</a
          >
        </p>
        <!-- <div class="max-w-lg mt-2">
          <component
            :is="'script'"
            src="https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"
            data-label-1="katalogs"
            data-button-color="#A4343A"
            data-button-text-color="#FFFFFF"
            data-site="https://blog.latvija.ai/"
            data-locale="lv"
            async
          />
        </div> -->
      </div>
    </div>
  </footer>
</template>
