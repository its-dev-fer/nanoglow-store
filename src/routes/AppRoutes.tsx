// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from '../components/formulario-registro/RegisterForm';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
