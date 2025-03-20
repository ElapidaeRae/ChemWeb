<script lang="ts">
	import defaultImage from '$lib/Hydrazine_Conformer3D_medium.png';
	import { logo } from '$lib/b64';
	export let id: string;
	export let name = 'Method Name';
	export let description = 'Method Description';
	export let author = 'Method Author';

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
			<img src={picture} alt={alt} class="w-full h-64 object-none overflow-clip" />
			<p class="text-text text-sm line-clamp-4">{description}</p>
			<div class="flex flex-wrap">
				{#each MethodDetails.Tags as tag}
					<span class="text-text text-sm bg-primary rounded-lg p-1 m-1">{tag.name}</span>
				{/each}
			</div>
		</div>
	</a>
</div>