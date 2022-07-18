import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// eslint-disable-next-line no-unused-vars
import Button from '@material-ui/core/Button';

import axios from '../../Axios/axios';

import './interpreter.css';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const Interpreter = () => {
	const navigate = useNavigate();
	const classes = useStyles();
	const [gas, setGas] = useState('');
	const [opcodes, setOpcodes] = useState({
		opcode1: '',
		amount1: 0,
		opcode2: '',
		amount2: 0,
		opcode3: '',
		opcode4: '',
	});

	const handleOpcode1 = (event) => {
		setOpcodes({ ...opcodes, opcode1: event.target.value });
	};

	const handleOpcode2 = (event) => {
		setOpcodes({ ...opcodes, opcode2: event.target.value });
	};

	const handleOpcode3 = (event) => {
		setOpcodes({ ...opcodes, opcode3: event.target.value });
	};
	const handleOpcode4 = (event) => {
		setOpcodes({ ...opcodes, opcode4: event.target.value });
	};
	const amount1 = (event) => {
		setOpcodes({ ...opcodes, amount1: event.target.value });
	};
	const amount2 = (event) => {
		setOpcodes({ ...opcodes, amount2: event.target.value });
	};
	const sendCode = async () => {
		const response = await axios.post('/get-interpreter-response', opcodes);
		try {
			console.log('Response:', response.data);
			setGas(response.data);
		} catch (error) {}
	};

	const backToWelcome = () => {
		navigate.push('/');
	};

	return (
		<div className="wrapper background">
			<h1 className="title">Interpreter</h1>
			<h2 className="title">Please select values: </h2>

			<div className="intro select">
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">OPCODE_MAP</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={opcodes.opcode1}
						onChange={handleOpcode1}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={'STOP'}>STOP</MenuItem>
						<MenuItem value={'ADD'}>ADD</MenuItem>
						<MenuItem value={'SUB'}>SUB</MenuItem>
						<MenuItem value={'MUL'}>MUL</MenuItem>
						<MenuItem value={'DIV'}>DIV</MenuItem>
						<MenuItem value={'PUSH'}>PUSH</MenuItem>
						<MenuItem value={'LT'}>LT</MenuItem>
						<MenuItem value={'GT'}>GT</MenuItem>
						<MenuItem value={'EQ'}>EQ</MenuItem>
						<MenuItem value={'AND'}>AND</MenuItem>
						<MenuItem value={'OR'}>OR</MenuItem>
						<MenuItem value={'JUMP'}>JUMP</MenuItem>
						<MenuItem value={'JUMPI'}>JUMPI</MenuItem>
						<MenuItem value={'STORE'}>STORE</MenuItem>
						<MenuItem value={'LOAD'}>LOAD</MenuItem>
					</Select>
				</FormControl>{' '}
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">AMOUNT</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={opcodes.amount1}
						onChange={amount1}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={0}>0</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={7}>7</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={9}>9</MenuItem>
						<MenuItem value={10}>10</MenuItem>
					</Select>
				</FormControl>{' '}
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">OPCODE_MAP</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={opcodes.opcode2}
						onChange={handleOpcode2}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={'STOP'}>STOP</MenuItem>
						<MenuItem value={'ADD'}>ADD</MenuItem>
						<MenuItem value={'SUB'}>SUB</MenuItem>
						<MenuItem value={'MUL'}>MUL</MenuItem>
						<MenuItem value={'DIV'}>DIV</MenuItem>
						<MenuItem value={'PUSH'}>PUSH</MenuItem>
						<MenuItem value={'LT'}>LT</MenuItem>
						<MenuItem value={'GT'}>GT</MenuItem>
						<MenuItem value={'EQ'}>EQ</MenuItem>
						<MenuItem value={'AND'}>AND</MenuItem>
						<MenuItem value={'OR'}>OR</MenuItem>
						<MenuItem value={'JUMP'}>JUMP</MenuItem>
						<MenuItem value={'JUMPI'}>JUMPI</MenuItem>
						<MenuItem value={'STORE'}>STORE</MenuItem>
						<MenuItem value={'LOAD'}>LOAD</MenuItem>
					</Select>
				</FormControl>{' '}
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">AMOUNT</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={opcodes.amount2}
						onChange={amount2}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={0}>0</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={7}>7</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={9}>9</MenuItem>
						<MenuItem value={10}>10</MenuItem>
					</Select>
				</FormControl>{' '}
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">OPCODE_MAP</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={opcodes.opcode3}
						onChange={handleOpcode3}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={'STOP'}>STOP</MenuItem>
						<MenuItem value={'ADD'}>ADD</MenuItem>
						<MenuItem value={'SUB'}>SUB</MenuItem>
						<MenuItem value={'MUL'}>MUL</MenuItem>
						<MenuItem value={'DIV'}>DIV</MenuItem>
						<MenuItem value={'PUSH'}>PUSH</MenuItem>
						<MenuItem value={'LT'}>LT</MenuItem>
						<MenuItem value={'GT'}>GT</MenuItem>
						<MenuItem value={'EQ'}>EQ</MenuItem>
						<MenuItem value={'AND'}>AND</MenuItem>
						<MenuItem value={'OR'}>OR</MenuItem>
						<MenuItem value={'JUMP'}>JUMP</MenuItem>
						<MenuItem value={'JUMPI'}>JUMPI</MenuItem>
						<MenuItem value={'STORE'}>STORE</MenuItem>
						<MenuItem value={'LOAD'}>LOAD</MenuItem>
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">OPCODE_MAP</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={opcodes.opcode4}
						onChange={handleOpcode4}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={'STOP'}>STOP</MenuItem>
						<MenuItem value={'ADD'}>ADD</MenuItem>
						<MenuItem value={'SUB'}>SUB</MenuItem>
						<MenuItem value={'MUL'}>MUL</MenuItem>
						<MenuItem value={'DIV'}>DIV</MenuItem>
						<MenuItem value={'PUSH'}>PUSH</MenuItem>
						<MenuItem value={'LT'}>LT</MenuItem>
						<MenuItem value={'GT'}>GT</MenuItem>
						<MenuItem value={'EQ'}>EQ</MenuItem>
						<MenuItem value={'AND'}>AND</MenuItem>
						<MenuItem value={'OR'}>OR</MenuItem>
						<MenuItem value={'JUMP'}>JUMP</MenuItem>
						<MenuItem value={'JUMPI'}>JUMPI</MenuItem>
						<MenuItem value={'STORE'}>STORE</MenuItem>
						<MenuItem value={'LOAD'}>LOAD</MenuItem>
					</Select>
				</FormControl>
			</div>
			<button className="button go-button" onClick={sendCode}>
				GO!
			</button>
			{/* {backFromResponse} */}
			<h1 className="title">{`Result: ${gas.result}  Gas used: ${gas.gasUsed}`}</h1>

			<button className="button" onClick={backToWelcome}>
				back to welcome
			</button>
		</div>
	);
};
export default Interpreter;
