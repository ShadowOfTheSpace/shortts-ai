import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "infinity-scroll-left":
          "infinity-scroll-left var(--scroll-time) linear infinite",
      },
      colors: {
        accent: "#8840b5",
        background: "#EFE7F4",
        divider: "#939393",
        error: "#DC2626",
        primary: "#472659",
        secondary: "#B182CE",
        tertiary: "#FFFFFF",
        text: "#130C18",
      },
      fontFamily: {
        baloo: ["var(--font-baloo)"],
        roboto: ["var(--font-roboto)"],
      },
      keyframes: {
        "infinity-scroll-left": {
          to: {
            left: "calc(-1 * var(--element-width))",
          },
        },
      },
      screens: {
        "has-hover": { raw: "(hover: hover) and (pointer: fine)" },
        "no-hover": { raw: "(hover: none) or (pointer: coarse)" },
      },
    },
  },
};
export default config;
