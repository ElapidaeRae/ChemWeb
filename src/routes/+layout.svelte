<script lang="ts">
	import '../styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import LayoutBar from '$lib/components/LayoutBar.svelte';
	import { onMount } from 'svelte';
	import { darkMode, loggedIn } from '$lib/stores';

	onMount(() => {
		console.log('Page mounted');
		if ($darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	});
	// get the data from the server
	let auth;

</script>

<main class="bg-background h-screen">
	<LayoutBar loggedin={$loggedIn} />
	<slot></slot>
	<Footer />
</main>