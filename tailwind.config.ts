import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

export default {
  content: ["./src/**/*.tsx", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [flowbiteReact],
} satisfies Config;