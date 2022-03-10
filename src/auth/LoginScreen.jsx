import { Link } from 'react-router-dom';
import { startLogin } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const [values, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = values;

	const handleLogin = e => {
		e.preventDefault();
		// console.log('You are trying to logging in');
		// console.log(email, password);
		dispatch(startLogin(email, password));
	};

	console.log('LoginScreen');
	return (
		<>
			<h3 className='text-newblue'>Login</h3>
			<form onSubmit={handleLogin}>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className='w-full mb-2 border-2 border-newblue rounded pl-2 focus:outline-none text-black'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='w-full mb-2 border-2 border-newblue rounded pl-2 focus:outline-none text-black'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>

				<button
					className='w-full border-2 border-newblue rounded-full text-newblue hover:bg-newblue hover:text-white py-1 mb-4'
					type='submit'
				>
					Login
				</button>
				<Link to='/auth/register' className='text-newblue hover:underline'>
					Create new account
				</Link>
			</form>
		</>
	);
};
