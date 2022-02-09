

import React from 'react';
import { ListProductsItem } from './ListProductsItem';

export const ListProducts = ( { products }) => {
	return(

					<div>
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
