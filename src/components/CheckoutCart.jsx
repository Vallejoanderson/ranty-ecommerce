import { CheckoutCartList } from './CheckoutCartList';
import { useSelector } from 'react-redux';

export const CheckoutCart = () => {
	const cart = useSelector(state => state.cart);
	return (
		<div>
			<p className='text-center text-base'>Your cart</p>
			<CheckoutCartList cart={cart} />
		</div>
	);
};
