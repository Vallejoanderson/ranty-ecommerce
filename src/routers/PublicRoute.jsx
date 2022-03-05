import React, { useContext } from 'react';
import { ProductsContext } from '../components/ProductsContext';
import { Navigate } from 'react-router-dom';
  
export const PublicRoute = ({children}) => {

	const { isLoggedIn } = useContext( ProductsContext );

	return isLoggedIn
				 ? <Navigate to='/cart/orders' />
				 : children
}
