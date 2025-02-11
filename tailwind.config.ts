import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["Onest"],
      },
      colors: {
       primary: {
          '50': '#fef2f2',
          '100': '#fce9e7',
          '200': '#f9d2d2',
          '300': '#f4aead',
          '400': '#ce3040',
          '500': '#e35057',
          '600': '#ce3040',
          '700': '#ae2233',
          '800': '#9d2235',
          '900': '#7d1e2f',
          '950': '#450c15',
        },
        secondary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
};
