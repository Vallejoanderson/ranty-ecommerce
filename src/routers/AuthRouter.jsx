import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div className='flex justify-center'>
			<div className='flex flex-col items-center w-56 gap-4 pt-8 pb-2 mt-16 text-black px-2 bg-gray-50 shadow-lg border-2 border-newblue rounded mt-44 text-white'>
				<Routes>
					<Route path='login' element={<LoginScreen />} />
					<Route path='register' element={<RegisterScreen />} />
					<Route path='*' element={<LoginScreen />} />
				</Routes>
			</div>
		</div>
	);
};
