import { Bonds } from '$lib/libraries/bonds';

export class Node {
	// The edges are stored as an array of tuples, where the first element is the node and the second element is the bond weight
	edges: [Node, Bonds][];
	data: any;

	constructor(data) {
		this.edges = [];
		this.data = data;
	}
}
