import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-modules/components/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
