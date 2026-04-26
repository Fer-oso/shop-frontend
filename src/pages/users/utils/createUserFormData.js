export const createUserFormData = (userRegister, files) => {
  const REQUEST_NAME = "user";

  const REQUEST_NAME_FILES = "image";

  const userJSON = JSON.stringify(userRegister);

  const userBLOB = new Blob([userJSON], {
    type: "application/json",
  });

  const formDataUser = new FormData();

  formDataUser.append(REQUEST_NAME, userBLOB);

  if (files && files.length > 0) {
    files.forEach((file) => {
      formDataUser.append(REQUEST_NAME_FILES, file);
    });
  }

  return formDataUser;
};
