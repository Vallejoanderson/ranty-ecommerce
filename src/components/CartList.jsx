import { getProductImage } from '../actions/products';
import { useDispatch } from 'react-redux';
import { types } from './types/types';
import PropTypes from 'prop-types';

export const CartList = ({ cart }) => {
	const dispatch = useDispatch();
	return cart.map(p => {
		return (
			<div
				key={p.id}
				className='flex justify-center gap-6 text-black font-bold hover:text-white hover:bg-newblue cursor-pointer shadow hover:shadow-2xl border-2 py-4 border-newblue rounded-lg w-	full md:w-2/3 lg:w-1/4 animate__animated animate__flipInX'
			>
				<div>
					<img
						height={30}
						width={60}
						src={getProductImage(p.image)}
						alt={p.slug}
					/>
				</div>
				<div>
					<p className='capitalize border-b-2'>{p.slug}</p>
					<p className=''>{`${p.quantity} x $${p.price} = $${(
						p.quantity * p.price
					).toFixed(2)}`}</p>
				</div>
				<div className='flex flex-col gap-6'>
					<button
						onClick={() => {
							dispatch({ type: types.add, payload: p });
						}}
						className='border-2 text-white font-bold bg-green-500 border-green-500 px-2 rounded-lg'
					>
						+
					</button>
					<button
						onClick={() => {
							dispatch({ type: types.rm, payload: p });
						}}
						className='border-2 text-white font-bold bg-red-600 border-red-600 px-2 rounded-lg'
					>
						-
					</button>
				</div>
			</div>
		);
	});
};

CartList.propTypes = {
	cart: PropTypes.array,
};
