<script lang="ts">
	import defaultImage from '$lib/Hydrazine_Conformer3D_medium.png';
	import { logo } from '$lib/b64';

	export let id: string;
	export let name = 'Method Name';
	export let description = 'Method Description';
	export let author = 'Method Author';


	// Default values
	export let MethodDetails = {
		Tags: [
			{id: 'c123456', name: 'tag1',},
			{id: 'c123457', name: 'tag2',},
			{id: 'c123458', name: 'tag3',}
		],
		CarouselImages: [{
			raw: logo,
			alt: 'alt text',
		}],
		likes: 0,
		id: 'c264',
		createdat: new Date().getTime(),
	};

	let picture;
	let alt: string;
	// If no image is provided, use the default image
	if (MethodDetails.CarouselImages == null || MethodDetails.CarouselImages.length == 0) {
		picture = defaultImage;
	} else {
		// Else set the methodbox image to the first image in the list
		picture = MethodDetails.CarouselImages[0].raw;
		alt = MethodDetails.CarouselImages[0].alt;
	}


	// Like button functionality
	
</script>

<div class="p-2 break-inside-avoid">
	<a href="/method:{id}" class="w-full">
		<div class="bg-secondary w-full rounded-lg p-4 ring ring-accent">
			<h2 class="text-text text-lg font-bold tracking-wide">{name}</h2>
			<p class="text-text text-sm">by {author}</p>
			<img src={picture} alt={alt} class="w-full h-64 object-none overflow-clip" />
			<p class="text-text text-sm line-clamp-4">{description}</p>
			<div class="flex flex-wrap">
				{#each MethodDetails.Tags as tag}
					<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag.name}</span>
				{/each}
			</div>
		</div>
	</a>
<!--		<div class="flex flex-row justify-between items-center">-->
<!--			<button class="bg-primary text-text rounded-lg p-2 mt-4" on:click={changeLikeState}>Like</button>-->
<!--			<p class="text-text text-sm">{MethodDetails.likes} Likes</p>-->
<!--		</div>-->
</div>