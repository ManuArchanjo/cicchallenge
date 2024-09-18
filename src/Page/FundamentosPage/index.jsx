import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import capaCard2 from '../../Imagens/financeiro.png';
import iconeTrofeu from '../../Imagens/trofeu.png';
import iconeAvancado from '../../Imagens/avancado.png';
import iconeFinanceiro from '../../Imagens/financeirotopo.png';
import iconeCheckVerde from '../../Imagens/checkverde.png';
import iconeCheckCinza from '../../Imagens/check.png';

const FundamentosPage = () => {
  return (
    <div>
      <Header />
      <div className="fundamentos-container">
        <div className="fundamentos-left-card">
          <img src={capaCard2} alt="Planejamento Tributário" />
          <h3>Planejamento Tributário</h3>
          <p>
            Explore estratégias inteligentes para minimizar impostos e melhorar seu planejamento
            financeiro. Novas ideias e ferramentas para reduzir sua carga tributária pessoal e empresarial.
          </p>
        </div>

        <div className="right-modules">
          <div className="fundamentos-modules-header">
            <div className="fundamentos-points-container">
              <img src={iconeTrofeu} alt="Troféu" className="fundamentos-header-icon" />
              <span>+3.460 pontos</span>
            </div>
            <div className="fundamentos-status-container">
              <img src={iconeAvancado} alt="Avançado" className="fundamentos-header-icon" />
              <span>Avançado</span>
            </div>
            <div className="fundamentos-filter-container">
              <img src={iconeFinanceiro} alt="Financeiro" className="fundamentos-header-icon" />
              <span>Financeiro</span>
            </div>
            <div className="fundamentos-progress-container">
              <span>5%</span>
              <div className="fundamentos-progress-bar-container">
                <div className="fundamentos-progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="fundamentos-modules-list card-tributo">
            
            <div className="fundamentos-module-item">
              <div className='width-100 '>
                <div className='tribu '>
                  <div>
                    <h4 className="fundamentos-module-title">Fundamentos do Sistema Tributário</h4>
                    <p className="fundamentos-module-duration">10 min</p>
                    <div className='line-divider'/>
                  </div>
                  <img src={iconeCheckVerde} alt="Completo" className="fundamentos-status-icon" />
                </div>
                <div className='tribu'>
                  <div>
                    <h4 className="fundamentos-module-title">Estratégias de Redução de Impostos</h4>
                    <p className="fundamentos-module-duration">15 min</p>
                    <div className='line-divider'/>
                  </div>
                  <img src={iconeCheckCinza} alt="Incompleto" className="fundamentos-status-icon" />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FundamentosPage;
