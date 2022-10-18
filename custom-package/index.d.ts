import type { Page } from '@sveltejs/kit';
import type { Readable } from 'svelte/store';

export const user: Readable<{ name: string }>;
