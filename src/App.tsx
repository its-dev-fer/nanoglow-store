import Hero3D from './components/hero3D/Hero3D'
import AppRoutes from "./routes/AppRoutes";  

const App: React.FC = () => {
  return (
    <>
      <Hero3D></Hero3D>
      <AppRoutes />
    </>
  );
};

export default App;
