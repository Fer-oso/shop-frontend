import { useState } from "react";

export const useForm = (initialFormState = {}) => {
  const [formState, setFormState] = useState(initialFormState);

  //function to control value form
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //function to control checked form
  const onCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    setFormState({
      ...formState,
      [name]: checked,
    });
  };

  return {
    formState,
    setFormState,
    onInputChange,
    onCheckboxChange,
  };
};
