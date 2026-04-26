import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoadProduct,
  startLoadProducts,
} from "../../../store/product/productThunk";
import { startRefreshToken } from "../../../store/auth/authThunk";
import { useNavigate } from "react-router-dom";

export const useGetProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, message } = useSelector((state) => state.products);

  useEffect(() => {
    const load = async () => {
      const { message } = await dispatch(startLoadProducts());

      if (message?.error === 401) {
        try {
          await dispatch(startRefreshToken());
          await dispatch(startLoadProducts());
        } catch (e) {
          navigate("/login");
        }
      }
    };

    load();
  }, [dispatch, navigate]);

  return { products, message };
};

export const useGetProductDetails = (productId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, message } = useSelector((state) => state.products);

  useEffect(() => {
    const load = async () => {
      const { message } = await dispatch(startLoadProduct(productId));

      console.log(message);

      if (message?.error === 401) {
        try {
          await dispatch(startRefreshToken());
          await dispatch(startLoadProduct(productId));
        } catch (error) {
          navigate("/login");
        }
      }
    };

    load();
  }, [dispatch, navigate]);

  return { product, message };
};
