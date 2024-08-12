<!-- Search bar component for use in the header of the website -->
<!-- A very important component that allows users to search for methods by name, author, tag or most importantly, by structure -->
<!-- Structure search is a feature that allows users to draw a chemical structure and search for methods that mention chemicals with similar structures -->
<!-- This component will be used in the header of the website -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let searchQuery = '';
	enum SearchType {
		Name = 'name',
		Author = 'author',
		Tag = 'tag',
		Structure = 'structure'
	}
	let searchType: SearchType = SearchType.Name;

	const dispatch = createEventDispatcher();

	function search() {
		dispatch('search', { query: searchQuery, type: searchType });
	}

</script>

<div class="flex">
	<div class="flex items-center border-2 border-accent rounded-lg bg-[#ffffff]">
		{#if searchType === SearchType.Structure}
		<!--	If the user is searching by structure, use the structure search dropdown, else use the searchbar-->
			
		<input type="text" class="rounded-lg border-none" bind:value={searchQuery} placeholder="Search..." />
		<select class="border-2 border-accent rounded-lg p-1 ml-2 -mr-0.5 h-full" bind:value={searchType}>
			<option value={SearchType.Name}>Name</option>
			<option value={SearchType.Author}>Author</option>
			<option value={SearchType.Tag}>Tag</option>
			<option value={SearchType.Structure}>Structure</option>
		</select>
		{/if}
	</div>
	<button class="border-2 border-accent rounded-lg p-1 m-2" on:click={search}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
		</svg>
	</button>
</div>
