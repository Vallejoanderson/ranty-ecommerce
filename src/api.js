
import axios from 'axios';
const baseUrl = 'https://codealo-commerce-cms.onrender.com';

export const getCategories = async() => {
	try{
		const { data } = await axios.get(`${baseUrl}/categories`);
		return data;
	} catch( err ){ console.log( err ) };
}

export const fetchProductsByCategory = async( slug ) => {
	try{
		const { data } = await axios.get(`${baseUrl}/categories/${slug}`);
		return data.products;
	} catch( err ){ console.log( err ) };
}

export const fetchAllProducts = async() => {
	try{
		const { data } = await axios.get(`${baseUrl}/products`);
		return data;
	} catch ( err ){ console.log( err ) };
}

export const getProductImage = ( url ) => {
	return `${baseUrl}${url}`;
}