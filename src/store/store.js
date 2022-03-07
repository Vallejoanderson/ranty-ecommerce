import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../components/reducers/authReducer';
import { productsReducer } from '../components/reducers/productsReducer';
import { cartReducer } from '../components/reducers/cartReducer';
import { catsReducer } from '../components/reducers/catsReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	auth: authReducer,
	prods: productsReducer,
	cats: catsReducer,
	cart: cartReducer
});

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);