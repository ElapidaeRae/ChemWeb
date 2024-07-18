<script lang="ts">
	import picture from '$lib/Hydrazine_Conformer3D_medium.png';
	export let temp = '';
	// Temporary data for the method box
	let method = {
		name: 'Hydrazine',
		description: 'A simple method for synthesizing hydrazine from ammonia and bleach.',
		author: 'John Chemistry',
		date: '2021-10-01',
		tags: ['Nitrogen', 'Volatile', 'Simple', 'Dangerous'],
		picture: picture,
		id: 1
	};

</script>

<div class="p-2 break-inside-avoid">
	<a href="/method:{method.id}" class="w-full">
	<div class="bg-accent w-full rounded-lg p-4">
		<h2 class="text-text text-lg font-bold">{method.name} {temp}</h2>
		<p class="text-text text-sm">by {method.author}</p>
		<img src={method.picture} alt="Method Picture" class="w-full h-64 object-none overflow-clip" />
		<p class="text-text text-sm">{method.description}</p>
		<div class="flex flex-wrap">
			{#each method.tags as tag}
				<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag}</span>
			{/each}
		</div>
	</div>
	</a>
</div>