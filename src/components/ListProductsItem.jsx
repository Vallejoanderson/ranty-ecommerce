

import React, { useState } from 'react';
import { getProductImage } from '../actions/products';
import { AddItemModal } from './AddItemModal';
import { Button } from './Button';
import { types } from './types/types';
import { useDispatch } from 'react-redux';

export const ListProductsItem = ({ product:p, color }) => {
	const [ showModal, setShowModal ] = useState( false );
	const dispatch = useDispatch();
	const [ counter, setCounter ] = useState(0);

	const minusProduct = () => {
		setCounter( counter => counter - 1 );
		dispatch({type: types.rm, payload: p});
	}

	const plusProduct = () => {
		setCounter( counter => counter + 1 );
		dispatch({type: types.add, payload: p});
	}

	return(
					<div className={`border border-gray-200 rounded-lg p-8 shadow hover:shadow-2xl cursor-pointer ${color}`}>
							<p>{ p.title }</p>
							<img className="mb-4" alt="product image" height={ 150 } width={ 150 } src={ getProductImage( p.image ) }/>
							<p className="text-base font-bold text-gray-600 mb-2 pl-2">Price: $ { p. price }</p>
							{
								counter > 0
								?
								<div className="flex justify-between">
									<button onClick={ () => { minusProduct() }}>
										<i className="las la-minus-circle la-2x text-red-500"></i>
									</button>
									<div>
										{ counter }
									</div>
									<button onClick={ () => { plusProduct() }}>
										<i className="las la-plus-circle la-2x text-newblue"></i>
									</button>
								</div>
								:
								<Button fn = { () => { 
									setShowModal( showModal => !showModal );
									plusProduct();
									console.log(p)}}
									text = {'Buy this item'} />
							}
							<AddItemModal
														showModal = { showModal }
														setShowModal = { setShowModal }
														product = { p } />
					</div>
				)
}