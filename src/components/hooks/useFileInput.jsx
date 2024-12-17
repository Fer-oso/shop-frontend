import { useState } from 'react';

const useFileInput = (initialFiles = []) => {
  const [files, setFiles] = useState(initialFiles);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convierte FileList en un array
    if (!selectedFiles.length) {
      setFiles([]);
      setError('No se seleccionaron archivos.');
      return;
    }

    // Validación: solo permitir archivos válidos
    const validTypes = ['image/jpeg', 'image/png', 'image/gif','image/webp'];
    const maxSize = 2 * 1024 * 1024; // 2 MB por archivo

    const invalidFiles = selectedFiles.filter(
      (file) => !validTypes.includes(file.type) || file.size > maxSize
    );

    if (invalidFiles.length > 0) {
      setError(
        `Algunos archivos no son válidos: ${invalidFiles
          .map((file) => file.name)
          .join(', ')}`
      );
      setFiles([]);
      return;
    }

    setFiles(selectedFiles);
    setError(null);
  };



  const resetFiles = () => {
    setFiles([]);
    setError(null);
  };

  return { files, error ,handleFileChange, resetFiles };
};

export default useFileInput;