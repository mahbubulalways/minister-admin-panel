import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/Products/AddProducts/AddProduct/AddProduct";
import Add_Television from "../Pages/Products/AddProducts/Television/Add_Television";
import All_Products from "../Pages/Products/AllProducts/All_Products";
import See_Products from "../Pages/Products/AllProducts/See_Products";
import AddRefrigerator from "../Pages/Products/AddProducts/Refrigerator/AddRefrigerator";
import Add_HomeAppliance from "../Pages/Products/AddProducts/HomeAppliance/Add_HomeAppliance";
import Add_Micro_Oven from "../Pages/Products/AddProducts/Micro_Oven/Add_Micro_Oven";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "add-television",
        element: <Add_Television />,
      },
      {
        path: "add-refrigerator",
        element: <AddRefrigerator />,
      },
      {
        path: "add-home-appliances",
        element: <Add_HomeAppliance />,
      },
      {
        path: "add-microwave-oven",
        element: <Add_Micro_Oven />,
      },
      {
        path: "all-products",
        element: <All_Products />,
      },
      {
        path: "category/:category",
        element: <See_Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
