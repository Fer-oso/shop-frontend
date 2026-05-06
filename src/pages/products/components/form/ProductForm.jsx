import React from "react";
import { productFormValuesField } from "../../models/productFormValuesField";
import { Label } from "../../../../components/forms/label/Label";
import { TextArea } from "../../../../components/forms/inputs/TextArea";
import { CheckBox } from "../../../../components/forms/inputs/CheckBox";
import { InputField } from "../../../../components/forms/inputs/InputField";
import { InputFile } from "../../../../components/forms/inputs/InputFile";
import useFileInput from "../../../../components/hooks/useFileInput";
import { Button } from "../../../../components/buttons/Button";
import { useForm } from "../../../../components/hooks/useForm";
import { ImageForm } from "../../../../components/forms/image/ImageForm";

export const ProductForm = ({
  mode,
  initialFormState,
  userActionFunction,
  fieldErrors,
}) => {
  const { formState, onCheckboxChange, onInputChange } =
    useForm(initialFormState);

  const formFieldValues = productFormValuesField({ ...formState });

  const { images } = formState;

  const { files, messageError, handleFileChange, resetFiles } = useFileInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...formState,
      category: {
        name: formState.category,
      },
    };

    userActionFunction(product, files);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* GRID en pantallas grandes y columna en móviles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFieldValues.map((value) => {
            const inputClassName = fieldErrors?.[value.name]
              ? "w-full px-3 py-2  border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-red-100"
              : "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

            return (
              <React.Fragment key={value.name}>
                {value.type === "textarea" ? (
                  <div className="col-span-2">
                    <Label
                      labelText={value.name}
                      className="block mb-1 text-sm font-medium text-gray-700"
                    />
                    <TextArea
                      name={value.name}
                      value={value.value}
                      placeholder={value.placeholder}
                      onChange={onInputChange}
                      className="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                ) : value.type === "checkbox" ? (
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <CheckBox
                      id={value.name}
                      type={value.type}
                      name={value.name}
                      value={value.value}
                      onChange={onCheckboxChange}
                      className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <Label
                      labelText={value.name}
                      className="text-sm font-medium text-gray-700"
                    />
                  </div>
                ) : (
                  <div>
                    <Label
                      labelText={value.name}
                      className="block mb-1 text-sm font-medium text-gray-700"
                    />
                    <InputField
                      type={value.type}
                      name={value.name}
                      value={value.value?.name || value.value}
                      onChange={onInputChange}
                      placeholder={value.placeholder}
                      required={value.required}
                      className={inputClassName}
                    />
                    {fieldErrors?.[value.name] && (
                      <p className="mt-1 text-xs text-red-500">
                        {fieldErrors[value.name]}
                      </p>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div>
          <ImageForm images={images} text="Imagen actual del producto" />
        </div>

        {/* Sección de Archivo y Botón en Fila en Pantallas Grandes */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <InputFile
            files={files}
            error={messageError}
            handleFileChange={handleFileChange}
            resetFiles={resetFiles}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
            children={mode}
          />
        </div>
      </form>
    </>
  );
};
