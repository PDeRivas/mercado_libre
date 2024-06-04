import './App.css';
import * as React from "react";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/producto",
    element: <Product />,
  },
]);

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
