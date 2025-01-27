<svelte:head>
	<title>ChemWeb</title>
	<meta name="description" content="ChemWeb is a website that provides a collection of methods for chemistry experiments." />
	<meta name="keywords" content="Chemistry, Methods, Experiments, Lab, Science" />
	<meta name="author" content="R.N.">
</svelte:head>

<script lang="ts">
	import MethodBox from '$lib/components/MethodBox.svelte';
	import { getRandomMethod } from '$lib/database';

	$: console.log('Page updated');

	// TODO: Dynamically load methods from the database
	let methoddata = getRandomMethod(5)
	if (methoddata == null) {
		methoddata = [];
	}	

</script>

<body class="bg-background">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 ">
		{#each methoddata as data}
			<MethodBox method=data/>
		{/each}
	</div>
</body>


