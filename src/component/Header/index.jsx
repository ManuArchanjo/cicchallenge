import React, { useState } from 'react';
import './style.css';
import teste from "../../Imagens/Logo.png"
import { FaUser, FaBook, FaCheckCircle, FaCalendarAlt, FaTrophy, FaComments } from 'react-icons/fa';

const Sidebar = () => {
  const [selected, setSelected] = useState("");

  const menuItems = [
    { name: "Fundamentos", icon: <FaUser /> },
    { name: "Oportunidades", icon: <FaBook /> },
    { name: "Cursos", icon: <FaTrophy /> },
  ];

  return (
    <div>
      <div className="sidebar_logo">
        <img src={teste} alt="CIC+" className="logo" /> 
        <h1>CIC +</h1>
      </div>
      <div className='azul'>
      <div className="container" id="cont">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`containerblue ${selected === item.name ? "active" : ""}`}
          onClick={() => setSelected(item.name)}
        >
          <div className="btn top"></div>
          <div className="btn middle">
            {item.icon} <span>{item.name}</span>
          </div>
          <div className="btn bottom"></div>
        </div>
      ))}
    </div>

    </div>
    </div>  
  );
};

export default Sidebar;
