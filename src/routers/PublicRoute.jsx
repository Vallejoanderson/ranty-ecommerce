import React from 'react';
import { Navigate } from 'react-router-dom';
  
export const PublicRoute = ({children}) => {

	return true
				 ? <Navigate to='/cart/orders' />
				 : children
}
