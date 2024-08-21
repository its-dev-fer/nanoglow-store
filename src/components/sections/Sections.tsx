import React from 'react';
import SectionCard from './SectionCard';

const sectionsData = [
  {
    imageSrc: '../../../public/section-impresoras.png',
    title: 'IMPRESORAS',
  },
  {
    imageSrc: '/../../../public/section-modelos3D.png',
title: 'MODELOS 3D',
  },
  {
    imageSrc: '../../../public/section-filamentos.png',
    title: 'FILAMENTOS',
  },
  {
    imageSrc: '../../../public/section-cursos.png',
    title: 'CURSOS',
  },
];

const Sections: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {sectionsData.map((section, index) => (
        <SectionCard
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
        />
      ))}
    </div>
  );
};

export default Sections;
