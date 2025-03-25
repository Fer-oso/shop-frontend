import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const images = [
    {
      src: "/images/hero4-min.jpg",
    },
    {
      src: "/images/hero5-min.jpg",
    },
    {
      src: "/images/hero3-min.jpg",
    },
    {
      src: "/images/hero2-min.jpg",
    },
    {
      src: "/images/hero6-min.jpg",
    },
    {
      src: "/images/hero2-min.jpg",
    },
  ];

  return (
    <div className="mx-auto my-auto ">
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Texto y Botón */}
          <div className="text-center lg:text-left max-w-2xl ">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Discover the Best in{" "}
              <span className="text-indigo-600">Fashion</span> &{" "}
              <span className="text-blue-600">Tech</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Upgrade your style and gear with our latest collections. Explore
              now and find exclusive deals!
            </p>
            <Link
              to={"/products"}
              className="mt-6 inline-block bg-indigo-600 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Shop Now
            </Link>
          </div>

          {/* Grid de Imágenes */}
          <div className="mt-12 ml-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-6 overflow-hidden">
            {/* Ropa */}

            {images.map((image, index) => (
              <div
                className="overflow-hidden rounded-xl shadow-lg transition"
                key={index}
              >
                <img
                  src={image.src}
                  alt="Fashion"
                  className="w-full h-auto  brightness-75 blur-sm hover:brightness-100 hover:blur-none transition duration-300 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};
