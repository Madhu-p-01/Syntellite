// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // If you've placed .htaccess directly in the 'public' folder
  publicDir: "public", // This is usually the default, but confirm.
});
