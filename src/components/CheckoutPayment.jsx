

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase-config';
import { useSelector }  from 'react-redux';

export const CheckoutPayment = () => {

	const { auth, cart } = useSelector( state => state );
	const navigate = useNavigate();

	const handleShopping = (e) => {
		console.log('handleShopping')
		console.log(cart);
		console.log(auth.uid);
		db.collection(auth.uid)
			.add({...cart})
			.catch( err => console.log(err ))
		localStorage.removeItem('cart');
		navigate('/cart/thanks')
	}

	return (
		<form onSubmit={ (e) => { handleShopping(e) } }>
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
			<button type="submit" className="hover:bg-newblue hover:text-white font-bold px-8 py-4 rounded-full border-2 border-newblue bg-white text-newblue">
				CONFIRM PAYMENT
			</button>	
			</div>
		</form>
	)
}
