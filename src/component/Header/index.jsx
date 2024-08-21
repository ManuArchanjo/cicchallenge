import React from 'react';
import Logo from '../../Imagens/Logo.png'
import perfil from '../../Imagens/perfil.jpeg'
import "./style.css";

const Header = () => (
  <div className="header">
    <div className='header_menu'>
      <div className="header_logo">
        <img src={Logo} alt="CIC+" />
        <p className="header_logo-text">cic +</p>
      </div>
      <div className="header_separator"></div>
      <ul className="header_nav">
        <li>Home</li>
        <li>Painel Gestão</li>
        <li>Oportunidades</li>
        <li>Cursos</li>
      </ul>
    </div>
    <div>
      <div className="header_profile">
        <input type="text" className="header_search" placeholder="Search..." />
        {/* vou trocar pela lib posteriormente o buscar */}
        <img src={perfil} alt="Profile" />
      </div>
    </div>
  </div>
);

export default Header;
