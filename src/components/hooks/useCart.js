

import { useState } from 'react'

export const useCart = ( initialState = [], initialCount = 0 ) => {

	const [ cart, setCart ] = useState( initialState );
	const [ productsCounter, setProductsCounter ] = useState( initialCount );

	const add = ( product ) => { // add an item to the cart
		const found = cart.find( itemFromCart => ( itemFromCart.slug == product.slug ) );
		if( found === undefined ){
			setCart( [ ...cart, { ...product, quantity: 1 } ] );
		}
		else{
			found.quantity = found.quantity + 1;
			// setCart( [ ...cart ] );
		}
		setProductsCounter( productsCounter => productsCounter + 1 )
	}

	const rm = ( product ) => { // remove an item from the cart
		if( product.quantity > 1 ){
			product.quantity = product.quantity - 1
		}
		else{
			setCart( cart.filter( itemFromCart => ( itemFromCart !== product ) ) )
		}
		setProductsCounter( productsCounter => productsCounter - 1 );
	}
 
	return {
		cart,
		add,
		rm,
		productsCounter,
	}

}
