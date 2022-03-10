import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children, isLoggedIn }) => {
	return isLoggedIn ? <Navigate to='/cart/orders' /> : children;
};

PublicRoute.propTypes = {
	children: PropTypes.element.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};
