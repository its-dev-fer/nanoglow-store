import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero3D from "../components/hero3D/Hero3D";
import RegisterForm from "../components/formulario-registro/RegisterForm";
import LoginForm from '../components/Formulario-login/LoginForm';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero3D />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
