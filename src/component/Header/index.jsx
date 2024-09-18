import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Imagens/Logo.png';
import perfil from '../../Imagens/perfil.jpeg';
import './style.css';

const Header = () => (
  <div className="header">
    <div className="header_menu">
      <div className="header_logo">
        <img src={Logo} alt="CIC+" />
        <p className="header_logo-text">cic +</p>
      </div>
      <div className="header_separator"></div>
      <ul className="header_nav">
        <li>
          <Link to="/" className="header_link">Home</Link></li>
        <li>Painel Gestão</li>
        <li>Oportunidades</li>
        <li>
          <Link to="/trilhas" className="header_link">Cursos</Link> 
        </li>
      </ul>
    </div>
    <div>
      <div className="header_profile">
        <img src={perfil} alt="Profile" />
      </div>
    </div>
  </div>
);

export default Header;
