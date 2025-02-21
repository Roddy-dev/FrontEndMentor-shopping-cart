import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/tests/setup.js"],
    include: ["src/**/*.{test,spec}.{js,jsx}"],
  },
  base:
    process.env.NODE_ENV === "production"
      ? "/FrontEndMentor-shopping-cart/"
      : "/",
});
