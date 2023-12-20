import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorElement from "./components/ErrorElement";

import CarDetailsPage from "./pages/CarDetailsPage";
import Catalogue from "./pages/AllVihicles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/all-vihicles",
    element: <Catalogue />,
    errorElement: <ErrorElement />,
  },

  {
    path: "/car-details/:Id",
    element:  <CarDetailsPage />,
  },
]);

function App() {
  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
