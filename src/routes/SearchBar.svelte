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
		// Send the search query to the server
		fetch(apiroute, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query: value })
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	});
</script>

<div class="w-80 p-2">
	<input type="text" placeholder="Search" class="w-auto p-2 rounded-lg caret-accent flex-grow" bind:value={$search} />
</div>


