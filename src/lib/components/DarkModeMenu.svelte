<!-- Dark mode Toggle Switch -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/stores';

	// Update the dark mode store
	function updateDarkMode() {
		darkMode.update((value) => !value);
	}
	$: console.log($darkMode);

</script>

<button class="text-text shadow-inner shadow-primary hover:bg-background-400 rounded-lg m-1 p-1 w-full" id="darkmodebutton" on:click={() => updateDarkMode()}>
	Dark Mode
</button>

