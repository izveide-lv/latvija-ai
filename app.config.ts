// import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Latvija.ai",
    logo: "",
    iconLogo: "fluent-emoji-flat:hundred-points",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "",
    description: "",
    url: "https://latvija.ai",
    favicon: {
      image: "/favicon.webp",
      emoji: "",
    },
  },
  directory: {
    search: {
      placeholder: "Meklē starp {0} mājaslapām",
      icon: "tabler:search",
      tags: {
        // options: none,select,show-all,
        display: "show-all",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Nekas netika atrasts.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:zoom-exclamation",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Pievienot mājaslapu",
        description:
          "Pievieno katalogam arī savu mājaslapu — tas ir bez maksas!",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "💯",
    },
    tags: [
      { name: "jaunumi", prettyName: "🆕 Jaunumi", color: "orange" },
      { name: "populari", prettyName: "⚡ Populāri", color: "orange" },
      { name: "organizacijas", prettyName: "🪴 Organizācijas", color: "teal" },
      { name: "pakalpojumi", prettyName: "🤝 Pakalpojumi", color: "orange" },
      { name: "profesionali", prettyName: "👨‍🔬 Profesionāļi", color: "teal" },
      { name: "uznemumi", prettyName: "🏢 Uzņēmumi", color: "red" },
      { name: "veikali", prettyName: "🛒 Veikali", color: "blue" },
      { name: "blogi", prettyName: "📃 Blogi", color: "green" },
      { name: "riki", prettyName: "🧰 Rīki", color: "yellow" },
      { name: "citi", prettyName: "🎲 Citi", color: "yellow" },

      
    ],
    tagPages: {
      title: "{0}",
      description:
        "Apskati visas kategorijas {0} mājaslapas",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Apskati arī mūsu blogu! 📰",
      link: "https://blog.latvija.ai",
      brandText: "Interesanti",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Katalogs", to: "/" },
        { name: "Jaunumi", to: "/jaunumi" },
        { name: "Atbalsts", to: "/atbalsts" },
        { name: "Reklāma", to: "/reklama" },
        {
          name: "Blogs",
          to: "https://blog.latvija.ai",
          target: "_blank",
        },
        {
          name: "Statistika",
          to: "https://stats.izveide.lv/share/bRVSIFNOk3q0Kk40/latvija.ai",
          target: "_blank",
        },
      ],
    },
    actionButton: {
      text: "Pievienoties",
      href: "/pievienoties",
    },
  },
  footer: {
    description: "Latvijas labāko mājaslapu katalogs.",
    socials: {
      github: {
        link: "https://github.com/izveide-lv/latvija-ai",
        icon: "tabler:brand-github",
      },
      facebook: {
        link: "https://facebook.com/labojam",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "https://instagram.com/labojam.lv",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "https://x.com/labojam",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "https://www.youtube.com/@SocialaisKods",
        icon: "tabler:brand-youtube",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
