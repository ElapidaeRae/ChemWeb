<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Carousel from '$lib/components/Carousel.svelte';

	let methodID = '';
	onMount(() => {
		page.subscribe(value => {
			methodID = value.params.methodID;
		});
	});

	// Make a request to the server to get the method with the ID methodID

	// If the request is successful, display the method details
	// If the request is unsuccessful, display an error message

	fetch('/methods:' + methodID)
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to fetch method details');
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error(error);
		});
	const method = {
		name: 'Hydrazine',
		description: 'A simple method for synthesizing hydrazine from ammonia and bleach.',
		author: 'John Chemistry',
		date: '2021-10-01',
		tags: ['Nitrogen', 'Volatile', 'Simple', 'Dangerous'],
		picture: '/src/lib/Hydrazine_Conformer3D_medium.png',
		id: 1
	};

</script>


<body>
	<main class="bg-background min-h-screen p-6">
		<div class="flex flex-col md:flex-row">
			<Carousel images={['/src/lib/Hydrazine_Conformer3D_medium.png', '/src/lib/ChemWebWordLogoBorder.svg', '/src/lib/Hydrazine_Conformer3D_medium.png']} />
			<div class="bg-accent rounded-lg p-4 md:w-1/3">
				<h2 class="text-text text-lg font-bold">{method.name}</h2>
				<p class="text-text text-sm">{method.description}</p>
				<p class="text-text text-sm">by {method.author}</p>
				<p class="text-text text-sm">Published: {method.date}</p>
				<div class="flex flex-wrap">
					{#each method.tags as tag}
						<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag}</span>
					{/each}
				</div>
			</div>
		</div>
			<button class="bg-primary text-text rounded-lg p-2 mt-4" on:click={() => goto('/')}>Back to Methods</button>
	</main>
</body>