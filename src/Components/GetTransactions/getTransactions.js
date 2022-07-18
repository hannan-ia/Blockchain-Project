import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import axios from '../../Axios/axios';
import Table from '../Table/table';
import Columns from '../Table/columns';

import './getTransactions.css';

const Styles = styled.div`
	padding: 1rem;
	margin: 1rem;
	width: 100%;

	table {
		border-spacing: 0;
		border: 1px solid black;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;
			max-width: 250px;
			overflow: hidden;
			pre {
				font-size: 22px;
			}
			:last-child {
				border-right: 0;
			}
		}
	}
`;

const GetBalance = () => {
	const [address, setAddress] = useState('');
	const [transactions, setTransactions] = useState(null);
	const [dataAddress, setDataAddress] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		setDataAddress({ address });
	}, [address]);

	const handleTransactionsAddress = (address) => {
		setAddress(address);
	};

	const backToWelcome = () => {
		('/');
	};

	const renderRowSubComponent = useCallback(
		({ row }) => (
			<pre>
				<code>{JSON.stringify({ values: row.values }, null, 2)}</code>
			</pre>
		),
		[]
	);

	const sendAddress = async () => {
		axios
			.post('/get-transactions', dataAddress)
			.then((response) => {
				console.log('Response: ', response.data);
				setTransactions(response.data);
			})
			.catch((error) => {});
	};
	return (
		<div className="wrapper background">
			<div className="header">
				<h2>Blockchain</h2>
				<h4>Get All transactions</h4>
			</div>
			<div className="intro">
				<label className="label">From Address</label>
				<button
					className={`button ${address === 'Ben' ? 'active' : ''}`}
					onClick={() => handleTransactionsAddress('Ben')}
				>
					Ben
				</button>
				<button
					className={`button ${address === 'Michelle' ? 'active' : ''}`}
					onClick={() => handleTransactionsAddress('Michelle')}
				>
					Michelle
				</button>
				<button
					className={`button ${address === 'Miner' ? 'active' : ''}`}
					onClick={() => handleTransactionsAddress('Miner')}
				>
					Miner
				</button>
			</div>
			<button className="button go-button" onClick={sendAddress}>
				GO!
			</button>
			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>
			{transactions && (
				<Styles>
					<Table
						columns={Columns}
						data={transactions.balance}
						renderRowSubComponent={renderRowSubComponent}
					/>
				</Styles>
			)}
		</div>
	);
};

export default GetBalance;
