import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { loadUsers } from "../providers/users/loadUsers";
import { loadUser } from "../providers/users/loadUser";
import { Users } from "../pages/users/Users";

import { Products } from "../pages/products/Products";
import { UserEdit } from "../pages/users/UserEdit";
import { loadProducts } from "../providers/products/loadProducts";
import { loadProduct } from "../providers/products/loadProduct";

import { CreateProductForm } from "../pages/products/createproduct/CreateProductForm";
import { ProductDetail } from "../pages/products/productdetails/ProductDetail";
import { EditProductForm } from "../pages/products/editproduct/EditproductForm";

import { ProtectedRoute } from "./ProtectedRoute";
import { Home } from "../pages/home/Home";

import Checkout from "../pages/checkout/CheckOut";
import { PostConfirmOrder } from "../pages/Pagar/PostConfirmOrder";

import { Construccion } from "../pages/construccion/Construccion";
import PaymentStatus from "../components/payment status/PaymentStatus";

import { Login } from "../pages/auth/login/Login";
import { RegisterForm } from "../pages/auth/register/RegisterForm";
import { UserProfileEdit } from "../pages/users/UserProfileEdit";
import { UserInfo } from "../pages/users/pages/UserInfo";

export const routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/users", element: <Users />, loader: loadUsers },
        { path: "/users/:id", element: <UserInfo />, loader: loadUser },
        { path: "/users/:id/edit", element: <UserEdit />, loader: loadUser },
        {
          path: "/users/:id/edit/perfil",
          element: <UserProfileEdit />,
        },

        { path: "/products", element: <Products />, loader: loadProducts },
        {
          path: "/products/:id",
          element: <ProductDetail />,
          loader: loadProduct,
        },
        { path: "/products/create", element: <CreateProductForm /> },
        {
          path: "/products/:id/edit",
          element: <EditProductForm />,
          loader: loadProduct,
        },

        { path: "/products/offers", element: <Construccion /> },
        { path: "/products/arrivals", element: <Construccion /> },

        { path: "/shopping-cart/checkout", element: <Checkout /> },
        {
          path: "/shopping-cart/post-confirm-order",
          element: <PostConfirmOrder />,
        },
        { path: "/shopping-cart/payment-status", element: <PaymentStatus /> },

        { path: "/about", element: <Construccion /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },

    { path: "/register", element: <RegisterForm /> },
  ]);

  return router;
};

export default routes();
