import React, { useState } from 'react';
import './style.css';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import capaCard2 from '../../Imagens/financeiro.png';
import iconeTrofeu from '../../Imagens/trofeu.png';
import iconeAvancado from '../../Imagens/avancado.png';
import iconeFinanceiro from '../../Imagens/financeirotopo.png';
import iconeCheckVerde from '../../Imagens/checkverde.png';
import iconeCheckCinza from '../../Imagens/check.png';

const FundamentosPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <div className="fundamentos-module-item" onClick={openModal}>
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

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe 
                width="626" 
                height="350" 
                src="https://www.youtube.com/embed/PYBYVYINfVk" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            <h2>Fundamentos do Sistema Tributário</h2>
            <p>Vídeo explicativo sobre os Fundamentos do Sistema Tributário.</p>
            <div className="comments-section">
                <p>3139 visualizações | 43 comentários | 311 likes</p>
                <input type="text" placeholder="Adicione um comentário..." />
                <div className="comment">
                <p><strong>Usuário 1</strong>: Comentário exemplo 1.</p>
                </div>
                <div className="comment">
                <p><strong>Usuário 2</strong>: Comentário exemplo 2.</p>
                </div>
            </div>
            </div>
        </div>
        )}
      <Footer />
    </div>
  );
};

export default FundamentosPage;
