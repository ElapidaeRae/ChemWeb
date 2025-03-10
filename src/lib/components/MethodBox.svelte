<script lang="ts">
	import defaultImage from '$lib/Hydrazine_Conformer3D_medium.png';
	import { prisma } from '$lib/prisma';
	// Temporary data for the method box
	export let method;
	export let id;
	export let name;
	export let description;
	export let author;
	export let tags;
	export let MethodDetails;
	let picture;
	let alt: string;
	if (MethodDetails.CarouselImages.length == 0){
		picture = defaultImage;
	} else {
		picture = MethodDetails.CarouselImages[0].raw;
		alt = MethodDetails.CarouselImages[0].alt;
	}


	console.log('Method:', method);
</script>

<div class="p-2 break-inside-avoid">
	<a href="/method:{id}" class="w-full">
	<div class="bg-secondary w-full rounded-lg p-4 ring ring-accent">
		<h2 class="text-text text-lg font-bold tracking-wide">{name}</h2>
		<p class="text-text text-sm">by {author}</p>
		<img src={'data:image/png;base64,' + picture} alt={alt} class="w-full h-64 object-none overflow-clip" />
		<p class="text-text text-sm line-clamp-4">{description}</p>
		<div class="flex flex-wrap">
			{#each MethodDetails.tags as tag}
				<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag}</span>
			{/each}
		</div>
	</div>
	</a>
</div>