<svelte:head>
	<title>ChemWeb</title>
	<meta name="description" content="ChemWeb is a website that provides a collection of methods for chemistry experiments." />
	<meta name="keywords" content="Chemistry, Methods, Experiments, Lab, Science" />
	<meta name="author" content="R.N.">
</svelte:head>

<script lang="ts">
	import MethodBox from '$lib/components/MethodBox.svelte';
	import picture from '$lib/Hydrazine_Conformer3D_medium.png';

	$: console.log('Page updated');

	export let data;
	if (data == null){
		throw new Error('No methods received');
	}
	console.log('Data:', data);

</script>

<body class="bg-background">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 ">
		{#each data as method}
			<MethodBox {...method} />
		{/each}
	</div>
</body>


