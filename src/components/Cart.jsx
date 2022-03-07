
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { CartEmptyMessage } from './CartEmptyMessage';
import { CartList } from './CartList';


export const Cart = () => {

	const cart = useSelector(state => state.cart);

	return (
		<div className="flex flex-col items-center gap-4 py-4 lg:py-8 mt-16 text-black px-2">
			<h2 className="text-gray-600 border-b-2">My Cart</h2>
			{
				cart.length > 0 && <CartList cart = { cart } />
			}
			{
				cart.length > 0 ? <Link to='/cart/checkout'><Button text = "Proceed to checkout"/></Link>
				: <CartEmptyMessage />
			}
		</div>
	)
}
