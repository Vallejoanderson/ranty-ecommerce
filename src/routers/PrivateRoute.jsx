import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children, isLoggedIn }) => {
	return isLoggedIn ? children : <Navigate to='/auth/login' />;
};

PrivateRoute.propTypes = {
	children: PropTypes.element.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};
