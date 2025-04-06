import React from "react";
import { useForm } from "../../../components/hooks/useForm";
import useFileInput from "../../../components/hooks/useFileInput";
import { InputFile } from "../../../components/forms/inputs/InputFile";
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
    <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-transform">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Editar Producto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* GRID en pantallas grandes y columna en móviles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {formFieldValues.map((values) => (
            <React.Fragment key={values.name}>
              {values.type === "textarea" ? (
                <div className="col-span-2">
                  <Label
                    labelText={values.name}
                    className="font-medium text-gray-700"
                  />
                  <TextArea
                    name={values.name}
                    value={values.value}
                    placeholder={values.placeholder}
                    onChange={onInputChange}
                    styles="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ) : values.type === "checkbox" ? (
                <div className="flex items-center gap-2">
                  <CheckBox
                    id={values.name}
                    type={values.type}
                    name={values.name}
                    checked={values.value}
                    onChange={onCheckboxChange}
                    styles="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <Label
                    labelText={values.name}
                    className="font-medium text-gray-700 text-sm md:text-base"
                  />
                </div>
              ) : (
                <div>
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
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <ImageForm images={images} text={"product image"} />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <InputFile
            files={files}
            error={error}
            handleFileChange={handleFileChange}
            resetFiles={resetFiles}
          />

          <EditProductButton
            editFunction={() => editFunction(id, formState, files)}
            styles="w-full lg:w-auto px-6 py-3 md:py-4 bg-blue-600 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-700 transition-all"
          />
        </div>
      </form>
    </div>
  );
};
