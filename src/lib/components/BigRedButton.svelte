<script lang="ts">
	// Dramatic Big Red Button
	// The user clicks once to lift the lid, then again to confirm the action

	import { createEventDispatcher } from 'svelte';

	enum ButtonState {
		Idle,
		Ready,
		Confirmed
	}
	var buttonState = ButtonState.Idle;

	const dispatch = createEventDispatcher();

	export let text = 'Click to lift the lid';

</script>

<div id="BigRedButton">
	{#if buttonState === ButtonState.Idle}
		<button class="rounded bg-accent">
			{text}
		</button>
	{/if}

	{#if buttonState === ButtonState.Ready}
		<button class="rounded-full bg-[#ff0034]">
			Click to confirm
		</button>
	{/if}

	<div>
		<p class="prose "></p>
	</div>
</div>
