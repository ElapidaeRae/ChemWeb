<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	function testPrisma() {
		return fetch('/api/test')
			.then((res) => res.json())
			.then((data) => data);
	}

	const test = async () => {
		const res = await testPrisma();
		console.log(res);
	};

	onMount(() => {
		test();
	});
</script>

<h1>Test +page</h1>




