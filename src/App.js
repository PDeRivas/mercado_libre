import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from './components/History';
import Home from "./pages/Home";
import Product from "./pages/Product"
import Search from './pages/Search';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/search/:searchItem' Component={Search}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
