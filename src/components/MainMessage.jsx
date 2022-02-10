
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const MainMessage = () => {
	return(

		<div className="py-2 animate__animated animate__bounceInLeft">
			<h1>
						Welcome to Ranty <br />
			</h1>
			<p className="mt-2 mb-8">
						Buy everything you need <br />
						Receive it everywhere you are <br />
						Enjoy it whenever you like <br />
			</p>
			<Link to="/about" >
				<Button text = { "Who are we" }/>
			</Link>
		</div>
	)
};
