import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

import './verifyTransaction.css';

import axios from '../.././Axios/axios';

const VerifyTransaction = () => {
	const [hashTransaction, setHashTransaction] = useState(0);
	const [transData, setTransData] = useState({ hashTransaction });
	const [response, setResponse] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		setTransData({ hashTransaction });
	}, [hashTransaction]);

	const backToWelcome = () => {
		navigate('/');
	};

	const sendData = async (e) => {
		axios
			.post('/verify-transaction', transData)
			.then((res) => {
				axios
					.get('/verify-transaction')
					.then((res) => {
						let r = res.data;
						setResponse(r);
					})
					.catch((error) => {});
			})
			.catch((error) => {});
	};

	const backFromVerify = (
		<div className="background backFromVerify verify">
			<h1>THIS IS YOUR TRANSACTION</h1>
			<div className="hash-message">
				{response === 'Could not verify the transaction' ? (
					response
				) : (
					<ul>
						<li>From address: {response.fromAddress}</li>
						<li>To address: {response.toAddress}</li>
						<li>Amount: {response.amount}</li>
						<li>timesTamp: {response.timesTamp}</li>
						<li>hashTransaction: {response.hashTransaction}</li>
						<li>signature: {response.signature}</li>
					</ul>
				)}
			</div>
			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>
		</div>
	);

	const showVerify = (
		<div className="wrapper background">
			<div className="header">
				<h2>Blockchain</h2>
				<h4>Verify transaction</h4>
			</div>

			<div>
				<label className="label">Hash Transaction</label>
				<input className="input" onChange={(event) => setHashTransaction(event.target.value)} />
			</div>
			<button className="button go-button" onClick={sendData}>
				GO!
			</button>
		</div>
	);

	return response !== '' ? backFromVerify : showVerify;
};

export default VerifyTransaction;
