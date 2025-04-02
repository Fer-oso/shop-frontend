import React from "react";
import "../styles/ProductForm.css";
import { useForm } from "../../../components/hooks/useForm";
import useFileInput from "../../../components/hooks/useFileInput";
import { InputFile } from "../../hooks/InputFile";
import { useLoaderData } from "react-router-dom";
import EditProductButton from "../components/buttons/EditProductButton";
import { useDispatch } from "react-redux";
import { startEditProduct } from "../../../store/product/productThunk";
import { productFormValuesField } from "../models/productFormValuesField";
import { TextArea } from "../../../components/forms/inputs/TextArea";
import { CheckBox } from "../../../components/forms/inputs/CheckBox";
import { InputField } from "../../../components/forms/inputs/InputField";
import { Label } from "../../../components/forms/label/Label";
import { ImageForm } from "../../../components/forms/image/ImageForm";

export const EditProductForm = () => {
  const { data } = useLoaderData();

  const dispatch = useDispatch();

  const { formState, onCheckboxChange, onInputChange } = useForm(data.response);

  const { files, error, handleFileChange, resetFiles } = useFileInput();

  const { id, images } = formState;

  const formFieldValues = productFormValuesField({ ...formState });

  const editFunction = (id, product, files) => {
    dispatch(startEditProduct(id, product, files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg  transition-transform">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Editar Producto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {formFieldValues.map((values) => (
          <React.Fragment key={values.name}>
            {values.type === "textarea" ? (
              <>
                <Label
                  labelText={values.name}
                  className="font-medium text-gray-700"
                />
                <TextArea
                  name={values.name}
                  value={values.value ?? ""}
                  placeholder={values.placeholder}
                  onChange={onInputChange}
                  styles="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </>
            ) : values.type === "checkbox" ? (
              <div className="flex items-center gap-2">
                <CheckBox
                  id={values.name}
                  type={values.type}
                  name={values.name}
                  value={values.value}
                  onChange={onCheckboxChange}
                  styles="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <Label
                  labelText={values.name}
                  className="font-medium text-gray-700 text-sm md:text-base"
                />
              </div>
            ) : (
              <>
                <Label
                  labelText={values.name}
                  className="font-medium text-gray-700 text-sm md:text-base"
                />
                <InputField
                  type={values.type}
                  name={values.name}
                  value={values.value?.name || values.value}
                  onChange={onInputChange}
                  placeholder={values.placeholder}
                  styles="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </>
            )}
          </React.Fragment>
        ))}

        <ImageForm images={images} />
        <InputFile
          files={files}
          error={error}
          handleFileChange={handleFileChange}
          resetFiles={resetFiles}
        />
        <EditProductButton
          editFunction={() => editFunction(id, formState, files)}
          styles="w-full py-3 md:py-4 bg-blue-600 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-700 transition-all"
        />
      </form>
    </div>
  );
};
