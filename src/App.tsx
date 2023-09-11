import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AuthCheck from "./utils/AuthCheck";
import ProtectedRout from "./utils/ProtectedRoute";
import Layout from "./Layout/Layout"
import Categories from "./pages/Categories/Categories";
import Brands from "./pages/Brands/Brands";
import Product from "./pages/Product/Product";
import Glavni from "./pages/Glani/Glavni";
import Magazin from "./pages/Magazin/Magazin";
// import Product from "./pages/Product/Product";
// import Products from "./pages/Products/Products";
// import ProtectedRout from "./Utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "Home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRout>
            <Home />
          </ProtectedRout>
        ),
      },
      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "Brands",
        element: <Brands />,
      },
      {
        path: "Product",
        element: <Product />,
      },

      // {
      //   path: "/home/products",
      //   element: <Products />,
      // },
      // {
      //   path: "category/:id",
      //   element: <Catalog />,
      // },
      // {
      //   path: "product/:id",
      //   element: <Product />,
      // },
      // {
      //   path: "cart",
      //   element: <Cart />,
      // },
    ],
  },

  {
    path: "Magazin",
    element: <Magazin />,
  },
  {
    path: "/",
    element: <Glavni />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
