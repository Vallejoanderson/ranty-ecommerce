
import React, { useContext } from 'react';
import { ProductsContext } from './ProductsContext';
import { getProductsByCategory } from '../api';

export const ListCategoriesItem = ( { categories } ) => {

	const { setProducts } = useContext( ProductsContext );

	console.log('h', categories)

	const getProducts = async( slug ) => {

		setProducts( await getProductsByCategory( slug ) );

	} 

	return(

		<div className="flex justify-center gap-8 bg-newblue py-4">
			{
				categories.map( ( c ) => { // c = category
					return <div onClick = { () => { getProducts( c.slug) } }
											key = { c.id } 
											className="text-white tracking-widest font-semibold hover:bg-white hover:text-newblue py-2 px-4 rounded-full cursor-pointer animate__animated animate__flipInX">{c.name}</div>
				})
			}
		</div>

	)
};
