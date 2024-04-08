import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.MODE === 'development' ? 'http://localhost:4321' : 'https://lospampa.vercel.app',
	integrations: [mdx(), sitemap(), tailwind()],
	i18n: {
		locales: ['en', 'br'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false
		}
	}
});
