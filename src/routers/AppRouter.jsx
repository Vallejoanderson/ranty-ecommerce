import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../components/Home";
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { CartRouter } from './CartRouter';

export const AppRouter = () => {

	return (
		<BrowserRouter >
			<NavBar />
			<Routes>
				<Route path='/auth/*' element={
					<PublicRoute>
						<AuthRouter />
					</PublicRoute> }
				>
				</Route>
				<Route path='/cart/*' element={
					<PrivateRoute>
						<CartRouter />
					</PrivateRoute>
				}>
				</Route>
				<Route path="/*" element = { <Home /> }/>
			</Routes>
	</BrowserRouter>
	)
}
