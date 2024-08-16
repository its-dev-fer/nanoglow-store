import React from "react";
import AppRoutes from "./routes/AppRoutes";  
import Hero3D from './components/hero3D/Hero3D';

const App: React.FC = () => {
  return (
    <>
      <Hero3D></Hero3D>
      <AppRoutes />
    </>
  );
};

export default App;

