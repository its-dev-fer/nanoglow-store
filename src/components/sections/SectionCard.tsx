import React from 'react';

interface SectionCardProps {
  imageSrc: string;
  title: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ imageSrc, title }) => {
    return (
        <div className="relative w-full h-screen">
            {/* Contenedor de la Imagen */}
            <div className="relative h-[30rem] sm:h-[15rem]">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h2 className="text-white md:text-7xl font-bold tracking-extra-wide">{title}</h2>
                </div>
            </div>

            {/* Contenedor en Blanco Debajo de la Imagen */}
            <div className="bg-white h-[45rem] sm:h-[30rem] -mt-10 sm:-mt-6 shadow-lg"></div>
        </div>
    );
};

export default SectionCard;
