import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const cartReducer = (cart=initialState, action) => {
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
			const found2 = cart.find( cartItem => ( cartItem.slug == action.payload.slug ) )
			if( found2 !== undefined ){
				found2.quantity = found2.quantity - 1;
				if( found2.quantity === 0 ){
					return( [ ...cart.filter( cartItem => ( cartItem.slug !== action.payload.slug ) ) ] );
				}else{
					return( [ ...cart ] );
			}}
		default:
			return cart;
	}
}