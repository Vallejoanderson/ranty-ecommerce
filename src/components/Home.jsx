
import React, { useContext, useEffect, useState } from 'react';
import { getCategories } from '../api';
import { ListCategories } from './ListCategories';
import { ListProducts } from './ListProducts';
import { MainWelcome } from './MainWelcome';
import { ProductsContext } from './ProductsContext';

export const Home = () => {

	const [ categories, setCategories ] = useState([]);
	const { products } = useContext( ProductsContext );

	const getData = async() => {
		setCategories( await getCategories() || []);
	}

	useEffect( () => {
		getData();
	}, [])

	return( <>
						<MainWelcome />
						<ListCategories categories = { categories } />
						<ListProducts products = { products } />
				  </>
	)
};