import React from 'react';
import '../styles/ProductForm.css';
import { useForm } from '../../../components/hooks/useForm';
import useFileInput from '../../../components/hooks/useFileInput';
import { InputFile } from '../components/form/InputFile';
import { editProduct } from '../../../providers/products/editProduct';
import { useLoaderData } from 'react-router-dom';
import EditProductButton from '../components/buttons/EditProductButton';

export const EditProductForm = () => {

    const { data } = useLoaderData();

    const productModel = data.response;

    const { handleSubmit, formState, onCheckboxChange, onInputChange } = useForm(productModel);

    const { files, error, handleFileChange, resetFiles } = useFileInput();

    const {
        id,
        name,
        brand,
        description,
        price,
        stock,
        code,
        category,
        available } = formState;

    const editFunction = (product, files) => {

        /*Creo un JSON del formState */

        const productJSON = JSON.stringify(product);

        /** Creo un BLOB del JSON anterior */
        const produbtBLOB = new Blob([productJSON], {
            type: "application/json"
        });

        /** Creo un formData */

        const formDataProduct = new FormData();

        formDataProduct.append("product", produbtBLOB);

        if (files && files.length > 0) {
            files.forEach((file) => { formDataProduct.append("image", file) });
        }
        const response = editProduct(id, formDataProduct);

        return response;
    }

    return (
        <div className="product-form-container">
            <h2>Edit product</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={brand}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={stock}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="code">Code:</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={code}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={category.name}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="available" className="checkbox-label">
                        <input
                            type="checkbox"
                            id="available"
                            name="available"
                            checked={available}
                            onChange={onCheckboxChange}
                        />
                        Available
                    </label>
                </div>
                <InputFile files={files} error={error} handleFileChange={handleFileChange} resetFiles={resetFiles} />
                <EditProductButton editFunction={() => editFunction(formState, files)} />
            </form>
        </div>
    );
};


