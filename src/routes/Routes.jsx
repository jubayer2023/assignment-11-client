import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandsCollection from "../pages/BrandsCollection/BrandsCollection";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import MyCart from "../pages/MyCart/MyCart";
import Update from "../pages/Update/Update";
import UpdateBrand from "../pages/UpdateBrand/UpdateBrand";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/brands/:brand_name",
        element: (
          <PrivateRoutes>
            <BrandsCollection></BrandsCollection>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brandshop-server-side-project-jb0f6tjfs.vercel.app/brands/${params.brand_name}`),
      },
      {
        path: "/brands/:brand_name/:id",
        element: (
          <PrivateRoutes>
            <BrandDetails></BrandDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brandshop-server-side-project-jb0f6tjfs.vercel.app/brands/${params.brand_name}/${params.id}`
          ),
      },
      {
        path: "/updateBrand/:brand_name/:id",
        element: <UpdateBrand></UpdateBrand>,
        loader: ({ params }) =>
          fetch(
            `https://brandshop-server-side-project-jb0f6tjfs.vercel.app/updateBrand/${params.brand_name}/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://brandshop-server-side-project-jb0f6tjfs.vercel.app/carts"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://brandshop-server-side-project-jb0f6tjfs.vercel.app/carts/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
