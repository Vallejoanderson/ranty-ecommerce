import axios from 'axios';
import { types } from '../components/types/types';
const baseUrl = 'https://codealo-commerce-cms.onrender.com';
// import { useContext } from 'react';
// import { ProductsContext } from '../components/ProductsContext';

// // const { dispatch } = useContext(ProductsContext);

export const startRegister = (userData = {}) => {
	// axios
	// 	.post(`${baseUrl}/auth/local/register`, userData)
	// 	.then( res => { console.log(res)} )
	// 	.catch( err => {
	// 		alert( err.response.data.message[0].messages[0].message )
	// 	})
	dispatch( login( userData.identifier, userData.password) )
}

export const startLogin = (userData = {}) => {
	// axios
	// 	.post(`${baseUrl}/auth/local/`, userData)
	// 	.then( res => { console.log(res)})
	// 	.catch( err => {
	// 		alert( err.response.data.message[0].messages[0].message )
	// 	})
	dispatch( login( userData.identifier, userData.password) );
}

export const login = ( uid, name ) => {
	return {
		type: types.login,
		payload: {
			uid,
			name,
		}
	}
}