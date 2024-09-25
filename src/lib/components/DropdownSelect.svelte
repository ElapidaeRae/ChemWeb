<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	// The options for the dropdown select menu will be sourced from the parent component
	interface option {
		label: string;
		value: string;
	}
	export let options: option[] = [];
	export let selected = '';

	// When the selected value changes, emit an event to the parent component
	const dispatch = createEventDispatcher();
	$: dispatch('change', selected);

</script>

<div class="p-2">
	<select class="border-r-2 border-accent rounded-lg p-1 m-2 px-4" bind:value={selected}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>