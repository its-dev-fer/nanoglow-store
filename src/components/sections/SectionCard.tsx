import React from 'react';

interface SectionCardProps {
    imageSrc: string;
    title: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ imageSrc, title }) => {
    return (
        // Falta hacerlo mas responsive y pendiente la forma en que se ven las imagenes
        <div className="relative w-full">
            {/* Contenedor de la Imagen */}
            <div className="relative h-[30rem] sm:h-[20rem] lg:h-[19rem] overflow-hidden">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 bottom-[-4rem]">
                    <h2 className="text-white text-7xl sm:text-4xl lg:text-7xl font-extrabold tracking-extra-wide">{title}</h2>
                </div>
            </div>

            {/* Contenedor en Blanco Debajo de la Imagen */}
            <div className="relative bg-white h-[45rem] sm:h-[30rem] shadow-lg mt-[-4rem] sm:mt-[-3rem]">
                {/* Tarjeta Blanca Superpuesta */}
                <div className="absolute top-[-2.8rem]  sm:top[-2rem] left-1/2 transform -translate-x-1/2 z-20 w-[90%] h-[93%] bg-white p-4 sm:p-6 rounded-lg shadow-[0px_-10px_20px_rgba(0,0,0,0.15),-10px_0px_20px_rgba(0,0,0,0.15),10px_0px_20px_rgba(0,0,0,0.15),0px_-15px_15px_rgba(0,0,0,0.3)]">
                    {/* Aquí va el contenido de la tarjeta */}
                    <h3 className="text-xl font-semibold mb-4">Aqui van los productos</h3>
                </div>
            </div>
        </div>
    );
};

export default SectionCard;