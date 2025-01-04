import React from 'react'

export const Arrivals = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r bg-slate-50 mt-3">
        {/* Contenedor de Texto + Botón alineado a la derecha */}
        <div className="relative mx-auto max-w-7xl mt-5 px-4 sm:px-6 lg:px-8">
          <div className="sm:max-w-3xl lg:max-w-5xl flex flex-col sm:flex-row items-center lg:justify-between gap-6">
            <div className="sm:max-w-lg text-center sm:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Explore our new summer collection, crafted to bring elegance and
                comfort while embracing the latest trends.
              </p>
            </div>

            {/* Botón alineado a la derecha en pantallas grandes */}
            <a
              href="#"
              className="inline-block rounded-lg border border-transparent bg-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Explore Collection
            </a>
          </div>

          {/* Grid de Imágenes Mejorado */}
          <div className="mt-12 flex justify-center sm:justify-start">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "home-page-03-hero-image-tile-01.jpg",
                "home-page-03-hero-image-tile-02.jpg",
                "home-page-03-hero-image-tile-03.jpg",
                "home-page-03-hero-image-tile-04.jpg",
                "home-page-03-hero-image-tile-05.jpg",
                "home-page-03-hero-image-tile-06.jpg",
                "home-page-03-hero-image-tile-07.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={`https://tailwindui.com/plus/img/ecommerce-images/${img}`}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto max-w-xs object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
   
    </div>
  );
}
