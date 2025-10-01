import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#5F2BFF",
        ink: "#0d0d10",
      },
      boxShadow: {
        brand: "0 8px 24px rgba(95,43,255,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
