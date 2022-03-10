import { MainMessage } from './MainMessage';
import { MainImage } from './MainImage';

export const MainWelcome = () => {
	return (
		<div className='inline-block flex flex-col lg:flex-row items-center lg:justify-center text-gray-600 px-8 py-4 lg:py-8 mt-12'>
			<MainMessage />
			<MainImage />
		</div>
	);
};
