import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductsContext } from "./components/ProductsContext";
import './index.css';
import { useCart } from "./components/hooks/useCart";

const App = () => {

  const [ products, setProducts ] = useState();
  const { cart, add, productsCounter } = useCart();

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
                       productsCounter
                     }}
          >
            <BrowserRouter >
              <NavBar />
              <Routes>
                <Route path="/" element = { <Home /> }/>
              </Routes>
            </BrowserRouter>
          </ProductsContext.Provider>
         );
};

export default App;
