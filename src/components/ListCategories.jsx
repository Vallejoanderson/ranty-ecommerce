

import React from 'react';
import { useSelector } from 'react-redux';
import { ListCategoriesItem } from './ListCategoriesItem';


export const ListCategories = () => {

	const categories = useSelector( state => state.cats );

	return(
			<div className="text-center">
				<h2 className="text-gray-600">What we offer you</h2>
				<ListCategoriesItem categories = { categories } />
			</div>
	)
};
