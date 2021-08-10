import React, { useState } from 'react';
import Bill from './Bill.jsx';
import Calculator from './Calculator.jsx';

const App = () => {
	let [bill, setBill] = useState(0);
	let [tip, setTip] = useState('');
	let [person, setPerson] = useState('1');

	function handleBillChange(input) {
		setBill(input);
	}

	function handleTipChange(input) {
		setTip(input);
	}

	function handlePersonChange(input) {
		setPerson(input);
	}

	function reset() {
		setBill(0);
		setTip('');
		setPerson('1');
	}

	return (
		<div className='main-interface'>
			<Calculator
				bill={bill}
				onBillChange={handleBillChange}
				tipPerc={tip}
				onChangeTip={handleTipChange}
				onPersonChange={handlePersonChange}
				personValue={person}
			></Calculator>
			<Bill
				value={bill}
				tip={tip}
				reset={reset}
				person={person == 0 ? 1 : person}
			></Bill>
		</div>
	);
};

export default App;
