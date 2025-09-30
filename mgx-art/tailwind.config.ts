
import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#5F2BFF", ink: "#0d0d10" }
    }
  },
  plugins: []
} satisfies Config;
