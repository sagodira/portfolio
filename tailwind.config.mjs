import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://sagodira.github.io',
    base: '/',
    integrations: [mdx(), sitemap(), react(), tailwind()],
});
