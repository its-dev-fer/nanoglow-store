import React, { useState } from 'react';
import '../styles/RegisterForm.css';

const RegisterForm: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		console.log('Nombre:', name);
		console.log('Email:', email);
		console.log('Contraseña:', password);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Registro</h2>
			<div>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Contraseña:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit">Registrarse</button>
		</form>
	);
};

export default RegisterForm;