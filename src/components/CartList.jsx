
import { ProductsContext } from './ProductsContext';
import { getProductImage } from '../api';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const CartList = ({cart}) => {
	const { add, rm } = useContext( ProductsContext );
	return( 
		cart.map( p  => {
			return(
							<div key={ p.id } className="flex justify-center gap-6 text-black font-bold hover:text-white hover:bg-newblue cursor-pointer shadow hover:shadow-2xl border-2 py-4 border-newblue rounded-lg w-	full md:w-2/3 lg:w-1/4 animate__animated animate__flipInX">
								<div>
									<img height={30} width={60} src = { getProductImage( p.image ) } alt = {p.slug} />
								</div>
								<div>
									<p className="capitalize border-b-2">{ p.slug }</p>
									<p className="">{`${p.quantity} x $${p.price} = $${((p.quantity)*(p.price)).toFixed(2)}`}</p>
								</div>
								<div className="flex flex-col gap-6">
									<button onClick={ () => { add(p) } }
													className="border-2 text-white font-bold bg-green-500 border-green-500 px-2 rounded-lg">+
									</button>
									<button onClick={ () => { rm(p) } }
													className="border-2 text-white font-bold bg-red-600 border-red-600 px-2 rounded-lg">-</button>
								</div>
							</div>
			)})
	)
}
