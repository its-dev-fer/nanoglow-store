import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero3D from '../components/hero3D/Hero3D';
import LoginForm from '../components/Formulario-login/LoginForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero3D />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
