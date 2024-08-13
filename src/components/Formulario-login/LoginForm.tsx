import React from 'react';
import '../styles/LoginForm.css';

const LoginForm: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    alert('Inicio sesion con exito');
  };

  return (
    <div className="login">
      <h1>Bienvenido</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password"/>
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
