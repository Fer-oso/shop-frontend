export const InputFile = ({
  files,
  messageError,
  handleFileChange,
  resetFiles,
}) => {
  return (
    <>
      <div className="file-uploader p-3">
        {/* Input de archivo */}
        <div className="mb-3">
          <label htmlFor="file" className="form-label fw-bold">
            Upload file:
          </label>
          <input
            type="file"
            id="file"
            className="form-control"
            multiple
            onChange={handleFileChange}
          />
          {messageError && <p className="text-danger mt-2">{messageError}</p>}
        </div>

        {/* Lista de archivos seleccionados */}
        {files.length > 0 && (
          <div className="file-list mt-3 p-2 border rounded">
            <ul className="list-group">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    📄 {file.name}
                    <small className="text-muted">
                      {" "}
                      ({(file.size / 1024).toFixed(2)} KB)
                    </small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botón Reset */}
        <div className="d-flex justify-items-start mt-3">
          <button
            type="button"
            className="w-20 py-3 md:py-4 bg-yellow-500 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-yellow-600 transition-all"
            onClick={resetFiles}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
