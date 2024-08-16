import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    alert('Inicio de sesión con éxito');
    try {
      const response = await fetch("URL_DEL_BACKEND/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      const data = await response.json();
      console.log("Inicio de sesión exitoso:", data);

      
      localStorage.setItem("token", data.token);

    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      alert("Credenciales incorrectas, por favor verifica tus datos.");
    }

    
  };


  return (
    <div className="login-container">
      <div className="login">
        <h1>Iniciar Sesión</h1>
        <div className="login-registro">
          <p>
            ¿Eres nuevo?{' '}
            <span className="register-link">
              Regístrate
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Correo Electrónico:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="********"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
          <div className="login-image">
        <img src="/ImagenLogin.jpg" alt="Imagen de fondo" />
      </div>
    </div>
  );
};

export default LoginForm;
