import { useState } from "react";

const useFileInput = (initialFiles = []) => {
  const [files, setFiles] = useState(initialFiles);
  const [messageError, setMessageERror] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convierte FileList en un array
    if (!selectedFiles.length) {
      setFiles([]);
      setMessageERror("No se seleccionaron archivos.");
      return;
    }

    // Validación: solo permitir archivos válidos
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/avif",
    ];

    const maxSize = 2 * 1024 * 1024; // 2 MB por archivo

    const invalidFiles = selectedFiles.filter(
      (file) => !validTypes.includes(file.type) || file.size > maxSize
    );

    if (invalidFiles.length > 0) {
      setError(
        `Algunos archivos no son válidos: ${invalidFiles
          .map((file) => file.name)
          .join(", ")}`
      );
      setFiles([]);
      return;
    }

    setFiles(selectedFiles);
    setMessageERror(null);
  };

  const resetFiles = () => {
    setFiles([]);
    setMessageERror(null);
  };

  return { files, messageError, handleFileChange, resetFiles };
};

export default useFileInput;
