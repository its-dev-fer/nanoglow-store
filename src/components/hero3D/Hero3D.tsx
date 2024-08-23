import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Sections from '../sections/Sections';
import logo from '../../assets/logo.png';
import * as THREE from 'three';
import Particles from 'react-tsparticles';

const Cube = () => {
  const meshRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const { x, y } = state.mouse;
      meshRef.current.rotation.y = x * Math.PI;
      meshRef.current.rotation.x = y * Math.PI;
    }
  });

  return (
    <lineSegments ref={meshRef} rotation={[0, 0, 0]}>
      <wireframeGeometry
        attach="geometry"
        args={[new THREE.BoxGeometry(3.7, 3.7, 3.7, 1, 1, 1)]}
      />
      <lineBasicMaterial color="white" />
    </lineSegments>
  );
};

const Hero3D = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[#1B1B1B] flex flex-col md:flex-row items-center justify-center p-4">
        <img
          src={logo}
          alt="Nanoglow Designs"
          className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20"
        />
        <div className="text-left text-white z-10 mx-auto max-w-xl md:max-w-3xl ml-4 md:ml-20">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
            LA IMPRESIÓN 3D
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
            REIMAGINADA
          </h1>
          <button className="hidden md:block px-8 py-3 md:px-10 md:py-4 bg-[#5D3D9A] hover:bg-purple-500 text-white text-sm md:text-lg rounded-full transition mt-6">
            Explora nuestros servicios
          </button>
        </div>

        <div className="w-full h-1/3 md:w-1/2 md:h-2/3 relative mx-auto mt-8 md:mt-0">
          <Canvas className="absolute inset-0">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
          </Canvas>
        </div>

        <button className="md:hidden px-8 py-3 bg-[#5D3D9A] hover:bg-purple-500 text-white text-sm rounded-full transition mt-12">
          Explora nuestros servicios
        </button>

        <Particles
          options={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              move: {
                speed: 2,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
      </div>

      {/* Secciones */}
      <div className="bg-white">
        <Sections />
      </div>
    </>
  );
};

export default Hero3D;
