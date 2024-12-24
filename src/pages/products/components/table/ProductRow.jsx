import React from "react";
import { Link } from "react-router-dom";
import DeleteProductButton from "../buttons/DeleteProductButton";
import { useDispatch } from "react-redux";
import { startDeleteProduct } from "../../../../store/product/productThunk";

export const ProductRow = ({ product }) => {

  const dispatch = useDispatch();

  const { id, name, brand, code, stock, price, category, images } = product;

  const deleteProductById = (id) =>{

    dispatch(startDeleteProduct(id));
  }

  return (
    <>
      <tr >
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{brand}</td>
        <td>{code}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td>{category?.name || "No category"}</td>
        <td><div className="d-inline-block" style={{ maxWidth: "120px" }}>
          {images && images[0] ? (<img src={"http://localhost:8080/api/shop/images/" + images[0].id} className="img-fluid" alt="..." />) : (<span>No Image</span>)}
        </div></td>
        <td>
          <Link to={`/products/${id}`} className="btn btn-info me-2">
            Ver
          </Link>
          <Link
            to={`/products/${id}/edit`}
            className="btn btn-warning me-2"
          >
            Editar
          </Link>
          <DeleteProductButton onDelete={() => deleteProductById(id)} />
        </td>
      </tr>
    </>
  );
};
