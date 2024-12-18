import React from "react";
import { Link } from "react-router-dom";
import { deleteProductById } from "../../../../providers/products/deleteProductById";
import DeleteProductButton from "../buttons/DeleteProductButton";

export const ProductRow = ({ product }) => {

   const {id,name,brand,code,stock,price,category,images} = product;

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
        <td><div className="d-inline-block" style={{maxWidth: "120px"}}><img src={"http://localhost:8080/api/shop/images/"+ images[0].id} className="img-fluid" alt="..."/></div></td>
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
          <DeleteProductButton onDelete={()=>deleteProductById(id)}/>
        </td>
      </tr>
    </>
  );
};
