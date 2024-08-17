import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero3D from "../components/hero3D/Hero3D";
import RegisterForm from "../components/formulario-registro/RegisterForm";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero3D />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
