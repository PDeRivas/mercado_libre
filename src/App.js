import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Search from './pages/Search';
import Cart from './pages/Cart';
import PurchaseEnd from './pages/PurchaseEnd';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/search/:searchItem' Component={Search}/>
            <Route path='/product/:productId' Component={Product}/>
            <Route path='/cart' Component={Cart}/>
            <Route path='/purchaseEnd' Component={PurchaseEnd} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
