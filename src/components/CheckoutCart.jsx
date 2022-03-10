import { CheckoutCartList } from './CheckoutCartList';
import PropTypes from 'prop-types';

export const CheckoutCart = cart => {
	return (
		<div>
			<p className='text-center text-base'>Your cart</p>
			<CheckoutCartList cart={cart} />
		</div>
	);
};

CheckoutCartList.propTypes = {
	cart: PropTypes.array.isRequired,
};
