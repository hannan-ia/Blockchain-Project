import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tree from 'react-tree-graph';

import axios from '../../Axios/axios';

import './getBlockTrie.css';

const GetBlockTrie = () => {
	const [trieData, setTrieData] = useState(null);
	const navigate = useNavigate();
	const [hashTransaction, setHashTransaction] = useState(null);

	const backToWelcome = () => {
		navigate.push('/');
	};

	const sendAddress = async () => {
		try {
			console.log('hashTransaction', hashTransaction);
			axios
				.post('/get-block-trie', { hashTransaction })
				.then((response) => {
					console.log('Response: ', response.data);
					setTrieData(response.data);
				})
				.catch((error) => {});
		} catch (e) {}
	};
	return (
		<div className="wrapper background">
			<div className="header">
				<h2>Blockchain</h2>
				<h4>Get Block's transaction trie</h4>
			</div>

			<div>
				<label className="label">Hash Transaction</label>
				<input className="input" onChange={(event) => setHashTransaction(event.target.value)} />
			</div>

			<button className="button go-button" onClick={sendAddress}>
				GO!
			</button>
			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>

			{trieData !== null ? (
				<div className="trie">
					<Tree
						data={trieData}
						nodeRadius={15}
						margins={{ top: 20, bottom: 10, left: 20, right: 700 }}
						height={800}
						width={1100}
						animated={true}
					/>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default GetBlockTrie;
