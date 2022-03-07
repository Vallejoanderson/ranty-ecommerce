import React from 'react';
import { Navigate } from 'react-router-dom';
  
export const PublicRoute = ({children, isLoggedIn}) => {

	return isLoggedIn
				 ? <Navigate to='/cart/orders' />
				 : children
}
