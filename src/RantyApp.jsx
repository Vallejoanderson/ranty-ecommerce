import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { ProductsContext } from "./components/ProductsContext";
import { useCart } from "./components/hooks/useCart";
import { Cart } from "./components/Cart";
import './index.css';
import { Checkout } from "./components/Checkout";
import { ThanksForBuying } from "./components/ThanksForBuying";

const App = () => {

  const [ products, setProducts ] = useState();
  const { cart, add, rm } = useCart();

  return (
          <ProductsContext.Provider
            value = {{
                       products,
                       setProducts,
                       cart,
                       add,
                       rm
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
