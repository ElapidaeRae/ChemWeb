<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	let methodID = '';
	onMount(() => {
		page.subscribe(value => {
			methodID = value.params.methodID;
		});
	});

	export let data;
	let method = data.data.method;
	let methodSteps = data.data.steps;
	let userId = data.data.userId;

	let datetime = new Date(method.MethodDetails.createdat).toLocaleDateString();


</script>


<body>
	<main class="bg-background min-h-screen p-6">
		<div class="flex flex-col md:flex-row">
			<Carousel images={['/src/lib/Hydrazine_Conformer3D_medium.png', '/src/lib/ChemWebWordLogoBorder.svg', '/src/lib/Hydrazine_Conformer3D_medium.png']} />
			<div class="bg-accent rounded-lg p-4 md:w-1/3">
				<h2 class="text-text text-lg font-bold">{method.name}</h2>
				<p class="text-text text-sm">{method.description}</p>
				<p class="text-text text-sm">by {method.Creator.username}</p>
				<p class="text-text text-sm">Published: {datetime}</p>
				<div class="flex flex-wrap">
					{#each method.MethodDetails.Tags as tag}
						<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag.name}</span>
					{/each}
				</div>
			</div>
<!--			Like button should go here-->
<!--			<button class="bg-accent rounded-lg p-4 md:w-1/3" on:click={handleLike}>-->
<!--				<span class="text-text text-lg font-bold">Likes</span>-->
<!--				<span class="text-text text-sm">Likes</span>-->
<!--			</button>-->
		</div>
		<div class="flex flex-col md:flex-row my-4">
			<div class="border border-accent rounded-lg p-4 md:w-1/3">
				<h2 class="text-text text-lg font-bold">Steps</h2>
				{#each methodSteps as step}
					<div class="bg-primary rounded-lg p-2 m-2">
						<h3 class="text-text text-md font-semibold">{step.name}</h3>
						<p class="text-text text-sm">{step.description}</p>
					</div>
				{/each}
				<p class="text-text text-sm">Total Steps: {methodSteps.length}</p>
			</div>
		</div>

		<a href="/" class="bg-primary text-text rounded-lg p-2 mt-10">Back to Methods</a>
	</main>
</body>