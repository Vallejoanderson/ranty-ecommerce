
import { ProductsContext } from './ProductsContext';
import { getProductImage } from '../api';
import { useContext } from 'react';


export const Cart = ({ cart }) => {
	const { add, rm } = useContext( ProductsContext );
	console.log( cart );
	return (
		<div className="flex flex-col items-center gap-4 py-4 lg:py-8 mt-16 text-black px-2">
			<h2 className="text-gray-600 border-b-2">My Cart</h2>
			{
				cart.length > 0 ? 
				cart.map( p  => {
					return(
							<div key={ p.id } className="flex justify-center gap-6 text-black font-bold hover:text-white hover:bg-newblue cursor-pointer shadow hover:shadow-2xl border-2 py-4 border-newblue rounded-lg w-full md:w-2/3 lg:w-1/4 animate__animated animate__flipInX">
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
						)					
				})
				: ( <div className="text-center">
							<p className="text-gray-500">Your cart is empty</p> 
							<i class="fa-solid fa-face-sad-tear"></i>
						</div> 
					)
			}
		</div>
	)
}
