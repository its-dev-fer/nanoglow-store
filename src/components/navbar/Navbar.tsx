import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import lupaIcon from '../../assets/Lupa.svg';
import xIcon from '../../assets/X.svg';
import bolsaIcon from '../../assets/bolsa.svg';
import userIcon from '../../assets/user.svg'; 

const Navbar: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="bg-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center w-1/2">
        <Link to="/" className="text-white text-lg font-bold">
          <img
            src={logo}
            alt="Nanoglow Designs"
            className="w-16 h-16 md:w-14 md:h-14"
          />
        </Link>

        {!isSearchVisible && (
          <div className="flex-grow mx-4 flex justify-center space-x-4">
            <Link to="/impresoras" className="text-black-300 hover:text-white">
              Impresoras
            </Link>
            <Link to="/modelos3d" className="text-black-300 hover:text-white">
              Modelos 3D
            </Link>
            <Link to="/filamentos" className="text-black-300 hover:text-white">
              Filamentos
            </Link>
            <Link to="/cursos" className="text-black-300 hover:text-white">
              Cursos
            </Link>
          </div>
        )}

        {isSearchVisible && (
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        <div className="flex items-center space-x-4">
          <div onClick={toggleSearch} className="cursor-pointer">
            <img
              src={isSearchVisible ? xIcon : lupaIcon}
              alt={isSearchVisible ? "Cerrar" : "Buscar"}
              className={isSearchVisible ? "w-4 h-4 md:w-6 md:h-6" : "w-6 h-6 md:w-8 md:h-8"}
            />
          </div>
          <img
            src={bolsaIcon}
            alt="Bolsa de compras"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <div className="flex flex-col items-center">
            <img
              src={userIcon} 
              alt="User Icon"
              className="w-6 h-6 md:w-8 md:h-8 mb-1" 
            />
            <Link to="/login" className="text-black-300 hover:text-white">
              Inicio Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
