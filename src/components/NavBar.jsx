
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
export const NavBar = () => {

	const [ hideMenu, setHideMenu ] = useState( true );

	return (
		<nav className={`flex items-center justify-between flex-wrap bg-newblue p-2`}> 
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-xl tracking-tight tracking-widest pl-8"> RANTY</span>
			</div>
			<div className="block lg:hidden">
				<button onClick={ () => { setHideMenu( hideMenu => !hideMenu ) } } id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>
			<div id='menu' className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right ${ hideMenu ? 'hidden' : ''}`}>
				<div className="text-lg lg:flex-grow">
					<Link to="/" className="block lg:inline-block lg:mt-0 text-white mr-4 tracking-wide font-medium hover:bg-white hover:text-newblue py-2 px-4 rounded-full">
						<i className="fas fa-home"></i> Home
					</Link>
					<Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 tracking-wide font-medium hover:bg-white hover:text-newblue py-2 px-4 rounded-full">
						<i className="fas fa-shopping-cart"></i> Cart
					</Link>
				</div>
			</div>
		</nav>

	);
};