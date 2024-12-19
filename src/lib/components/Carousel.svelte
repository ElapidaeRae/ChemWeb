<script lang="ts">
	// An image carousel component
	// Props:
	// - images: an array of image URLs
	// - interval: the interval between image changes in milliseconds
	// - autoplay: a boolean to enable or disable autoplay
	// - loop: a boolean to enable or disable looping
	// - controls: a boolean to enable or disable controls
	// - indicators: a boolean to enable or disable indicators
	// - pause: a boolean to enable or disable pause on hover

	import { onMount, onDestroy } from 'svelte';


	export let images: string[] = [];
	export let interval = 5000;
	export let autoplay = false;
	export let loop = true;
	export let controls = true;
	export let indicators = true;
	export let pause = false;

	let currentImage = 0;
	let timer: number | null = null;
	let isPaused = false;

	const nextImage = () => {
		currentImage = (currentImage + 1) % images.length;
	};

	const previousImage = () => {
		currentImage = (currentImage - 1 + images.length) % images.length;
	};

	const goToImage = (index) => {
		currentImage = index;
	};

	const startAutoplay = () => {
		timer = setInterval(nextImage, interval);
	};

	const stopAutoplay = () => {
		clearInterval(timer);
	};

	const handleMouseEnter = () => {
		if (pause) {
			isPaused = true;
			stopAutoplay();
		}
	};


	const handleMouseLeave = () => {
		if (pause) {
			isPaused = false;
			startAutoplay();
		}
	};


	// Start autoplay when the component is mounted
	onMount(() => {
		if (autoplay) {
			startAutoplay();
		}
	});

	// Stop autoplay when the component is destroyed
	onDestroy(() => {
		stopAutoplay();
	});

</script>

<!-- Carousel container -->
<div class="relative border-4 border-primary rounded-md flex-grow p-2 mb-2 md:mr-4">
	<!-- Carousel images -->
	{#if images.length > 0}
		{#if loop}
			{#if controls}
				<button class="text-text absolute top-1/2 left-0 transform -translate-y-1/2" on:click={previousImage}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
					</svg>
				</button>
			{/if}
			{#if indicators}
				<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
					{#each images as image, index}
						<button class="p-1 m-1 rounded-full bg-accent text-text" on:click={() => goToImage(index)}>{index + 1}</button>
					{/each}
				</div>
			{/if}
			{#if controls}
				<button class="text-text absolute top-1/2 right-0 transform -translate-y-1/2" on:click={nextImage}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			{/if}
		{/if}
		<div class="flex justify-center items-center h-96">
			<img src={images[currentImage]} alt="Carousel" class="object-center object-scale-down h-4/5" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} />
		</div>
	{/if}
</div>

