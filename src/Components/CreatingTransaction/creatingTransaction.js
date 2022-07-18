import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../Axios/axios';
import './creatingTransaction.css';

const CreatingTransaction = () => {
	const [fromAddress, setFromAddress] = useState('');
	const [toAddress, setToAddress] = useState('');
	const [amount, setAmount] = useState(0);
	const [transData, setTransData] = useState({ toAddress, fromAddress, amount });
	const navigate = useNavigate();
	const [tshash, setTshash] = useState(0);
	let ts;

	useEffect(() => {
		setTransData({ toAddress, fromAddress, amount });
	}, [toAddress, fromAddress, amount, ts, tshash]);

	const sendNewTransaction = async () => {
		axios
			.post('/create-transaction', transData)
			.then((response) => {})
			.catch((error) => {
				console.error(error);
			});

		axios
			.get('/create-transaction')
			.then((response) => {
				ts = response.data;
				setTshash(ts);
			})
			.catch((error) => {});
	};
	const handleFromAddress = (Address) => {
		setFromAddress(Address);
	};
	const handleToAddress = (Address) => {
		setToAddress(Address);
	};

	const backToWelcome = () => {
		navigate.push('/');
	};

	let showCreate = (
		<div className="wrapper1 background">
			<div className="header">
				<h2>Blockchain</h2>
				<h4>Creating new transaction</h4>
			</div>
			<div className="intro">
				<label className="label">From Address</label>
				<button
					className={`button ${fromAddress === 'Ben' ? 'active' : ''}`}
					onClick={() => handleFromAddress('Ben')}
				>
					Ben
				</button>
				<button
					className={`button ${fromAddress === 'Michelle' ? 'active' : ''}`}
					onClick={() => handleFromAddress('Michelle')}
				>
					Michelle
				</button>
				<button
					className={`button ${fromAddress === 'Miner' ? 'active' : ''}`}
					onClick={() => handleFromAddress('Miner')}
				>
					Miner
				</button>
			</div>
			<div className="intro">
				<label className="label">To Address</label>
				<button
					className={`button ${toAddress === 'Ben' ? 'active' : ''}`}
					onClick={() => handleToAddress('Ben')}
				>
					Ben
				</button>
				<button
					className={`button ${toAddress === 'Michelle' ? 'active' : ''}`}
					onClick={() => handleToAddress('Michelle')}
				>
					Michelle
				</button>
				<button
					className={`button ${toAddress === 'Miner' ? 'active' : ''}`}
					onClick={() => handleToAddress('Miner')}
				>
					Miner
				</button>
			</div>
			<div className="intro">
				<label className="label">Amount</label>
				<input className="input" onChange={(event) => setAmount(event.target.value)} />
			</div>
			<button className="button go-button" onClick={sendNewTransaction}>
				GO!
			</button>
		</div>
	);

	let hash = (
		<div className="background hash">
			<h1>THIS IS THE HASH OF YOUR TRANSACTION</h1>
			<h1>PLEASE COPY IT IF YOU WOULD LIKE TO VERIFY THE TRANSACTION</h1>
			<div className="hash-message">
				<h1>{tshash}</h1>{' '}
			</div>
			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>
		</div>
	);

	return tshash !== 0 ? hash : showCreate;
};

export default CreatingTransaction;
