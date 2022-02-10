
import axios from 'axios';
const baseUrl = 'https://codealo-commerce-cms.onrender.com';

export const getCategories = async() => {
	try{
		const { data } = await axios.get(`${baseUrl}/categories`);
		return( data.map( category => 
										{ return { id: category.id,
															 slug: category.slug } }));
	} catch( err ){ console.log( err ) };
}

export const fetchProductsByCategory = async( slug ) => {
	try{
		const { data } = await axios.get(`${baseUrl}/categories/${slug}`);
		return ( data.products.map( product => { return { id: product.id,
																													title: product.title, 
																													desc: product.description, 
																													image: product.image.url,  
																													price: product.price, 
																													} } ) );
	} catch( err ){ console.log( err ) };
}

export const fetchAllProducts = async() => {
	try{
		const { data } = await axios.get(`${baseUrl}/products`);
		return( data.map( product => { return { id: product.id,
																								title: product.title, 
																								desc: product.description, 
																								image: product.image.url,  
																								price: product.price, 
																								} } ) );
	} catch ( err ){ console.log( err ) };
}

export const getProductImage = ( url ) => {
	return `${baseUrl}${url}`;
}