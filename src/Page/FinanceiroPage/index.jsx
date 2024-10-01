import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import capaCard2 from '../../Imagens/financeiro.png';
import iconeFundamento from '../../Imagens/dinheiro.png';
import iconeContabilidade from '../../Imagens/moeda.png';
import iconeInternacional from '../../Imagens/tributacao.png';
import iconePessoasFisicas from '../../Imagens/pessoa.png';
import botoes from '../../Imagens/Botões.png';
import iconeTrofeu from '../../Imagens/trofeu.png';
import iconeAvancado from '../../Imagens/avancado.png';
import iconeFinanceiro from '../../Imagens/financeirotopo.png';
import { FaSearch } from 'react-icons/fa';

const FinanceiroPage = () => {
  return (
    <div>
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
        <div className="right-modules">
                <div className="modules-header">
                    <div className="points-container">
                        <img src={iconeTrofeu} alt="Troféu" className="header-icon" />
                        <span>+3.460 pontos</span>
                    </div>
                    <div className="status-container">
                        <img src={iconeAvancado} alt="Avançado" className="header-icon" />
                        <span>Avançado</span>
                    </div>
                    <div className="filter-container">
                        <img src={iconeFinanceiro} alt="Financeiro" className="header-icon" />
                        <span>Financeiro</span>
                    </div>
                    <div className="progress-container">
                        <span>5%</span>
                        <div className="progress-bar-container">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="modules-container">
                    <Link to="/fundamentos" className=" header_link module-card">
                        <img src={iconeFundamento} alt="Fundamentos do Sistema Tributário" className="module-icon" />
                        <div className="module-content">
                            <p className="module-title">Módulo</p>
                            <h4>Fundamentos do Sistema Tributário</h4>
                            <div className="module-details">
                                <div className="module-info">
                                    <img src={botoes} alt="Botões" className="botoes-icon" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="module-card">
                        <img src={iconeContabilidade} alt="Contabilidade Tributária" className="module-icon" />
                        <div className="module-content">
                            <p className="module-title">Módulo</p>
                            <h4>Contabilidade Tributária</h4>
                            <div className="module-details">
                                <div className="module-info">
                                    <img src={botoes} alt="Botões" className="botoes-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="module-card">
                        <img src={iconeInternacional} alt="Tributação Internacional" className="module-icon" />
                        <div className="module-content">
                            <p className="module-title">Módulo</p>
                            <h4>Tributação Internacional</h4>
                            <div className="module-details">
                                <div className="module-info">
                                    <img src={botoes} alt="Botões" className="botoes-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="module-card">
                        <img src={iconePessoasFisicas} alt="Tributação de Pessoas Físicas" className="module-icon" />
                        <div className="module-content">
                            <p className="module-title">Módulo</p>
                            <h4>Tributação de Pessoas Físicas</h4>
                            <div className="module-details">
                                <div className="module-info">
                                    <img src={botoes} alt="Botões" className="botoes-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default FinanceiroPage;
