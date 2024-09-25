<!-- A component that allows a user to draw a chemical structure that can be exported as a SMILES string -->
<!-- Should work similarly to ketcher's structure drawing tool, essentially a simplified, reverse-engineered version of ketcher -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import type { RDKitModule } from '@rdkit/rdkit';
	import { Graph } from '$lib/libraries/graph';


	self.initRDKitModule().then((instance:RDKitModule) => {
		self.RDKit = instance
		console.log('RDKit module loaded')
		return instance
	})

	const smiles = 'NN'
	var mol = self.RDKit.get_mol(smiles);
	var svg = self.RDKit.get_svg(mol);
	// show the svg in the canvas
	document.getElementById('canvas').innerHTML = svg;


	// the structure can be represented as a node graph
	// each node represents an atom and each edge represents a bond
	// weights can be used to represent the number of bonds between atoms
	// the graph can be represented as an adjacency list

	let structure = {
		nodes: [],
		edges: []
	};

	let selectedNode = null;
	let selectedEdge = null;

	let nodeCount = 0;
	let edgeCount = 0;

	let dispatch = createEventDispatcher();

	export let canvasWidth = 1000;
	export let canvasHeight = 1000;


</script>

<style>
	#canvas {
		width: 100%;
		height: 100%;
	}