<script lang="ts">
	import { localStorageStore } from '@babichjacob/svelte-localstorage/svelte-kit';
	import { page } from '$app/stores';
	import { user } from '$lib/stores';
	const textInput = localStorageStore('text-input', 'Initial value');

	$: console.log('user from page store', $page.data.user);
	$: console.log('user from ext. pacakge', $user);
</script>

<h2>User from page store</h2>
<pre>{JSON.stringify($page.data.user, null, 2)}</pre>

<h2>User from external package</h2>
<pre>{JSON.stringify($user, null, 2)}</pre>

<h2>@babichjacob/svelte-localstorage/svelte-kit</h2>
<input bind:value={$textInput} type="text" />
