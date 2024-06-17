import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      if (response.data.success) {
        navigate('/');
      } else {
        setError('Error al iniciar sesión: datos incorrectos.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error al iniciar sesión: datos incorrectos.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        {error && <div style={{ marginTop: '1rem', color: 'red' }}>{error}</div>} {/* Muestra el mensaje de error */}
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link to="/register" className="register-link">¿No tienes una cuenta? Regístrate</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
