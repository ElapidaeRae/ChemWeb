<script lang="ts">
	// New method creation page
	// Make a bunch of entry boxes until i make it look good
	import { enhance } from "$app/forms";
	import StepForm from '$lib/components/StepForm.svelte';
	export let form;
	let steps = 1;
</script>

<body>
	<div class="flex flex-col lg:w-auto items-center p-2">
		<h1>New Method</h1>
		<form class="flex flex-col items-center justify-center" use:enhance>
			<label for="name">Name</label>
			<input type="text" id="name" name="name" class="rounded-md" required />

			<label for="description">Description</label>
			<textarea id="description" name="description" class="rounded-md" required></textarea>

			<label for="tags">Tags</label>
			<p class="text-center text-sm">Separate tags with commas</p>
			<input type="text" id="tags" name="tags" class="rounded-md" required />

			<label for="picture">Picture</label>
			<input type="file" id="picture" name="picture" />

			<h2 class="text-lg font-semibold text-gray-900">Steps</h2>
			<div class="inline-flex items-center justify-center p-2">
				<button class="text-text hover:text-accent text-2xl p-2" on:click={() => steps += 1}>
					<span class="inline-flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						</svg>
						Add
					</span>
				</button>
				<button class="text-text hover:text-accent text-2xl p-2" on:click={() => steps -= 1}>
					<span class="inline-flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						</svg>
						Remove
					</span>
				</button>
			</div>
			{#each Array(steps) as _, i}
				<StepForm ordinal={i + 1} />
			{/each}

			<button class="text-text hover:text-accent rounded-md border-4 border-accent bg-background flex flex-row p-1 m-2" type="submit">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>
				Create Method
			</button>
		</form>
	</div>
</body>