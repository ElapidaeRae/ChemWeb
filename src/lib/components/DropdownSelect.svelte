<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// The options for the dropdown select menu will be sourced from the parent component
	interface option {
		label: string;
		value: string;
	}
	// The options for the dropdown select menu
	export let options: option[] = [];
	// The selected value from the dropdown select menu
	export let selected = '';
	// Classes for tailwind styling
	export let styling = ''

	selected = options[0].value;

	// When the selected value changes, emit an event to the parent component
	const dispatch = createEventDispatcher();
	$: dispatch('change', selected);

</script>

<div class={styling}>
	<select class="border-r-2 border-accent rounded-lg p-1 m-2 px-4" bind:value={selected}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>