
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart";
import { Checkout } from "../components/Checkout";
import { ThanksForBuying } from "../components/ThanksForBuying";

export const CartRouter = () => {

	return (
		<Routes>
				<Route path="orders" element = { <Cart /> }/>
				<Route path="checkout" element = { <Checkout /> }/> 
				<Route path="thanks" element = { <ThanksForBuying /> } />
				<Route path="*" element = { <Cart /> }/>
		</Routes>
	)
}
