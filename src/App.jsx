import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductsContext } from "./components/ProductsContext";
import './index.css';

const App = () => {

  const [ products, setProducts ] = useState();

  return (
          <ProductsContext.Provider
            value = {{
                       products,
                       setProducts,
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
