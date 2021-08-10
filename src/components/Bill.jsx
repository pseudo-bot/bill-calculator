import React from 'react';

export default function Bill(props) {
	let tip = (props.value * props.tip / 100 / parseFloat(props.person)).toFixed(2);
	let total = ((parseFloat(props.value) + parseFloat(tip))/parseFloat(props.person)).toFixed(2);

	if (total > 1e5) total = Number.parseFloat(total).toExponential(2);
	if (tip > 1e5) tip = Number.parseFloat(tip).toExponential(2);

	return (
		<div className='bill-section'>
			<div className='bill--tip'>
				<div className="bill-details">
					<div className='bill-text'>Tip Amount</div>
					<div className='sub-text'>/ person</div>
					<div className='tip-amount amount'>&#8377;
						{(props.value === '' && props.tip === '')
							? '0.00'
							: tip}</div>
				</div>
			</div>
			<div className='bill--total'>
				<div className="bill-details">
					<div className='bill-text'>Total</div>
					<div className='sub-text'>/ person</div>
					<div className='total-amount amount'>
					&#8377;
						{props.value === ''
							? '0.00'
							: total}
					</div>
				</div>
			</div>
			<button className='bill--reset' onClick={props.reset}>RESET</button>
		</div>
	);
}
