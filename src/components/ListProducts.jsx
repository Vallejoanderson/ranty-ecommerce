

import React from 'react';
import { ListProductsItem } from './ListProductsItem';

export const ListProducts = ( { products }) => {
	return(

					<div className="flex justify-center flex-wrap my-12 gap-8">
						{
							products && products.map( p => {
								return(
												<ListProductsItem key = { p.id } product = { p } />
											)
							} )
						}
				</div>

	)
};
