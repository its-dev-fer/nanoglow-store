import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import lupaIcon from '../../assets/Lupa.svg';
import xIcon from '../../assets/X.svg';
import bolsaIcon from '../../assets/bolsa.svg';
import userIcon from '../../assets/user.svg';

const Navbar: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-50 w-2/3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-lg font-bold">
          <img
            src={logo}
            alt="Nanoglow Designs"
            className="w-16 h-16 md:w-14 md:h-14"
          />
        </Link>
        {!isSearchVisible && (
          <div className="flex-grow mx-4 flex justify-center space-x-10">
            <Link
              to=""
              className={`text-lg ${selectedSection === 'Impresoras' ? 'text-purple-600' : 'text-black-300 hover:text-purple-600'}`}
              onClick={() => handleSectionClick('Impresoras')}
            >
              Impresoras
            </Link>
            <Link
              to=""
              className={`text-lg ${selectedSection === 'Modelos 3D' ? 'text-purple-600' : 'text-black-300 hover:text-purple-600'}`}
              onClick={() => handleSectionClick('Modelos 3D')}
            >
              Modelos 3D
            </Link>
            <Link
              to=""
              className={`text-lg ${selectedSection === 'Filamentos' ? 'text-purple-600' : 'text-black-300 hover:text-purple-600'}`}
              onClick={() => handleSectionClick('Filamentos')}
            >
              Filamentos
            </Link>
            <Link
              to=""
              className={`text-lg ${selectedSection === 'Cursos' ? 'text-purple-600' : 'text-black-300 hover:text-purple-600'}`}
              onClick={() => handleSectionClick('Cursos')}
            >
              Cursos
            </Link>
          </div>
        )}
        {isSearchVisible && (
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Mickey Mouse..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          </div>
        )}

        <div className="flex items-center space-x-8">
          <div onClick={toggleSearch} className="cursor-pointer">
            <img
              src={isSearchVisible ? xIcon : lupaIcon}
              alt={isSearchVisible ? "Cerrar" : "Buscar"}
              className={isSearchVisible ? "w-4 h-4 md:w-8 md:h-8" : "w-6 h-6 md:w-8 md:h-8"}/>
          </div>
          <img
            src={bolsaIcon}
            alt="Bolsa de compras"
            className="w-6 h-6 md:w-8 md:h-8"/>
          <div className="flex flex-col items-center">
            <img
              src={userIcon} 
              alt="User Icon"
              className="w-6 h-6 md:w-8 md:h-8 mb-1"/>
            <Link to="/login" className="text-black-300 hover:text-purple-600 text-lg">
              Inicio Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
