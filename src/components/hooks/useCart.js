

import { useState } from 'react'

export const useCart = (  initialCount = 0 ) => {
	console.log('Has entrado en useCart');

	const [ cart, setCart ] = useState( JSON.parse(localStorage.getItem('cart')) || [] );

	const add = ( product ) => { // add an item to the cart

		const found = cart.find( itemFromCart => ( itemFromCart.slug == product.slug ) );
		if( found === undefined ){
			setCart( [ ...cart, { ...product, quantity: 1 } ] );
		}
		else{
			found.quantity = found.quantity + 1;
			setCart( [ ...cart ] );
		}
	}

	const rm = ( product ) => { // remove an item from the cart
		if( product.quantity > 1 ){
			product.quantity = product.quantity - 1;
			setCart( [ ...cart ] )
		}else{
			setCart( cart.filter( itemFromCart => ( itemFromCart !== product ) ) )
		}
	}

	return {
		cart,
		add,
		rm,
	}

}
