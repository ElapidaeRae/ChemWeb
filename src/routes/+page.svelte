<svelte:head>
	<title>ChemWeb</title>
	<meta name="description" content="ChemWeb is a website that provides a collection of methods for chemistry experiments." />
	<meta name="keywords" content="Chemistry, Methods, Experiments, Lab, Science" />
	<meta name="author" content="R.N.">
</svelte:head>

<script lang="ts">
	import MethodBox from '$lib/components/MethodBox.svelte';
	import image from '$lib/Hydrazine_Conformer3D_medium.png';
	import type { Method,MethodDetails,Image } from '@prisma/client';


	$: console.log('Page updated');

	export let data;
	if (data == null){
		throw new Error('No methods received');
	}

</script>

<body class="bg-background">
	<h1 class="text-4xl text-text p-8 block ">Methods</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 ">
<!--		<MethodBox id="/" name="test" description="test" author="test" MethodDetails={{tags: ['test', 'test', 'test'], CarouselImages: [{raw: image, alt: 'test'}]}}>-->

<!--		</MethodBox>-->
		{#each data.data as method}
			<MethodBox id={method.id} name={method.name} description={method.description} author={method.author} MethodDetails={method.MethodDetails}></MethodBox>
		{/each}
	</div>
</body>


