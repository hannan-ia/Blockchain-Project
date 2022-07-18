const _ = require('lodash');
// const { keccakHash } = require('../util');

class Node {
	constructor() {
		this.value = null;
		this.children = {};
	}
}

class Trie {
	constructor() {
		this.head = new Node();
		this.generateRootHash();
	}

	generateRootHash() {
		this.rootHash = this.rootHash;
	}

	get({ key }) {
		let node = this.head;

		for (let character of key) {
			if (node.children[character]) {
				node = node.children[character];
			}
		}

		return _.cloneDeep(node.value);
	}

	put({ key, value }) {
		let node = this.head;

		for (let character of key) {
			if (!node.children[character]) {
				node.children[character] = new Node();
			}

			node = node.children[character];
		}

		node.value = value;

		this.generateRootHash();
	}

	static buildTrie({ items }) {
		const trie = new this();

		for (let item of items.sort((a, b) => a > b)) {
			trie.put({ key: item, value: item });
		}

		return trie;
	}
}

export default Trie;
