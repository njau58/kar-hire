import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import ErrorElement from './components/ErrorElement'
import Login from "./components/AuthComponents/Login";
import CarDetails from "./components/CarDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorElement/>
  },
  {
    path: "/login",
    element: <Login/>,
   
  },
  {
    path: "/register",
    element: <Login/>,
   
  },
  {
    path: "/car-details/:Id",
    element: <CarDetails/>,
   
  },

 
 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    
    
    </>
  );
}

export default App