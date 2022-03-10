import main from '../public/main.png';

export const MainImage = () => {
	return (
		<div className='animate__animated animate__bounceInRight'>
			<img className='image ml-0 lg:ml-20' src={main} />
		</div>
	);
};
