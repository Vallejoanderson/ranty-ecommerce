import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../components/Home";
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { CartRouter } from './CartRouter';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth'
import { useSelector } from 'react-redux';

export const AppRouter = () => {

	const dispatch = useDispatch();
	const cart = useSelector( state => state.cart );
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged( (user) => {
			if( user?.uid ){
				console.log( user?.uid )
				dispatch( login( user.uid, user.displayName ));
				setIsLoggedIn(true);
				console.log('Se logueo');
			}else{
				setIsLoggedIn(false);
				console.log('Se deslogueo');
			}
		})
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<BrowserRouter >
			<NavBar />
			<Routes>
				<Route path='/auth/*' element={
					<PublicRoute isLoggedIn={isLoggedIn}>
						<AuthRouter />
					</PublicRoute> }
				>
				</Route>
				<Route path='/cart/*' element={
					<PrivateRoute isLoggedIn={isLoggedIn}>
						<CartRouter />
					</PrivateRoute>
				}>
				</Route>
				<Route path="/*" element = { <Home /> }/>
			</Routes>
	</BrowserRouter>
	)
}
