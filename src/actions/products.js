const baseUrl = 'https://codealo-commerce-cms.onrender.com';
import axios from 'axios';
import { types } from '../components/types/types';

export const fetchCategories = () => {
	return(dispatch) => {
		axios
			.get(`${baseUrl}/categories`)
			.then(({data}) => {
													dispatch(getCategories(data))})
			.catch(err => {console.log( err )}) 
	}
}

export const fetchProductsByCategory = (slug) => {
	return (dispatch) => {
		axios
			.get(`${baseUrl}/categories/${slug}`)
			.then(({data:{products}}) => {
				dispatch(getProducts(products))
			})
			.catch( err => { console.log( err ) }) 
	}
}

export const fetchAllProducts = () => {
	return (dispatch) => {
		axios
			.get(`${baseUrl}/products`)
			.then(({data}) => {
				dispatch(getProducts(data))
			})
			.catch( err => { console.log( err ) }) 
	}
}

export const getProductImage = ( url ) => {
	return `${baseUrl}${url}`;
}

export const getProducts = ( data ) => {
	return{
		type: types.getitems,
		payload: data,
	}
}

export const getCategories = ( data ) => {
		return {
			type: types.getcats,
			payload: data,
		}
	}