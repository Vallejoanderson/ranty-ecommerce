

import React from 'react';
import { ListCategoriesItem } from './ListCategoriesItem';


export const ListCategories = ( { categories } ) => {

	return(
			<div className="text-center">
				<h2 className="text-gray-600">What we offer you</h2>
				<ListCategoriesItem categories = { categories } />
			</div>
	)
};
