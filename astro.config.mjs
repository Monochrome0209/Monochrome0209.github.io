import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://monochrome0209.github.io/',
  integrations: [sitemap(), starlight({ title: '開発責任者備忘録' }), mdx()],
});
