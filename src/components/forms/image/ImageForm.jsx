import React from "react";

export const ImageForm = ({ images }) => {
  return (
    <>
      {images.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {images.map((image) => (
            <div key={image.id} className="form-group">
              <label>Profile image</label>
              <img
                src={image.downloadUrl}
                className="w-32 h-32 rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No hay imágenes disponibles</p>
      )}
    </>
  );
};
