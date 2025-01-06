import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ErrorMessage } from '../../components/alerts/ErrorMessage';
import { ProductsTable } from './components/table/ProductsTable';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadProducts } from '../../store/product/productThunk';
import ProductList from './components/product list/ProductList';

export const Products = () => {


  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      price: "$48",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      description:
        "Una botella de porcelana elegante con textura natural de arcilla y tapón de corcho.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      description:
        "Vaso térmico de color verde oliva con tapa roscada y diseño moderno.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      price: "$89",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      description: "Recarga de papel Focus para aumentar tu productividad.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      description:
        "Lápiz mecánico de acero negro con punta y parte superior de latón.",
    },
  ];

  //const { data, error} = useLoaderData();

  const dispatch = useDispatch();

  // const products = useSelector(state => state.products.products);

  useEffect(()=>{

    //const products = data? data.response : [];

    //const message = error? error.message : "Products founded 😊";

    const message = "Products founded 😊";

    dispatch(startLoadProducts(products,message))

  },[products,dispatch]);

  return (
    <>
      {!products ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
        />
      ) : (
        <>
          <div className="container-fluid">
            <ProductList products={products} />
            {/*<ProductsTable products={products} />*/}
          </div>
        </>
      )}
    </>
  );
}
