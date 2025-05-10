import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({ include: ["https", "http", "events", "stream", "buffer"] }),
    react(),
    mkcert(),
  ],
});
