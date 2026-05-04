import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreateProduct,
  startEditProduct,
  startLoadProduct,
  startLoadProducts,
} from "../../../store/product/productThunk";
import { useNavigate } from "react-router-dom";
import { createProductFormData } from "../utils/createProductFormData";
import { resetProduct } from "../../../store/product/productSilce";

export const useProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const useCreateProduct = async (product, files) => {
    const formDataProductCreated = createProductFormData(product, files);

    const { message } = await dispatch(
      startCreateProduct(formDataProductCreated),
    );

    return { message };
  };

  const useGetProducts = () => {
    const { products } = useSelector((state) => state.products);

    const [message, setMessage] = useState("");

    useEffect(() => {
      const load = async () => {
        const { message } = await dispatch(startLoadProducts());
        setMessage(message);
      };

      load();
    }, [dispatch, navigate]);

    return { products, message };
  };

  const useGetProductDetails = (productId) => {
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState();

    useEffect(() => {
      const load = async () => {
        const { product, message } = await dispatch(
          startLoadProduct(productId),
        );

        setProduct(product);
        setMessage(message);
      };

      load();

      return () => dispatch(resetProduct());
    }, [productId, dispatch, navigate]);

    return { product, message };
  };

  const useEditProduct = async (id, product, files) => {
    const formDataProductCreated = createProductFormData(product, files);

    const { message } = await dispatch(
      startEditProduct(id, formDataProductCreated),
    );

    return { message };
  };

  return {
    useCreateProduct,
    useGetProducts,
    useGetProductDetails,
    useEditProduct,
  };
};
