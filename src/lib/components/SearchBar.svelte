<!-- Search bar component for use in the header of the website -->
<!-- This component should send a search query to the server and display the results below the search bar -->
<!-- The search results should be updated as the user types in the search bar -->
<!-- The search bar should also have a dropdown menu for filters -->


<script lang="ts">
	import { writable } from 'svelte/store';

	const apiroute = 'http://127.0.0.1:8000/search';

	export let search = writable('');

	// Subscribe to the search query
	search.subscribe(value => {
		console.log(value);
		// TODO: Send the search query to the api server
	});
</script>

<div class="p-2 px-8 flex">
	<input type="text" placeholder="Search..." class="w-auto p-2 rounded-lg caret-accent max-sm:hidden" bind:value={$search} />
</div>


