<!-- Search bar component for use in the header of the website -->
<!-- A very important component that allows users to search for methods by name, author, tag or most importantly, by structure -->
<!-- Structure search is a feature that allows users to draw a chemical structure and search for methods that mention chemicals with similar structures -->
<!-- This component will be used in the header of the website -->

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import DropdownSelect from '$lib/components/DropdownSelect.svelte';

	let searchQuery = '';

	interface searchType {
		[key: string]: string;
	}

	const searchTypes = [
		{ label: 'All', value: 'all' },
		{ label: 'Name', value: 'name' },
		{ label: 'Author', value: 'author' },
		{ label: 'Tag', value: 'tag' }
	];

	// Get the current search type from the dropdown

	const dispatch = createEventDispatcher();

	function search() {
		dispatch('search', { query: searchQuery, type: searchType });
	}

</script>

<div class="flex content-center">

	<div class="flex items-center">
	<DropdownSelect options={searchTypes} styling=""/>
		<input type="search" class="border-r-2 border-accent rounded-lg m-2" bind:value={searchQuery} placeholder="Search" />
		<button class="border-2 border-accent rounded-lg p-1 m-2" on:click={search}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
			</svg>
		</button>
	</div>

</div>
