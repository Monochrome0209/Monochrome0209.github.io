import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://monochrome0209.github.io/',
  integrations: [
    sitemap(),
    starlight({
      title: '開発責任者備忘録',
      sidebar: [
        {
          label: 'ガイド',
          items: [
            { label: '💕 マインド', link: '/mind', badge: '🚧WIP🚧' },
            {
              label: '🏫 プロジェクトマネジメント',
              link: '/project',
              badge: '🚧WIP🚧',
            },
          ],
        },
        {
          label: '実践',
          items: [
            { label: '🤔 見積もり', link: '/quotation', badge: '🚧WIP🚧' },
            { label: '📝 設計', link: '/infrastructure', badge: '🚧WIP🚧' },
            { label: '🖼️ デザイン', link: '/design', badge: '🚧WIP🚧' },
            { label: '⚒️ 開発', link: '/development', badge: '🚧WIP🚧' },
            { label: '🚀 リリース', link: '/release', badge: '🚧WIP🚧' },
            { label: '🛡️ 保守', link: '/maintenance', badge: '🚧WIP🚧' },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
