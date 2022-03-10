import { useEffect } from 'react';
import { fetchCategories } from '../actions/products';
import { ListCategories } from './ListCategories';
import { ListProducts } from './ListProducts';
import { MainWelcome } from './MainWelcome';
import { useDispatch } from 'react-redux';

export const Home = () => {
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(fetchCategories());
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<MainWelcome />
			<ListCategories />
			<ListProducts />
		</>
	);
};
