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
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 tracking-tight">
        Editar Producto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campos de formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFieldValues.map((values) => (
            <React.Fragment key={values.name}>
              {values.type === "textarea" ? (
                <div className="md:col-span-2">
                  <Label
                    labelText={values.name}
                    className="block mb-1 text-sm font-medium text-gray-700"
                  />
                  <TextArea
                    name={values.name}
                    value={values.value || ""}
                    placeholder={values.placeholder}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : values.type === "checkbox" ? (
                <div className="flex items-center space-x-3 md:col-span-2">
                  <CheckBox
                    id={values.name}
                    type={values.type}
                    name={values.name}
                    checked={values.value}
                    onChange={onCheckboxChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <Label
                    labelText={values.name}
                    className="text-sm font-medium text-gray-700"
                  />
                </div>
              ) : (
                <div>
                  <Label
                    labelText={values.name}
                    className="block mb-1 text-sm font-medium text-gray-700"
                  />
                  <InputField
                    type={values.type}
                    name={values.name}
                    value={values.value?.name || values.value}
                    onChange={onInputChange}
                    placeholder={values.placeholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Imagen actual */}
        <div>
          <ImageForm images={images} text="Imagen actual del producto" />
        </div>

        {/* Archivos + botón de editar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <InputFile
            files={files}
            error={error}
            handleFileChange={handleFileChange}
            resetFiles={resetFiles}
          />

          <EditProductButton
            editFunction={() => editFunction(id, formState, files)}
            styles="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
          />
        </div>
      </form>
    </div>
  );
};
