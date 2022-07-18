import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Tree from 'react-tree-graph';

import axios from '../../Axios/axios';

import './GetBlockchainTrie.css';

const GetBlockchainTrie = () => {
	const [trieData, setTrieData] = useState([]);
	const navigate = useNavigate();

	const backToWelcome = () => {
		navigate('/');
	};

	useEffect(() => {
		getReq();
	}, []);

	const getReq = async () => {
		try {
			const response = await axios.get('/get-blockchain-trie');
			let resData = response.data.blockchainTrie;
			let resData2 = [];

			console.log('resData', resData);
			for (let i = 1; i < resData.length; i++) {
				resData2.push(resData[i]);
			}
			setTrieData(resData2);
		} catch (e) {}
	};

	console.log('trieData', trieData);
	return (
		<div className="wrapper2 background">
			<div className="header">
				<h2>Blockchain</h2>
				<h4>Get Blockchain's trie</h4>
			</div>
			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>

			<div className="trie">
				{trieData.map((element, index) => {
					console.log('element: ', element);
					return (
						<Tree
							data={element}
							nodeRadius={15}
							margins={{ top: 10, bottom: 5, left: 10, right: 350 }}
							height={400}
							width={500}
							animated={true}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GetBlockchainTrie;
