import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero3D from "../components/hero3D/Hero3D";
import RegisterForm from "../components/formulario-registro/RegisterForm";
import LoginForm from "../components/Formulario-login/LoginForm";
import Navbar from "../components/navbar/Navbar";
import UpdateForm from "../components/formulario-actualizacion/UpdateForm";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero3D />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
