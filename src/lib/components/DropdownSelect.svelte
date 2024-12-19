<script lang="ts">
	import { run } from 'svelte/legacy';

	import { createEventDispatcher } from 'svelte';

	// The options for the dropdown select menu will be sourced from the parent component
	interface option {
		label: string;
		value: string;
	}
	
	
	
	interface Props {
		// The options for the dropdown select menu
		options?: option[];
		// The selected value from the dropdown select menu
		selected?: string;
		// Classes for tailwind styling
		styling?: string;
	}

	let { options = [], selected = $bindable(''), styling = '' }: Props = $props();

	selected = options[0].value;

	// When the selected value changes, emit an event to the parent component
	const dispatch = createEventDispatcher();
	run(() => {
		dispatch('change', selected);
	});

</script>

<div class={styling}>
	<select class="border-r-2 border-accent rounded-lg p-1 m-2 px-4" bind:value={selected}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>