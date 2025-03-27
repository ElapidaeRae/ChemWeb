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
	// console.log('Data: ' + JSON.stringify(methods))
	// console.log('Data: ' + JSON.stringify(methods[0].MethodDetails));


</script>

<body class="bg-background">
	<h1 class="text-4xl text-text p-8 block ">Methods</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 ">
		{#each methods as method}
			{#if (method.description != null)}
				<MethodBox id={method.id} name={method.name} description={method.description} MethodDetails={method.MethodDetails}></MethodBox>
			{:else}
				 <MethodBox id={method.id} name={method.name} description="No description available" MethodDetails={method.MethodDetails}></MethodBox>
			{/if}
		{/each}
	</div>
</body>


