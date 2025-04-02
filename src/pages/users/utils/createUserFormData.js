export const createUserFormData = ({
  requestName,
  object,
  requestNameFiles,
  files,
}) => {
  const userJSON = JSON.stringify(object);

  /** Creo un BLOB del JSON anterior */
  const userBLOB = new Blob([userJSON], {
    type: "application/json",
  });

  /** Creo un formData */

  const formDataUser = new FormData();

  formDataUser.append(requestName, userBLOB);

  if (files && files.length > 0) {
    files.forEach((file) => {
      formDataUser.append(requestNameFiles, file);
    });
  }

  return formDataUser;
};
