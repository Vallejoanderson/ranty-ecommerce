

import React from 'react';
import { useSelector } from 'react-redux';
import { ListProductsItem } from './ListProductsItem';

export const ListProducts = () => {

	const products = useSelector( state => state.prods );
	const cart = useSelector(state => state.cart);

	
	return(
					<div className="flex justify-center flex-wrap my-12 gap-8">
						{
							products.length > 0 && products.map( p => {
									if(cart.some(el => el.id === p.id)) {
										return (
											<ListProductsItem color='border-blue-600' key = { p.id } product = { p } />
										)
									} return(
												<ListProductsItem key = { p.id } product = { p } />
											)
							} )
						}
					</div>
	)
};
