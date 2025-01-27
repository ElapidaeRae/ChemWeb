<script lang="ts">
	import '../styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import LayoutBar from '$lib/components/LayoutBar.svelte';
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/stores';
	import { teststrung } from './+layout.server';

	onMount(() => {
		console.log('Page mounted');
		if ($darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	});


</script>

<main class="bg-background h-screen">
	<LayoutBar loggedin={authed} />
	<slot></slot>
	<Footer />
</main>