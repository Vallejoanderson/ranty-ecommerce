
import React from 'react'
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {

	const dispatch = useDispatch();
	const [ values, handleInputChange ] = 
	useForm({
						name: '',
						password: '',
						email: '',
					});

	const { name, password, email } = values;

	const handleRegister = (e) => {
		e.preventDefault();
		dispatch(startRegisterWithEmailPasswordName(email, password, name));
	}
	
	console.log('RegisterScreen');
	return (
		<>
						<h3 className="text-newblue">Register</h3>
			<form onSubmit={handleRegister}>
				<input 
							type="name"
							placeholder="Name"
							name="name"
							className="w-full mb-2 border-2 border-newblue rounded pl-2 focus:outline-none text-black"
							autoComplete="off"
							value={name}
							onChange={handleInputChange}
				/>
				<input 
							type="password"
							placeholder="Password"
							name="password"
							className="w-full mb-2 border-2 border-newblue rounded pl-2 focus:outline-none text-black"
							autoComplete="off"
							value={password}
							onChange={handleInputChange}
				/>
				<input 
							type="text"
							placeholder="Email"
							name="email"
							className="w-full mb-2 border-2 border-newblue rounded pl-2 focus:outline-none text-black"
							autoComplete="off"
							value={email}
							onChange={handleInputChange}
				/>

				<button
					className="w-full border-2 border-newblue rounded-full text-newblue hover:bg-newblue hover:text-white py-1 mb-4"
					type="submit"
				>
					Register
				</button>
				<Link to='/auth/login'
							className="text-newblue hover:underline"
				>
					I have an account
				</Link>
			</form>
		</>
	)
}
