

import React, { useContext, useState } from 'react';
import { getProductImage } from '../api';
import { AddItemModal } from './AddItemModal';
import { Button } from './Button';
import { ProductsContext } from './ProductsContext';

export const ListProductsItem = ( { product:p }) => {
	const [ showModal, setShowModal ] = useState( false );
	const { add } = useContext( ProductsContext );
	return(
					<div className="border border-gray-200 rounded-lg p-8 shadow hover:shadow-2xl cursor-pointer">
							<p>{ p.title }</p>
							<img className="mb-4" alt="product image" height={ 150 } width={ 150 } src={ getProductImage( p.image ) }/>
							<p className="text-base font-bold text-gray-600 mb-2 pl-2">Price: ${ p. price }</p>
							<Button fn = { () => { setShowModal( showModal => !showModal ); add( p ) } }
											text = {'Buy this item'} />
							<AddItemModal
														showModal = { showModal }
														setShowModal = { setShowModal }
														product = { p } />
					</div>
				)
}