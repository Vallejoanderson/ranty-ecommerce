
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductsContext } from './ProductsContext';

export const NavBarMenu = ({  hideMenu, setHideMenu }) => {

	const { productsCounter } = useContext( ProductsContext );

	return (
					<>
						<div className="block lg:hidden">
						<button onClick={ () => { setHideMenu( hideMenu => !hideMenu ) } } id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
							<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
						</div>
						<div id='menu' className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right ${ hideMenu ? 'hidden' : ''}`}>
							<div className="text-lg lg:flex-grow">
								<Link to="/" >
									<div className="block lg:inline-block lg:mt-0 text-white mr-4 tracking-wide font-medium hover:bg-white hover:text-newblue py-2 px-4 rounded-full">
										<i className="fas fa-home"></i> Home
									</div>
								</Link>
								<Link to="/contact" >
									<div className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 tracking-wide font-medium hover:bg-white hover:text-newblue py-2 px-4 rounded-full">
										<i className="fas fa-shopping-cart"></i>
											{ productsCounter > 0 ? <p className="inline ml-2 px-2 rounded-full border-2 border-white">{productsCounter}</p> : ' Cart' }
									</div>
								</Link>
							</div>
						</div>
					</>
				)
}
