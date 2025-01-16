<script lang="ts">
	import '../styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import LayoutBar from '$lib/components/LayoutBar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Page mounted');
	});

</script>

<main class="bg-background h-screen">
	<LayoutBar />

	<slot></slot>

	<Footer />
</main>