<script lang="ts">
	import picture from '$lib/Hydrazine_Conformer3D_medium.png';
	import { prisma } from '$lib/prisma';
	// Temporary data for the method box
	let method = {
		name: 'Hydrazine',
		description: 'A simple method for synthesizing hydrazine from ammonia and bleach.',
		author: 'John Chemistry',
		date: '2021-10-01',
		picture: picture,
		id: 'ctestestest',
		MethodDetails: {
			likes: 3,
			tags: ['Nitrogen', 'Volatile', 'Simple', 'Dangerous']
		}
	};

	// Like the method, increment the likes count by 1 and update the database accordingly
	function likeMethod() {
		method.MethodDetails.likes++;
		console.log('Liked method:', method.name);
		prisma.method.update({
			where: {
				id: method.id
			},
			include: {
				MethodDetails: true
			},
			data: {
				likes: method.MethodDetails.likes
			}
		});
	}

</script>

<div class="p-2 break-inside-avoid">
	<a href="/method:{method.id}" class="w-full">
	<div class="bg-secondary w-full rounded-lg p-4 ring ring-accent">
		<h2 class="text-text text-lg font-bold tracking-wide">{method.name}</h2>
		<p class="text-text text-sm">by {method.author}</p>
		<img src={method.picture} alt="Method Product" class="w-full h-64 object-none overflow-clip" />
		<p class="text-text text-sm line-clamp-4">{method.description}</p>
		<div class="flex flex-wrap">
			{#each method.MethodDetails.tags as tag}
				<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag}</span>
			{/each}
		</div>
	</div>
	</a>
</div>