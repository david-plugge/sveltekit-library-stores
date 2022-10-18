import { browser } from '$app/environment';
import { page } from '$app/stores';
import { derived } from 'svelte/store';

function derivedFromPage(fn) {
	let store;

	return {
		subscribe(run, invalidate) {
			if (!browser || !store) store = derived(page, fn);
			return store.subscribe(run, invalidate);
		}
	};
}

export const pageData = derivedFromPage(($page) => $page.data);
