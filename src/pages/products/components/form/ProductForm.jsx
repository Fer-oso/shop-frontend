import React from "react";
import { productFormValuesField } from "../../models/productFormValuesField";
import { Label } from "../../../../components/forms/label/Label";
import { TextArea } from "../../../../components/forms/inputs/TextArea";
import { CheckBox } from "../../../../components/forms/inputs/CheckBox";
import { InputField } from "../../../../components/forms/inputs/InputField";
import { InputFile } from "../../../../components/forms/inputs/InputFile";
import useFileInput from "../../../../components/hooks/useFileInput";
import { Button } from "../../../../components/buttons/Button";

export const ProductForm = ({
  mode,
  formState,
  onCheckboxChange,
  onInputChange,
  userActionFunction,
}) => {
  const formFieldValues = productFormValuesField({ ...formState });

  const { files, messageError, handleFileChange, resetFiles } = useFileInput();

  const title = mode === "edit" ? "Editar Producto" : "Crear Producto";

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
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 tracking-tight">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* GRID en pantallas grandes y columna en móviles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFieldValues.map((values) => (
            <React.Fragment key={values.name}>
              {values.type === "textarea" ? (
                <div className="col-span-2">
                  <Label
                    labelText={values.name}
                    className="block mb-1 text-sm font-medium text-gray-700"
                  />
                  <TextArea
                    name={values.name}
                    value={values.value}
                    placeholder={values.placeholder}
                    onChange={onInputChange}
                    className="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ) : values.type === "checkbox" ? (
                <div className="flex items-center space-x-3 md:col-span-2">
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
                    value={values.value}
                    onChange={onInputChange}
                    placeholder={values.placeholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
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
    </div>
  );
};
