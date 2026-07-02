import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  // Allow Vite to import images from the root-level img/ directory
  vite: {
    server: {
      fs: { allow: ['..'] },
    },
    // Pre-bundle globe.gl (and its three.js peer) at dev-server start so the
    // personal page never hits Vite's "504 Outdated Optimize Dep" race where
    // the page script references a stale dep hash before re-optimization finishes.
    optimizeDeps: {
      include: ['globe.gl', 'three'],
    },
  },
});
