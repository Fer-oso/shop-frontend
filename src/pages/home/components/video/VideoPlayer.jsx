import React from "react";
import { Link } from "react-router-dom";

const VideoPlayer = ({ videoSrc, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video en el fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      />

      {/* Contenido superpuesto */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50 px-4">
        <h1 className="text-4xl font-bold">Bienvenido a nuestra tienda</h1>
        <p className="text-lg mt-2">Descubre productos exclusivos</p>

        {/* Botón CTA */}
        <Link
          to={buttonLink}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default VideoPlayer;
