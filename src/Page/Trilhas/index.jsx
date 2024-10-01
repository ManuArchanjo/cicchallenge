import React from 'react';
import { Link } from 'react-router-dom';
import capaTrilha from '../../Imagens/Capa-trilha.png'; 
import capaCard1 from '../../Imagens/capa-trilha1.png'; 
import capaCard2 from '../../Imagens/financeiro.png';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { FaSearch } from 'react-icons/fa';
import './style.css';

const Trilhas = () => (
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
            {/* <div className="cards-container-trilha">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="card-trilhas">
                        <img src={capaCard1} alt="Capa da trilha" className="card-image" />
                        <div className="card-content">
                            <h3>Nossa Plataforma</h3>
                            <p>Entenda e explore a plataforma da CIC+ com a nossa trilha.</p>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="trilhas-container margin-bottom-78">
            <div className="title-container">
                <h2>FINANCEIRO</h2>
                <hr />
            </div>
            <div className="cards-container-trilha">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="card-trilhas">
                        <Link to="/financeiro" className='header_link'>
                            <img src={capaCard2} alt="Capa da trilha" className="card-image" />
                            <div className="card-content">
                                <h3>Setor Tributário</h3>
                                <p>Descubra como minimizar sua carga tributária pessoal e empresarial. Estratégias eficazes para otimizar sua situação fiscal.</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </div>
);

export default Trilhas;
