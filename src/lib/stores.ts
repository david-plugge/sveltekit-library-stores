import type { Page } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { page } from '$app/stores';
import { derived, type Readable } from 'svelte/store';

function derivedFromPage<T>(fn: (page: Page) => T): Readable<T> {
	let store: Readable<T>;

	return {
		subscribe(run, invalidate?) {
			if (!browser || !store) store = derived(page, fn);
			return store.subscribe(run, invalidate);
		}
	};
}

export const user = derivedFromPage<{ name: string }>(($page) => $page.data.user);
