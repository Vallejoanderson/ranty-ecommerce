

import { useState } from 'react'

export const useCart = ( initialState = [], initialCount = 0 ) => {

	const [ cart, setCart ] = useState( initialState );
	const [ productsCounter, setProductsCounter ] = useState( initialCount );
	const [ total, setTotal ] = useState( initialCount );

	const add = ( product ) => { // add an item to the cart

		const found = cart.find( itemFromCart => ( itemFromCart.slug == product.slug ) );
		if( found === undefined ){
			setCart( [ ...cart, { ...product, quantity: 1 } ] );
		}
		else{
			found.quantity = found.quantity + 1;
		}
		setProductsCounter( productsCounter => productsCounter + 1 )
		getTotal();
	}

	const rm = ( product ) => { // remove an item from the cart
		if( product.quantity > 1 ){
			product.quantity = product.quantity - 1
			getTotal();
		}
		else{
			setCart( cart.filter( itemFromCart => ( itemFromCart !== product ) ) )
		}
		setProductsCounter( productsCounter => productsCounter - 1 );
	}

	const getTotal = () => {

		cart.map( product => { setTotal( total => total + ( product.quantity*product.price ) ) });

	}
 
	return {
		cart,
		add,
		rm,
		total,
		productsCounter,
	}

}
