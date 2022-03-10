import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';

const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default App;
