<script>
	import '../styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import LayoutBar from '$lib/components/LayoutBar.svelte';
</script>

<main class="bg-background">
	<LayoutBar />

	<slot></slot>

	<Footer />

</main>