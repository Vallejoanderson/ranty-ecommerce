import { useEffect } from 'react';
import { fetchProductsByCategory, fetchAllProducts } from '../actions/products';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

export const ListCategoriesItem = ({ categories }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const { products = '' } = queryString.parse(location.search);

	const getProductsByCategory = slug => {
		dispatch(fetchProductsByCategory(slug));
		navigate(`/?products=${slug}`);
	};

	const getAllProducts = () => {
		dispatch(fetchAllProducts());
	};

	useEffect(() => {
		if (products === '') {
			getAllProducts();
		} else {
			getProductsByCategory(products);
		}
	}, []);

	return (
		<div className='flex justify-center gap-8 bg-newblue py-4'>
			<div
				onClick={() => {
					getAllProducts();
				}}
				key={2000}
				className='text-white tracking-widest font-semibold hover:bg-white hover:text-newblue py-2 px-4 rounded-full cursor-pointer animate__animated animate__flipInX'
			>
				All
			</div>
			{categories.map(c => {
				// c = category
				return (
					<div
						onClick={() => {
							getProductsByCategory(c.slug);
						}}
						key={c.id}
						className='capitalize text-white tracking-widest font-semibold hover:bg-white hover:text-newblue py-2 px-4 rounded-full cursor-pointer animate__animated animate__flipInX'
					>
						{c.slug}
					</div>
				);
			})}
		</div>
	);
};

ListCategoriesItem.propTypes = {
	categories: PropTypes.array.isRequired,
};
