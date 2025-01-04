import React from 'react'

export const Footer =() =>{
    return (
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[360px]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Sección principal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div>
              <h2 className="text-2xl font-bold text-indigo-400">MyBrand</h2>
              <p className="mt-3 text-gray-400">
                Quality and elegance in every detail. Discover our latest
                collection.
              </p>
            </div>

            {/* Enlaces útiles */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="hover:text-indigo-400 transition">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="hover:text-indigo-400 transition">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="hover:text-indigo-400 transition">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="hover:text-indigo-400 transition">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Línea separadora */}
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}