import React, { useState } from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import './welcomePage.css';

const WelcomePage = () => {
	const [isShownButton1, setIsShownButton1] = useState(false);
	const [isShownButton2, setIsShownButton2] = useState(false);
	const [isShownButton3, setIsShownButton3] = useState(false);
	const [isShownButton4, setIsShownButton4] = useState(false);
	const [isShownButton5, setIsShownButton5] = useState(false);
	const [isShownButton6, setIsShownButton6] = useState(false);
	const [isShownButton7, setIsShownButton7] = useState(false);
	const [isShownButton8, setIsShownButton8] = useState(false);

	const navigate = useNavigate();

	return (
		<div className="wrapper background">
			<h1>Welcome to Ben's blockchain!</h1>
			<button
				className="button"
				onClick={() => {
					
					
    navigate("/create-transaction");
	
					
				}}
				onMouseEnter={() => setIsShownButton1(true)}
				onMouseLeave={() => setIsShownButton1(false)}
			>
				To Create new transaction
			</button>
			{isShownButton1 && <div>Creating new transaction</div>}
			<button
				className="button"
				onClick={() => navigate('/verify-transaction')}
				onMouseEnter={() => setIsShownButton2(true)}
				onMouseLeave={() => setIsShownButton2(false)}
			>
				To verify your transaction
			</button>
			{isShownButton2 && <div>Verifying transaction by inserting specific hash transaction</div>}

			<button
				className="button"
				onClick={() => navigate('/get-balance')}
				onMouseEnter={() => setIsShownButton3(true)}
				onMouseLeave={() => setIsShownButton3(false)}
			>
				To see the balance
			</button>
			{isShownButton3 && (
				<div>Checking balance of Ben's address, Michelle's address and Miner address</div>
			)}

			<button
				className="button"
				onClick={() => navigate('/get-transactions')}
				onMouseEnter={() => setIsShownButton4(true)}
				onMouseLeave={() => setIsShownButton4(false)}
			>
				Get all your transactions
			</button>
			{isShownButton4 && (
				<div>
					Seeing all the transactions details of Ben's address, Michelle's address and Miner address
				</div>
			)}

			<button
				className="button"
				onClick={() => navigate('/get-block-trie')}
				onMouseEnter={() => setIsShownButton5(true)}
				onMouseLeave={() => setIsShownButton5(false)}
			>
				Get your block's transactions trie
			</button>
			{isShownButton5 && (
				<div>Getting specific block's transactions trie by inserting specific hash transaction</div>
			)}

			<button
				className="button"
				onClick={() => navigate('/get-blockchain-trie')}
				onMouseEnter={() => setIsShownButton8(true)}
				onMouseLeave={() => setIsShownButton8(false)}
			>
				Get blockchian's state trie
			</button>
			{isShownButton8 && <div>To see the state's trie of all the blockchain</div>}
			<button
				className="button"
				onClick={() => navigate('/get-block-state-trie')}
				onMouseEnter={() => setIsShownButton6(true)}
				onMouseLeave={() => setIsShownButton6(false)}
			>
				Get your block's state trie
			</button>
			{isShownButton6 && (
				<div>Getting specific block's state trie by inserting specific hash transaction</div>
			)}
			<button
				className="button"
				onClick={() => {
					navigate('/interpreter');
				}}
				onMouseEnter={() => setIsShownButton7(true)}
				onMouseLeave={() => setIsShownButton7(false)}
			>
				Interpreter
			</button>
			{isShownButton7 && <div>Inserting opcode to seeing gasLimit</div>}
		</div>
	);
};

export default WelcomePage;
