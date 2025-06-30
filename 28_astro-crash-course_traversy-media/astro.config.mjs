import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  redirects: {
    "/blog": "/blog/1",
  },
});
