import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Vamos a usar un archivo CSS para estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/consultorios">Consultorios</Link>
        <Link to="/especialidades">Especialidades</Link>
        <Link to="/prestadores">Prestadores</Link>
      </div>
      <div className="navbar-login">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
