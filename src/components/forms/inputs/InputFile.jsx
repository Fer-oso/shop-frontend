export const InputFile = ({
  files,
  messageError,
  handleFileChange,
  resetFiles,
}) => {
  return (
    <div className="space-y-4 w-full">
      {/* Label + Input */}
      <div>
        <label
          htmlFor="file"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          📎 Subir archivos
        </label>
        <input
          type="file"
          id="file"
          multiple
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
        />
        {messageError && (
          <p className="mt-1 text-sm text-red-600">{messageError}</p>
        )}
      </div>

      {/* Lista de archivos seleccionados */}
      {files.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="text-sm font-medium text-gray-800 mb-2">
            Archivos seleccionados:
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm"
              >
                <span className="truncate">
                  📄 {file.name}
                  <span className="ml-2 text-xs text-gray-500">
                    ({(file.size / 1024).toFixed(2)} KB)
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Botón Reset */}
      <div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md transition"
          onClick={resetFiles}
        >
        Reset
        </button>
      </div>
    </div>
  );
};