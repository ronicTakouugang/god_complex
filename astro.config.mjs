// @ts-check
import { defineConfig } from 'astro/config';

// Static output only (PRODUCT.md: hosting undecided, so the build must run anywhere).
export default defineConfig({
  output: 'static',
  build: { assets: 'assets' },
  image: { responsiveStyles: false },
});
