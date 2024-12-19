<script lang="ts">
	import '../styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import LayoutBar from '$lib/components/LayoutBar.svelte';

	let cookies = {
		set: (value) => {
			document.cookie = `darkMode=${value}; path=/`;
		},
		get: (name) => {
			let cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith(name));
			if (cookie) {
				return cookie.split('=')[1] === 'true';
			}
			return false;
		}
	};

</script>

<main class="bg-background h-screen">
	<LayoutBar />

	<slot></slot>

	<Footer />
</main>