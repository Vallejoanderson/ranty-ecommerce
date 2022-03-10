import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CheckoutCartList = cart => {
	const [total, setTotal] = useState(0);

	const getTotal = () => {
		let sum = 0;
		cart.forEach(({ quantity, price }) => {
			sum = sum + quantity * price;
		});
		setTotal(sum);
	};

	useEffect(() => {
		getTotal();
	}, [cart]);
	return (
		<table className='table-auto bg-gray-200 font-bold text-center mb-2'>
			<thead className='bg-newblue text-white'>
				<tr>
					<th>Name</th>
					<th>Quantity/Price</th>
				</tr>
			</thead>
			<tbody>
				{cart.map(({ id, title, quantity, price }) => {
					return (
						<tr key={id}>
							<td className='px-12'>{title}</td>
							<td className='px-12'>{`(${quantity}) x ${price.toFixed(2)}`}</td>
						</tr>
					);
				})}
				<tr className='bg-gray-500 text-white'>
					<td className='px-12'>Total</td>
					<td className='px-12'>{total}</td>
				</tr>
			</tbody>
		</table>
	);
};

CheckoutCartList.propTypes = {
	cart: PropTypes.array.isRequired,
};
