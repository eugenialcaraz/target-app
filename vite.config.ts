import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components/": fileURLToPath(
        new URL("./src/components/", import.meta.url)
      ),
      "@assets/": fileURLToPath(new URL("./src/assets/", import.meta.url)),
    },
  },
  plugins: [react(), eslint()],
});
