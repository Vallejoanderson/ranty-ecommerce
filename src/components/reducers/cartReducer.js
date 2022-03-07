import { types } from "../types/types";

export const cartReducer = (cart=[], action) => {
	console.log(action);
	switch ( action.type ) {
		case types.add:
			const found = cart.find( cartItem => ( cartItem.slug == action.payload.slug ) );
			if( found === undefined ){
				return( [ ...cart, { ...action.payload, quantity: 1 } ] );
			}else{
				found.quantity = found.quantity + 1;
				return( [ ...cart ] );
			}
			return;
		case types.rm:
			if( action.payload.quantity > 1 ){
				action.payload.quantity = action.payload.quantity - 1;
				return ( [ ...cart ] );
			}else{
				return ( cart.filter( cartItem => ( cartItem !== action.payload ) ) );
			}
		default:
			return cart;
	}
}