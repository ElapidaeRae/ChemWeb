<!-- A component that allows a user to draw a chemical structure that can be exported as a SMILES string -->
<!-- Should work similarly to ketcher's structure drawing tool, essentially a simplified, reverse-engineered version of ketcher -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

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


	class Node {

		constructor(id: number, x: number, y: number, atom: string) {
			this.id = id;
			this.x = x;
			this.y = y;
			this.atom = atom;
		}

		get id(): number{
			return this.id;
		}

		get x(): number{
			return this.x;
		}

		get y(): number{
			return this.y;
		}

		get atom(): string {
			return this.atom;
		}

		set id(id: number) {
			this.id = id;
		}

		set x(x: number) {
			// check if x is a number within the bounds of the canvas
			if (x < 0 || x > canvasWidth) {
				throw new Error('x must be a number between 0 and 1000');
			} else {
				this.x = x;
			}
		}

		set y(y: number) {
			this.y = y;
		}

		set atom(atom: string) {
			this.atom = atom;
		}


		remove() {
			structure.nodes = structure.nodes.filter(node => node.id !== this.id);
			structure.edges = structure.edges.filter(edge => edge.end1 !== this.id && edge.end2 !== this.id);
		}

		getEdges() {
			return structure.edges.filter(edge => edge.end1 === this.id || edge.end2 === this.id);
		}

		getNeighbors() {
			let neighbors: Node[] = [];
			this.getEdges().forEach(edge => {
				neighbors.push(edge.getOtherEnd(this));
			});
			return neighbors;
		}

		getDegree() {
			return this.getEdges().length;
		}

		connect(node: Node, weight: number) {
			if (this.getNeighbors().includes(node)) {
				let edge = structure.edges.find(edge => (edge.end1 === this.id && edge.end2 === node.id) || (edge.end1 === node.id && edge.end2 === this.id));
				edge.weight += weight;
			} else {
				let edge = new Edge(edgeCount++, this, node, weight);
				structure.edges.push(edge);
			}
		}
	}

	class Edge {
		id: number;
		end1: Node;
		end2: Node;
		weight: number;

		constructor(id: number, end1: Node, end2: Node, weight: number) {
			this.id = id;
			this.end1 = end1;
			this.end2 = end2;
			this.weight = weight;
		}

		getOtherEnd(node: Node) {
			if (this.end1 === node) {
				return this.end2;
			} else if (this.end2 === node) {
				return this.end1;
			}
		}

		remove() {
			structure.edges = structure.edges.filter(edge => edge.id !== this.id);
		}
	}

	function smiles() {
		// convert the structure to a SMILES string
		// first, find the longest path in the graph
	}






</script>
