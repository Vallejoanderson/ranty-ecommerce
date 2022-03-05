

import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'

const handleSumbit = (e) => {
	e.preventDefault();
}

export const CheckoutPayment = () => {
	return (
		<form onSubmit={ (e) => handleSumbit(e) } >
			<p className="text-center">Payment</p>
			<div className="flex flex-col md:flex-row gap-2">
				<div className="flex flex-col">
					<label className="mb-2">Name</label>
					<input className="text-lg rounded border-2 px-2 py-1" type="text" />
				</div>
				<div className="flex flex-col">
					<label className="mb-2">Lastname</label>
					<input className="text-lg rounded border-2 px-2 py-1" type="text" />
				</div>
			</div>
			<div className="flex flex-col">
				<label className="mb-2">Credit card number</label>
				<input className="text-lg rounded border-2 px-2 py-1" type="text" />
			</div>
			<div className="flex flex-col">
				<label className="mb-2">Expiration date</label>
				<input className="text-lg rounded border-2 px-2 py-1" type="text" />
			</div>
			<div className="flex flex-col md:flex-row gap-2">
				<div className="flex flex-col">
					<label className="mb-2">CVV</label>
					<input className="text-lg rounded border-2 px-2 py-1" type="text" />
				</div>
				<div className="flex flex-col mb-8">
					<label className="mb-2">Name on card</label>
					<input className="text-lg rounded border-2 px-2 py-1" type="text" />
				</div>
			</div>
			<div className="text-center">
				<Link to="/cart/thanks">
					<button type="submit" className="hover:bg-newblue hover:text-white font-bold px-8 py-4 rounded-full border-2 border-newblue bg-white text-newblue">CONFIRM PAYMENT</button>
				</Link>
			</div>
		</form>
	)
}
