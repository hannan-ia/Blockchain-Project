import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WelcomePage from './Components/WelcomePage/welcomePage';
import VerifyTransaction from './Components/VerifyTransaction/verifyTransaction';
import CreatingTransaction from './Components/CreatingTransaction/creatingTransaction';
import Balance from './Components/Balance/balance';
import GetTransactions from './Components/GetTransactions/getTransactions';
import GetBlockTrie from './Components/GetBlockTrie/getBlockTrie';
import GetBlockStateTrie from './Components/GetBlockStateTrie/getBlockStateTrie';
import Interpreter from './Components/Interpreter/interpreter';
import GetBlockchainTrie from './Components/GetBlockchainTrie/GetBlockchainTrie';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
			<Routes>
			    <Route exact path="/" element={WelcomePage} />
				<Route path="/verify-transaction" element={VerifyTransaction} />
				<Route path="/create-transaction" element={CreatingTransaction} />
				<Route path="/get-balance" element={Balance} />
				<Route path="/get-transactions" element={GetTransactions} />
				<Route path="/get-block-trie" element={GetBlockTrie} />
				<Route path="/interpreter" element={Interpreter} />
				<Route path="/get-block-state-trie" element={GetBlockStateTrie} />
				<Route path="/get-blockchain-trie" element={GetBlockchainTrie} />
			</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
