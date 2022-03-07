

import React from 'react';
import { useSelector } from 'react-redux';
import { ListProductsItem } from './ListProductsItem';

export const ListProducts = () => {

	const products = useSelector( state => state.prods );
	
	return(
					<div className="flex justify-center flex-wrap my-12 gap-8">
						{
							products.length > 0 && products.map( p => {
								return(
												<ListProductsItem key = { p.id } product = { p } />
											)
							} )
						}
					</div>
	)
};
