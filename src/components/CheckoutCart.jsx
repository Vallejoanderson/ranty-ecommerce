
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext';

export const CheckoutCart = () => {
	const { cart, total } = useContext( ProductsContext );
	return (
		<div>
			<p className="text-center text-base">Your cart</p>
			<table className="table-auto bg-gray-200 font-bold text-center">
				<thead className="bg-newblue text-white">
					<tr>
						<th>Name</th>
						<th>Quantity/Price</th>
					</tr>
				</thead>
				<tbody>
					{
						cart.map( ({ id, title, quantity, price }) => {
							return(
											<tr key={id} >
												<td className="px-12">{ title }</td>
												<td className="px-12">{`(${quantity}) x ${ (price).toFixed(2) }`}</td>
											</tr>
										)})
					}
					<tr className="bg-gray-500 text-white">
						<td className="px-12">Total</td>
						<td className="px-12">{(total).toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
