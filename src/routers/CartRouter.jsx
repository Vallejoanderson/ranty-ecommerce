
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart";
import { Checkout } from "../components/Checkout";
import { ProductsContext } from '../components/ProductsContext';
import { ThanksForBuying } from "../components/ThanksForBuying";

export const CartRouter = () => {

	const { cart } = useContext( ProductsContext );

	return (
		<Routes>
				<Route path="orders" element = { <Cart cart = { cart }/> }/>
				<Route path="checkout" element = { <Checkout /> }/> 
				<Route path="thanks" element = { <ThanksForBuying /> } />
				<Route path="*" element = { <Cart cart = { cart }/> }/>
		</Routes>
	)
}
