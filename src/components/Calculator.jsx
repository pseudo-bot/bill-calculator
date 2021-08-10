import React from 'react';

import dollarIcon from '../assets/icon-dollar.svg';
import personIcon from '../assets/icon-person.svg';

const Button = (props) => {
	return (
		<div className="btn-container">
			<div
				className='tip-btn'
				onClick={() =>
					document.querySelectorAll('.tip-btn').forEach((btn, index) => {
						if (index === props.id) {
							btn.classList.add('tip-btn--selected');
						} else if (btn.classList.contains('tip-btn--selected')) {
							btn.classList.remove('tip-btn--selected');
						}
						props.onChange(props.value)
					})
				}
			>
				{props.value}%
			</div>
		</div>
	);
};

const clearHighlight = () => {
	document.querySelectorAll('.tip-btn').forEach((btn) => {
		if (btn.classList.contains('tip-btn--selected')) {
			btn.classList.remove('tip-btn--selected')
		}
	})
}

export default (props) => {
	const handleTipValue = (e) => {
		if (e.target.value > 100) e.target.value = 100;
		if (e.target.value < 0) e.target.value = 0;
		props.onChangeTip(e.target.value);
	};

	if (props.tipPerc === '') clearHighlight();

	return (
		<div className='calculator'>
			<div className='input input--bill'>
				<img src={dollarIcon} className='input-icons' />
				<span className='text'>Bill</span>
				<input
					type='number'
					value={props.bill}
					className={'error-input'}
					onChange={(e) => {
						if (e.target.value < 0) e.target.value = 0;
						props.onBillChange(e.target.value);
					}}
				/>
			</div>
			<div className='tip-input'>
				<span className='text'>Select tip %</span>
				<Button value={5} id={0} onChange={props.onChangeTip} />
				<Button value={10} id={1} onChange={props.onChangeTip} />
				<Button value={20} id={2} onChange={props.onChangeTip} />
				<Button value={25} id={3} onChange={props.onChangeTip} />
				<Button value={50} id={4} onChange={props.onChangeTip} />

				<div className='input-container'>
					<input
						type='number'
						placeholder='Custom'
						onChange={handleTipValue}
						value={props.tipPerc}
						onFocus={clearHighlight}
					/>
				</div>
			</div>

			<div className='input input--person'>
				<img src={personIcon} className='input-icons' />
				<span className='text'>Number of persons</span>
				<span
					className={
						'text error ' + (props.personValue == 0 ? 'error--show' : '')
					}
				>
					Can't be zero
				</span>
				<input
					type='number'
					value={props.personValue}
					className={'error-input'}
					onChange={(e) => {
						if (e.target.value < 0) e.target.value = 0;
						props.onPersonChange(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};
