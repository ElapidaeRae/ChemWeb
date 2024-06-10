<!-- Search bar component for use in the header of the website -->
<!-- This component should send a search query to the server and display the results below the search bar -->
<!-- The search results should be updated as the user types in the search bar -->
<!-- The search bar should also have a dropdown menu for filters -->


<script lang="ts">
	import { writable } from 'svelte/store';

	export let search = writable('');

	search.subscribe(value => {
		console.log(value);
	});
</script>

<div class="flex-grow">
	<input type="text" placeholder="Search" class="w-full p-2 rounded-lg" bind:value={$search} />
</div>


