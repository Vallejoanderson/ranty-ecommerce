

import React, { useState } from 'react'

export const useCart = ( initialState = [] ) => {

	const [ cart, setCart ] = useState( initialState );

	const add = ( product ) => {

		const found = cart.find( itemFromCart => ( itemFromCart.slug == product.slug ) );
		if( found === undefined ){
			setCart( [ ...cart, { ...product, quantity: 1 } ] );
		}
		else{
			found.quantity = found.quantity + 1;
		}
	}

	return {
		cart,
		add,
	}

}
