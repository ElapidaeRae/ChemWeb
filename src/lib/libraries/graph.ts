// A graph class meant to represent a chemical structure as a graph of atoms and bonds
// Nodes are atoms, edges are bonds
// The weights of the edges are bond orders
// The graph is undirected
// The graph is stored as an adjacency list

import { Node } from './node';
import type { Bonds } from '$lib/libraries/bonds';

export class Graph {
	constructor() {
		this.nodes = [];
	}

	// Add a node to the graph
	addNode(data) {
		const node = new Node(data);
		this.nodes.push(node);
		return node;
	}

	// Add an edge to the graph
	addEdge(node1: Node, node2: Node, weight: Bonds) {
		node1.edges.push({ node: node2, weight });
		node2.edges.push({ node: node1, weight });
	}

	// Remove a node from the graph
	removeNode(node: Node) {
		this.nodes = this.nodes.filter(n => n !== node);
		this.nodes.forEach(n => {
			n.edges = n.edges.filter(e => e.node !== node);
		});
	}

	// Remove an edge from the graph
	removeEdge(node1: Node, node2: Node) {
		node1.edges = node1.edges.filter(e => e.node !== node2);
		node2.edges = node2.edges.filter(e => e.node !== node1);
	}

	// Get the shortest path between two nodes
	shortestPath(node1: Node, node2: Node) {
		const visited = new Set();
		const queue = [{ node: node1, path: [] }];
		while (queue.length > 0) {
			const { node, path } = queue.shift();
			if (node === node2) return path;
			if (visited.has(node)) continue;
			visited.add(node);
			node.edges.forEach(edge => {
				queue.push({ node: edge.node, path: [...path, edge] });
			});
		}
		return null;
	}

	longestPath(node1: Node, node2: Node) {
		const visited = new Set();
		const queue = [{ node: node1, path: [] }];
		let longest = [];
		while (queue.length > 0) {
			const { node, path } = queue.shift();
			if (node === node2) {
				if (path.length > longest.length) longest = path;
				continue;
			}
			if (visited.has(node)) continue;
			visited.add(node);
			node.edges.forEach(edge => {
				queue.push({ node: edge.node, path: [...path, edge] });
			});
		}
		return longest;
	}

	findMainBranch() {
		// Find the longest path in the graph
		const path = this.longestPath(this.nodes[0], this.nodes[1]);
		
	}
}
