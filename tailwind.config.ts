import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xl": "1080px",
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
