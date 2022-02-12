import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { ProductsContext } from "./components/ProductsContext";
import { useCart } from "./components/hooks/useCart";
import { Cart } from "./components/Cart";
import './index.css';

const App = () => {

  const [ products, setProducts ] = useState();
  const { cart, add, rm, productsCounter } = useCart();

  useEffect( () => {
    console.log( cart );
  }, [cart] );

  return (
          <ProductsContext.Provider
            value = {{
                       products,
                       setProducts,
                       cart,
                       add,
                       rm,
                       productsCounter
                     }}
          >
            <BrowserRouter >
              <NavBar />
              <Routes>
                <Route path="/cart" element = { <Cart cart = { cart }/> }/>
                <Route path="/" element = { <Home /> }/>
              </Routes>
            </BrowserRouter>
          </ProductsContext.Provider>
         );
};

export default App;
