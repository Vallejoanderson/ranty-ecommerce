
import React, { useContext } from 'react'
import { ProductsContext } from '../components/ProductsContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

	const { isLoggedIn } = useContext( ProductsContext );
	return isLoggedIn
				 ? children
				 : <Navigate to='/auth/login' />
}