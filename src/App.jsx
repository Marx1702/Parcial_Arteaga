import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
import LoginForm from './views/Auth/Login/LoginForm';
import RegisterForm from './views/Auth/Register/RegisterForm';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/consultorios" element={<Consultorios />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/prestadores" element={<Prestadores />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

// Componentes de relleno para las rutas adicionales
const Consultorios = () => <div>Consultorios Page</div>;
const Especialidades = () => <div>Especialidades Page</div>;
const Prestadores = () => <div>Prestadores Page</div>;

export default App;
