import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { loadUsers } from "../providers/users/loadUsers";
import { loadUser } from "../providers/users/loadUser";
import { Users } from "../pages/users/Users";
import { UserInfo } from "../pages/users/UserInfo";
import { Products } from "../pages/products/Products";
import { UserEdit } from "../pages/users/UserEdit";
import { loadProducts } from "../providers/products/loadProducts";
import { loadProduct } from "../providers/products/loadProduct";

import { CreateProductForm } from "../pages/products/createproduct/CreateProductForm";
import { ProductDetail } from "../pages/products/productdetails/ProductDetail";
import { EditProductForm } from "../pages/products/editproduct/EditproductForm";
import { LoginForm } from "../pages/login/LoginForm";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Home } from "../pages/home/Home";
import { useCheckUserauthenticated } from "../providers/hooks/useCheckUserAuthenticated";
import Checkout from "../pages/checkout/CheckOut";
import { PostConfirmOrder } from "../pages/Pagar/PostConfirmOrder";
import PaymentStatus from "../components/payment status/PayMentStatus";

export const routes = () => {
  useCheckUserauthenticated();

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
        { path: "/shopping-cart/checkout", element: <Checkout /> },
        {
          path: "/shopping-cart/post-confirm-order",
          element: <PostConfirmOrder />,
        },
        { path: "/shopping-cart/payment-status", element: <PaymentStatus /> },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LoginForm />
        </PublicRoute>
      ),
    },
  ]);

  return router;
};

export default routes();
