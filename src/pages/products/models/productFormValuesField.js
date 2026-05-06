export const productFormValuesField = ({
  name,
  brand,
  price,
  description,
  stock,
  code,
  category,
  available,
}) => {
  return [
    {
      type: "text",
      name: "name",
      value: name,
      placeholder: "Ingrese nombre del producto",
      required: true,
    },
    {
      type: "text",
      name: "brand",
      value: brand,
      placeholder: "Ingrese marca del producto",
      required: true,
    },
    {
      type: "textarea",
      name: "description",
      value: description,
      placeholder: "Ingrese descripcion del producto",
      required: false,
    },
    {
      type: "number",
      name: "price",
      value: price,
      placeholder: "Ingrese precio del producto",
      required: true,
    },
    {
      type: "number",
      name: "stock",
      value: stock,
      placeholder: "Ingrese stock del producto",
      required: true,
    },
    {
      type: "text",
      name: "code",
      value: code,
      placeholder: "Ingrese codigo del producto",
      required: true,
    },
    {
      type: "text",
      name: "category",
      value: category,
      placeholder: "Ingrese categoria del producto",
      required: true,
    },
    {
      type: "checkbox",
      name: "available",
      value: available,
      placeholder: "",
      required: false,
    },
  ];
};
