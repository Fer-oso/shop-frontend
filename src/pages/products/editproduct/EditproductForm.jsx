import React from "react";
import { useForm } from "../../../components/hooks/useForm";
import useFileInput from "../../../components/hooks/useFileInput";
import { InputFile } from "../../../components/forms/inputs/InputFile";
import { useParams } from "react-router-dom";
import EditProductButton from "../components/buttons/EditProductButton";
import { useDispatch, useSelector } from "react-redux";
import { startEditProduct } from "../../../store/product/productThunk";
import { productFormValuesField } from "../models/productFormValuesField";
import { TextArea } from "../../../components/forms/inputs/TextArea";
import { CheckBox } from "../../../components/forms/inputs/CheckBox";
import { InputField } from "../../../components/forms/inputs/InputField";
import { Label } from "../../../components/forms/label/Label";
import { ImageForm } from "../../../components/forms/image/ImageForm";
import { ErrorMessage } from "../../../components/alerts/ErrorMessage";

export const EditProductForm = ({ product, message }) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { formState, onCheckboxChange, onInputChange } = useForm(product);

  const { files, error, handleFileChange, resetFiles } = useFileInput();

  const { images } = formState;

  const formFieldValues = productFormValuesField({ ...formState });

  const editFunction = (id, product, files) => {
    dispatch(startEditProduct(id, product, files));
  };

  return (
    <>
      {message?.error ? (
        <ErrorMessage
          message={message}
          status={message}
          code={message}
          timestamp={message}
        />
      ) : (
        <>
          <form className="space-y-6">
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
        </>
      )}
    </>
  );
};
