import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">KNU</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
