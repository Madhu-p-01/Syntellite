// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // This tells Vite to assume the app is at the root of the domain.
  // If you were deploying to syntellite.com/app/, it would be '/app/'.
});
