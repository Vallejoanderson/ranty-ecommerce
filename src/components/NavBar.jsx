import { useState } from 'react';
import { NavBarMenu } from './NavBarMenu';

export const NavBar = () => {
	const [hideMenu, setHideMenu] = useState(true);

	return (
		<nav
			className={`fixed z-10 top-0 flex items-center justify-between flex-wrap bg-newblue p-2 w-full`}
		>
			<div className='flex items-center flex-shrink-0 text-white mr-6'>
				<span className='font-semibold text-xl tracking-tight tracking-widest pl-8'>
					{' '}
					RANTY
				</span>
			</div>
			<NavBarMenu hideMenu={hideMenu} setHideMenu={setHideMenu} />
		</nav>
	);
};
