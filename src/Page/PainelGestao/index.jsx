import React from 'react';
import Header from '../../component/Header';
import './style.css';
import { FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa';  // Adiciona o ícone de lupa

const employees = [
  {
    photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?crop=faces&fit=crop&h=40&w=40",
    name: "Karen Loren",
    mobile: "Analista jurídico",
    email: "loren@gmail.com",
    status: "Active",
  },
  {
    photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?crop=faces&fit=crop&h=40&w=40",
    name: "Manuela Loren",
    mobile: "Analista jurídico",
    email: "loren@gmail.com",
    status: "Active",
  },
  {
    photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?crop=faces&fit=crop&h=40&w=40",
    name: "Manuela Loren",
    mobile: "Analista jurídico",
    email: "loren@gmail.com",
    status: "Active",
  },
  {
    photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?crop=faces&fit=crop&h=40&w=40",
    name: "Manuela Loren",
    mobile: "Analista jurídico",
    email: "loren@gmail.com",
    status: "Active",
  },
  {
    photo: "https://images.pexels.com/photos/6954170/pexels-photo-6954170.jpeg?crop=faces&fit=crop&h=40&w=40",
    name: "Manuela Loren",
    mobile: "Analista jurídico",
    email: "loren@gmail.com",
    status: "Active",
  },
  {
    photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?crop=faces&fit=crop&h=40&w=40",
    name: "Manuela Loren",
    mobile: "Analista jurídico",
    email: "loren@gmail.com",
    status: "Active",
  },
];

const PainelGestao = () => {
  return (
    <div className="painel-gestao-container">
      <Header />
      <div className="management-panel">
        <div className="search">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Pesquise..." className="search-input" />
          </div>
          <div className="profile-info">
            <img 
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?crop=faces&fit=crop&h=40&w=40" 
              alt="Profile" 
              className="profile-picture" 
            />
            <div className="profile-text">
              <p className="profile-name">Karen Loren</p>
              <p className="profile-position">Analista jurídico</p>
            </div>
          </div>
        </div>

        {/* Botões fora do card */}
        <div className="management-actions">
          <button className="btn primary">Adicionar novo</button>
          <button className="btn secondary">Exportar dados (Excel)</button>
        </div>

        {/* Card container */}
        <div className="card-container">
          <div className="management-header">
            <h1>Membros</h1>
          </div>

          <div className="table-responsive">
            <table className="members-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td><img src={employee.photo} alt="Profile" /></td>
                    <td>{employee.name}</td>
                    <td>{employee.mobile}</td>
                    <td>{employee.email}</td>
                    <td>
                      <span className={`status ${employee.status === 'Active' ? 'active' : 'inactive'}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-icon edit-btn"><FaEdit /></button>
                      <button className="btn-icon delete-btn"><FaTrashAlt /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelGestao;
