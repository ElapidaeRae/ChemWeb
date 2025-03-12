<script lang="ts">
	import defaultImage from '$lib/Hydrazine_Conformer3D_medium.png';
	export let id;
	export let name = 'Method Name';
	export let description = 'Method Description';
	export let author = 'Method Author';
	export let MethodDetails = {tags: ['tag1', 'tag2', 'tag3'], CarouselImages: [{raw: defaultImage, alt: 'default'}]};
	console.log(MethodDetails);
	let picture;
	let alt: string;
	if (MethodDetails.CarouselImages == null || MethodDetails.CarouselImages.length == 0) {
		picture = defaultImage;
	} else {
		picture = MethodDetails.CarouselImages[0].raw;
		alt = MethodDetails.CarouselImages[0].alt;
	}

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