import { useEffect, useReducer, useState } from "react";
import { ProductsContext } from "./components/ProductsContext";
import { cartReducer } from "./components/reducers/cartReducer";
import { AppRouter } from "./routers/AppRouter";
import './index.css';

const init = () => {
  return JSON.parse( localStorage.getItem('cart') ) || [];
}

const App = () => {

  const [ products, setProducts ] = useState();
  const [ cart, dispatch ] = useReducer( cartReducer, [], init );
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect( () => {
    localStorage.setItem( 'cart', JSON.stringify(cart) );
    console.log(cart);
  }, [cart])

  return (
          <ProductsContext.Provider
            value = {{
                       products,
                       setProducts,
                       cart,
                       dispatch,
                       isLoggedIn,
                     }}
          >
            <AppRouter />
          </ProductsContext.Provider>
         );
};

export default App;
