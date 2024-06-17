import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Register.css'; // Asegúrate de que la ruta es correcta

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', {
        email,
        password,
      });
      setMessage('Usuario registrado con éxito');
      setEmail('');
      setPassword('');
      navigate('/'); // Redirige a la página de inicio
    } catch (error) {
      console.error('Error registering:', error);
      setMessage('Error al registrar el usuario');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        {message && <div style={{ marginTop: '1rem', color: 'white' }}>{message}</div>}
      </div>
    </div>
  );
};

export default RegisterForm;
