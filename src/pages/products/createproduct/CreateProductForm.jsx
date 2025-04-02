import React from "react";
import "../styles/ProductForm.css";
import { useForm } from "../../../components/hooks/useForm";
import CreateButton from "../components/buttons/CreateProductButton";
import useFileInput from "../../../components/hooks/useFileInput";
import { InputFile } from "../../hooks/InputFile";
import { Toaster } from "sonner";
import { useDispatch } from "react-redux";
import { startCreateProduct } from "../../../store/product/productThunk";
import { Label } from "../../../components/forms/label/Label";
import { InputField } from "../../../components/forms/inputs/InputField";
import { CheckBox } from "../../../components/forms/inputs/CheckBox";
import { TextArea } from "../../../components/forms/inputs/TextArea";
import { productFormValuesField } from "../models/productFormValuesField";
import { PRODUCT_MODEL } from "../models/productModel";

export const CreateProductForm = () => {
  const { formState, onCheckboxChange, onInputChange } = useForm(PRODUCT_MODEL);

  const { files, messageError, handleFileChange, resetFiles } = useFileInput();

  const dispatch = useDispatch();

  const createFunction = async (product, files) => {
    const data = dispatch(startCreateProduct(product, files));

    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formFieldValues = productFormValuesField({ ...formState });

  return (
    <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg  transition-transform">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Crear Producto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {formFieldValues.map((values, index) => (
          <React.Fragment key={values.name}>
            {values.type === "textarea" ? (
              <>
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
                  value={values.value}
                  onChange={onInputChange}
                  placeholder={values.placeholder}
                  styles="w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </>
            )}
          </React.Fragment>
        ))}

        <InputFile
          files={files}
          error={messageError}
          handleFileChange={handleFileChange}
          resetFiles={resetFiles}
        />

        <CreateButton
          createFunction={() => createFunction(formState, files)}
          styles="w-full py-3 md:py-4 bg-blue-600 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-blue-700 transition-all"
        />
      </form>

      <Toaster />
    </div>
  );
};
