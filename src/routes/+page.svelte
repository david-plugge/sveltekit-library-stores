<script lang="ts">
	import { page } from '$app/stores';
	import { user } from 'custom-package';

	$: console.log('user from page store', $page.data.user);
	$: console.log('user from custom-package', $user);
</script>

<h2>User from page store</h2>
<pre>{JSON.stringify($page.data.user, null, 2)}</pre>

<h2>User from custom-package</h2>
<pre>{JSON.stringify($user, null, 2)}</pre>
