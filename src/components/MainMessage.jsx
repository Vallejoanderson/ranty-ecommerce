
import React from 'react';
import { Link } from 'react-router-dom';

export const MainMessage = () => {
	return(

		<div className="py-2 animate__animated animate__bounceInLeft">
			<h1>
						Welcome to Ranty <br />
			</h1>
			<p className="mt-2">
						Buy everything you need <br />
						Receive it everywhere you are <br />
						Enjoy it whenever you like <br />
			</p>
			<button className="bg-newblue hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8">
				<Link to="/order" >
					Who we are
				</Link>
			</button>
		</div>
	)
};
