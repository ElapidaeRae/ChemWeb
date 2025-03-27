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

	// export const method = {
	// 	id: 'ctestestestest',
	// 	name: 'Hydrazine',
	// 	description: 'A simple method for synthesizing hydrazine from ammonia and bleach.',
	// 	MethodDetails: {
	// 		tags: ['Nitrogen', 'Volatile'],
	// 		picture: {raw: '/src/lib/Hydrazine_Conformer3D_medium.png'},
	// 		date: 1633046400000,
	// 	},
	// 	Creator: {
	// 		id: 'c153456',
	// 		name: 'John Chemistry',
	// 	},
	// };

	export let data;
	console.log(data.data)
	let method = data.data;

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
		</div>
		<a href="/" class="bg-primary text-text rounded-lg p-2 mt-4">Back to Methods</a>
	</main>
</body>