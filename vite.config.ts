import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['$app/environment', '$app/stores'],

		// simulate an external package, this will get prebundled by vite
		include: [path.resolve('src/lib/stores.ts')]
	},
	ssr: {
		// simulate an external package, this will get prebundled by vite
		external: [path.resolve('src/lib/stores.ts')]
	}
};

export default config;
