<script lang="ts">
	import '../styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import LayoutBar from '$lib/components/LayoutBar.svelte';
	export let data;
</script>

<main class="bg-background h-screen overscroll-contain">
	<LayoutBar loggedIn={data.auth} username="{data.sub}"/>
	<slot></slot>
	<Footer />
</main>