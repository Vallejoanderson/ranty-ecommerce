

import { CheckoutCart } from './CheckoutCart';
import { CheckoutPayment } from './CheckoutPayment';
import { useSelector } from 'react-redux';

export const Checkout = () => {
	const cart = useSelector( state => state.cart );

	return (
		
		<div className="flex flex-col items-center gap-4 py-4 lg:py-8 mt-16 text-black px-2">
			<p className="text-md">Checkout</p>
			<CheckoutCart cart={cart} />
			<CheckoutPayment />
		</div>
	)
}