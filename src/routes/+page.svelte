<svelte:head>
	<title>ChemWeb</title>
	<meta name="description" content="ChemWeb is a website that provides a collection of methods for chemistry experiments." />
	<meta name="keywords" content="Chemistry, Methods, Experiments, Lab, Science" />
	<meta name="author" content="R.N."	>
</svelte:head>

<script lang="ts">
	import MethodBox from '$lib/components/MethodBox.svelte'

	$: console.log('Page updated');

	export let data;
	if (data == null) {
		throw new Error('No methods received');
	}
	let methods = data.data;

</script>

<body class="bg-background min-h-screen">
	<div class="items-center flex flex-col bg-secondary">
		<img src="src/lib/ChemWebWordLogo.svg" alt="ChemWeb Logo" class="p-4 " />
		<p class="text-text text-lg p-8 block">A collection of methods for chemistry experiments.</p>
	</div>
	<h1 class="text-4xl text-text p-8 block ">Methods</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 ">
		{#each methods as method}
			{#if (method.description != null)}
				<MethodBox id={method.id} name={method.name} description={method.description} MethodDetails={method.MethodDetails} author={method.Creator.username}></MethodBox>
			{:else}
				 <MethodBox id={method.id} name={method.name} description="No description available" MethodDetails={method.MethodDetails} author={method.Creator.username}></MethodBox>
			{/if}
		{/each}
	</div>
</body>


