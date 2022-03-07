import { useState } from "react";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { Provider } from 'react-redux';
import './index.css';

const App = () => {

  const [ products, setProducts ] = useState();
  // const [ cart, dispatch ] = useReducer( cartReducer, [], init );

  // useEffect( () => {
  //   localStorage.setItem( 'cart', JSON.stringify(cart) );
  //   console.log(cart);
  // }, [cart])
  
  // value = {{
  //   products,
  //   setProducts,
  //   cart,
  //   dispatch,
  //   isLoggedIn,
  // }}
  return (
        <Provider store={store}>
          <AppRouter />
        </Provider>
      );
};

export default App;
