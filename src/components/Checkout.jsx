import { CheckoutCart } from './CheckoutCart';
import { CheckoutPayment } from './CheckoutPayment';

export const Checkout = () => {
	return (
		<div className='flex flex-col items-center gap-4 py-4 lg:py-8 mt-16 text-black px-2'>
			<p className='text-md'>Checkout</p>
			<CheckoutCart />
			<CheckoutPayment />
		</div>
	);
};
