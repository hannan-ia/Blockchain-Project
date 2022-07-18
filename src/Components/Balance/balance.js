import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../.././Axios/axios';

import './balance.css';

const Balance = () => {
	const [balance, setBalance] = useState(undefined);
	const [Address, setAddress] = useState('');
	const [balanceData, setBalanceData] = useState({ Address });
	const navigate = useNavigate();

	useEffect(() => {
		setBalanceData({ Address });
	}, [Address]);

	const handleBalance = (address) => {
		setAddress(address);
		setBalance(undefined);
	};

	const backToWelcome = () => {
		navigate('/');
	};

	const handleGetBalance = () => {
		axios
			.post('/get-balance', balanceData)
			.then((response) => {
				console.log('Response', response.data);
				setBalance(response.data.balance);
			})
			.catch((error) => {});
	};

	return (
		<div className="wrapper background">
			<div className="intro">
				<h1>Choose who's balance you would like to see</h1>
				<div className="buttons">
					<button
						className={`button ${Address === 'Ben' ? 'active' : ''}`}
						onClick={() => handleBalance('Ben')}
					>
						Ben's balance
					</button>
					<button
						className={`button ${Address === 'Michelle' ? 'active' : ''}`}
						onClick={() => handleBalance('Michelle')}
					>
						Michelle's balance
					</button>
					<button
						className={`button ${Address === 'Miner' ? 'active' : ''}`}
						onClick={() => handleBalance('Miner')}
					>
						Miner's balance
					</button>
				</div>
			</div>
			<button className="button go-button" onClick={handleGetBalance}>
				GO!
			</button>
			<h1> {balance === undefined ? '' : `${Address}'s balance :  ${balance}`} </h1>

			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>
		</div>
	);
};

export default Balance;
