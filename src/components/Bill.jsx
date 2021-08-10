import React from 'react';

export default function Bill(props) {
	let tip = props.value * props.tip / 100 / parseFloat(props.person);
	let total = parseFloat(props.value) + tip;
	return (
		<div className='bill-section'>
			<div className='bill--tip'>
				<div className='bill-text'>Tip Amount</div>
				<div className='sub-text'>/ person</div>
				<div className='tip-amount amount'>$
					{(props.value === '' && props.tip === '')
						? '0.00'
						: tip.toFixed(2)}</div>
			</div>
			<div className='bill--total'>
				<div className='bill-text'>Total</div>
				<div className='sub-text'>/ person</div>
				<div className='total-amount amount'>
					$
					{props.value === ''
						? '0.00'
						: (total/(parseFloat(props.person))).toFixed(2)}
				</div>
			</div>
			<button className='bill--reset' onClick={props.reset}>RESET</button>
		</div>
	);
}
