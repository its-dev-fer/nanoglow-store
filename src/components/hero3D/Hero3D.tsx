import ParticleField from 'react-particles-webgl';


const config = {
  showCube: false,
  dimension: '3D',
  boundaryType: 'bounce',
  velocity: 2,
  antialias: true,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1,
  },
  lines: {
    colorMode: 'solid',
    color: '#FFFFFF', 
    transparency: 0.8,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 150,
    visible: true,
  },
  particles: {
    colorMode: 'solid',
    color: '#FFFFFF', 
    transparency: 0.8,
    shape: 'circle',
    count: 300,
    minSize: 10,
    maxSize: 30,
    visible: true,
  },
  cameraControls: {
    enabled: true,
    enableDamping: true,
    dampingFactor: 0.2,
    enableZoom: true,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    resetCameraFlag: false,
  },
};

const Hero3D = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      <ParticleField config={config} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <img src="/logo.png" alt="Logo" className="mb-5 mx-auto" />
        <h1 className="text-4xl font-bold mb-5">LA IMPRESIÓN 3D REIMAGINADA</h1>
        <button className="bg-purple-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-purple-700 transition duration-300">
          Explora nuestros servicios
        </button>
      </div>
    </div>
  );
};

export default Hero3D;
