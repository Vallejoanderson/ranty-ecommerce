import { CheckoutCartList } from './CheckoutCartList';

export const CheckoutCart = ({cart}) => {
	console.log(cart)
	return (
		<div>
			<p className="text-center text-base">Your cart</p>
			<CheckoutCartList cart={cart} />
		</div>
	)
}
