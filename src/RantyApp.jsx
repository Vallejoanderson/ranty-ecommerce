import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { ProductsContext } from "./components/ProductsContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { ThanksForBuying } from "./components/ThanksForBuying";
import { cartReducer } from "./components/reducers/cartReducer";
import './index.css';

const init = () => {
  return JSON.parse( localStorage.getItem('cart') ) || [];
}

const App = () => {

  const [ products, setProducts ] = useState();
  const [ cart, dispatch ] = useReducer( cartReducer, [], init );

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
                     }}
          >
            <BrowserRouter >
              <NavBar />
              <Routes>
                <Route path="/cart" element = { <Cart cart = { cart }/> }/>
                <Route path="/checkout" element = { <Checkout /> }/> 
                <Route path="/" element = { <Home /> }/>
                <Route path="/thanks" element = { <ThanksForBuying /> } /> "
              </Routes>
            </BrowserRouter>
          </ProductsContext.Provider>
         );
};

export default App;
