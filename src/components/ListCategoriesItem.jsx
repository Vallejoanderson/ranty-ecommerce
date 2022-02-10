
import React, { useContext, useEffect } from 'react';
import { ProductsContext } from './ProductsContext';
import { fetchProductsByCategory, fetchAllProducts } from '../api';

export const ListCategoriesItem = ( { categories } ) => {

	const { setProducts } = useContext( ProductsContext );

	const getProductsByCategory = async( slug ) => {

		setProducts( await fetchProductsByCategory( slug ) );

	} 

	const getAllProducts = async() => {

		setProducts( await fetchAllProducts() );

	}

	useEffect( () => {
		getAllProducts();
	}, [])

	return(

		<div className="flex justify-center gap-8 bg-newblue py-4">
			<div onClick = { () => { getAllProducts() } }
					 key = { 2000 }
					 className="text-white tracking-widest font-semibold hover:bg-white hover:text-newblue py-2 px-4 rounded-full cursor-pointer animate__animated animate__flipInX">All</div>
			{
				categories.map( ( c ) => { // c = category
					return <div onClick = { () => { getProductsByCategory( c.slug) } }
											key = { c.id } 
											className="text-white tracking-widest font-semibold hover:bg-white hover:text-newblue py-2 px-4 rounded-full cursor-pointer animate__animated animate__flipInX">{c.name}</div>
				})
			}
		</div>

	)
};
