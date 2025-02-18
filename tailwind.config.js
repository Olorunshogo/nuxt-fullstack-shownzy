

import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xxs: "320px",
        xs: "425px",
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        gray: {
          100: "#EEF0F2",
          200: "#DDE1E4",
          300: "#CBD3D7",
          400: "#BAC4C9",
          500: "#A9B5BC",
          600: "#879196",
          700: "#656D71",
          800: "#44484B",
          900: "#222426",
        },
        primary: {
          50: "#E8F6FF",
          100: "#D0ECFD",
          200: "#A0D9FB",
          300: "#71C6FA",
          400: "#41B3F8",
          500: "#12A0F6",
          600: "#0E78B9",
          700: "#09507B",
          800: "#05283E",
          900: "#021019",
        },
        success: {
          100: "#E0F3D4",
          200: "#C0E7A9",
          300: "#A1DC7F",
          400: "#81D054",
          500: "#62C429",
          600: "#4E9D21",
          700: "#3B7619",
          800: "#274E10",
          900: "#142708",
        },
        warning: {
          100: "#FFEDD3",
          200: "#FFDBA6",
          300: "#FFCA7A",
          400: "#FFB84D",
          500: "#FFA621",
          600: "#CC851A",
          700: "#996414",
          800: "#66420D",
          900: "#332107",
        },
        danger: {
          100: "#FFDADA",
          200: "#FFB4B4",
          300: "#FF8F8F",
          400: "#FF6969",
          500: "#FF4444",
          600: "#CC3636",
          700: "#992929",
          800: "#661B1B",
          900: "#330E0E",
        },
        info: {
          100: "#D6F0FF",
          200: "#ADE1FF",
          300: "#84D2FF",
          400: "#5BC3FF",
          500: "#32B4FF",
          600: "#2890CC",
          700: "#1E6C99",
          800: "#144866",
          900: "#0A2433",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(function ({ addBase, AddComponents, matchUtilities, theme }) {
      matchUtilities(
        {
          circle: (space) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            height: space,
            width: space,
          }),
        },
        {
          values: theme("spacing"),
        },
      );
    }),
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
};
