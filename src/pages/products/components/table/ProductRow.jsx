import React from "react";
import { Link } from "react-router-dom";

export const ProductRow = ({ product }) => {

   const {id,name,brand,code,stock,price,category} = product 
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
          <button className="btn btn-danger">Eliminar</button>
        </td>
      </tr>
    </>
  );
};
