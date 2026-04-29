import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreateProduct,
  startLoadProduct,
  startLoadProducts,
} from "../../../store/product/productThunk";
import { useNavigate } from "react-router-dom";
import { createProductFormData } from "../utils/createProductFormData";

export const useProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const useCreateProduct = async (product, files) => {
    const formDataProductCreated = createProductFormData(product, files);

    console.log(formDataProductCreated);

    const { message } = await dispatch(
      startCreateProduct(formDataProductCreated),
    );

    return { message };
  };

  const useGetProducts = () => {
    useEffect(() => {
      if (products !== null) return;

      const load = async () => {
        const { message } = await dispatch(startLoadProducts());

        if (message?.error === 401) {
          try {
            await dispatch(startLoadProducts());
          } catch (e) {
            navigate("/login");
          }
        }
      };

      load();
    }, [dispatch, navigate]);

    const { products, message } = useSelector((state) => state.products);

    return { products, message };
  };

  const useGetProductDetails = (productId) => {
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
      const load = async () => {
        const { product, message } = await dispatch(
          startLoadProduct(productId),
        );

        setProduct(product);
        setMessage(message);
      };

      load();
    }, [productId, dispatch, navigate]);

    return { product, message };
  };

  return { useCreateProduct, useGetProducts, useGetProductDetails };
};
