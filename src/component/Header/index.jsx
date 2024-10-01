import React from 'react';
import './style.css';
import { FaPlay, FaBook, FaList, FaUsers, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import logo from "../../Imagens/Logo.png";

const Header = () => {
  return (
    <div className="header-container">
      {/* Menu lateral */}
      <div className="sidebar">
        <div className="sidebar_logo">
          <img src={logo} alt="Sophiatech Logo" className="logo" />
          <h1 className="sidebar_title">CIC+</h1>
        </div>
        <ul className="menu-items">
          <li className="menu-item active">
            <FaPlay className="menu-icon" />
            <span>Dashboard</span>
          </li>
          <li className="menu-item">
            <FaPlay className="menu-icon" />
            <span>Play</span>
          </li>
          <li className="menu-item">
            <FaBook className="menu-icon" />
            <span>Meus Cursos</span>
          </li>
          <li className="menu-item">
            <FaList className="menu-icon" />
            <span>Minhas Trilhas</span>
          </li>
          <li className="menu-item">
            <FaUsers className="menu-icon" />
            <span>Comunidades</span>
          </li>
        </ul>
      </div>

      {/* Header principal */}
      <div className="header-content">
        <div className="header-actions">
          <FaUserCircle className="header-icon" />
          {/* <button className="header-button">Trocar Perfil</button> */}
          <FaSignOutAlt className="header-icon" />
          {/* <button className="header-button">Sair</button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
