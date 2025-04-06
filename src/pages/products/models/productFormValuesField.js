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
    },
    {
      type: "text",
      name: "brand",
      value: brand,
      placeholder: "Ingrese marca del producto",
    },
    {
      type: "textarea",
      name: "description",
      value: description,
      placeholder: "Ingrese descripcion del producto",
    },
    {
      type: "number",
      name: "price",
      value: price,
      placeholder: "Ingrese precio del producto",
    },
    {
      type: "number",
      name: "stock",
      value: stock,
      placeholder: "Ingrese stock del producto",
    },
    {
      type: "text",
      name: "code",
      value: code,
      placeholder: "Ingrese codigo del producto",
    },
    {
      type: "text",
      name: "category",
      value: category,
      placeholder: "Ingrese categoria del producto",
    },
    {
      type: "checkbox",
      name: "available",
      value: available,
      placeholder: "",
    },
  ];
};
