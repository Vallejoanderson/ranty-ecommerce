
import React, {  } from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

	return true
				 ? children
				 : <Navigate to='/auth/login' />
}
