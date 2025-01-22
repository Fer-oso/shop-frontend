import React from 'react';
import '../styles/ProductForm.css';
import { useForm } from '../../../components/hooks/useForm';
import CreateButton from '../components/buttons/CreateProductButton';
import useFileInput from '../../../components/hooks/useFileInput';
import { InputFile } from '../components/form/InputFile';
import { Toaster } from 'sonner';
import { useDispatch } from 'react-redux';
import { startCreateProduct } from '../../../store/product/productThunk';


export const CreateProductForm = () => {

  const productModel = {
    name: '',
    brand: '',
    description: '',
    price: '',
    stock: '',
    code: '',
    category: '',
    available: false,
  };

  const { formState, onCheckboxChange, onInputChange } = useForm(productModel);

  const { files, messageError, handleFileChange, resetFiles } = useFileInput();

  const { name,
    brand,
    description,
    price,
    stock,
    code,
    category,
    available } = formState;

  const dispatch = useDispatch();  

 const createFunction = async(product, files)=> {
   
  const data =  dispatch(startCreateProduct(product,files));

    return data
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-form-container">
      <h2>Create product</h2>
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
            value={category}
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
        <InputFile
          files={files}
          error={messageError}
          handleFileChange={handleFileChange}
          resetFiles={resetFiles}
        />
        <CreateButton createFunction={() => createFunction(formState, files)} />
      </form>

      <Toaster />
    </div>
  );
};


