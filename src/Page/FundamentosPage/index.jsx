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
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = (
    <>
       <p>
            O Pedido Eletrônico de Restituição, Ressarcimento ou Reembolso e Declaração de Compensação (PERDCOMP) é uma 
            ...
        </p>
      <button className="toggle-text-button" onClick={toggleText}>Ver mais..</button>
    </>
  );

  const fullText = (
    <>
    <p>
    O Pedido Eletrônico de Restituição, Ressarcimento ou Reembolso e Declaração de Compensação (PERDCOMP) é uma ferramenta essencial para contribuintes que precisam solicitar a restituição de tributos pagos indevidamente ou realizar compensações de créditos tributários. Neste guia, apresentamos um passo a passo detalhado para analisar corretamente os pedidos no sistema PERDCOMP, garantindo que todos os procedimentos necessários sejam seguidos para que o processo seja conduzido de maneira eficiente e assertiva. Este tutorial cobre desde o acesso ao sistema até a emissão do parecer final, passando por verificações essenciais como análise de dados, documentos anexados e revisão de códigos de receita.
    </p>
      <p><strong>Passo 1:</strong> Acessar o Sistema do PERDCOMP</p>
      <p>Entre no sistema oficial da Receita Federal através do portal e-CAC, utilizando seu certificado digital ou código de acesso. Após o login, navegue até a seção "PerdComp Web" e selecione a opção "Analisar Pedido".</p>
      <p><strong>Passo 2:</strong> Verificar os Dados de Identificação</p>
      <p>No painel de controle, verifique os dados básicos, como o CNPJ ou CPF do contribuinte, e o tipo de pedido (Restituição, Ressarcimento, Reembolso ou Compensação).</p>
      <p><strong>Passo 3:</strong> Analisar o Histórico Tributário</p>
      <p>Consulte o histórico de débitos e créditos tributários da empresa ou pessoa física. Isso pode ser feito na aba "Situação Fiscal", onde aparecem os valores de tributos pagos, valores a restituir ou ressarcir, e possíveis compensações.</p>
      <p><strong>Passo 4:</strong> Conferir a Documentação Anexada</p>
      <p>No menu de "Anexos", certifique-se de que todos os documentos necessários estão corretamente anexados, como DARFs, notas fiscais, comprovantes de pagamento, etc.</p>
      <p><strong>Passo 5:</strong> Verificar os Códigos de Receita</p>
      <p>Revise os códigos de receita utilizados na compensação. A Receita Federal exige que os códigos sejam compatíveis com os tributos envolvidos no PERDCOMP. Um erro comum é a utilização de códigos incorretos, o que pode invalidar a compensação.</p>
      <p><strong>Passo 6:</strong> Emitir Parecer</p>
      <p>Após revisar os dados e documentos, emita o parecer. Se estiver tudo correto, aprovar a solicitação. Caso contrário, solicite mais informações ou documentos complementares.</p>
      <p><strong>Passo 7:</strong> Comunicar o Contribuinte</p>
      <p>Envie a resposta ao contribuinte, seja de aprovação ou de solicitação de ajustes, utilizando a área de comunicação no próprio sistema do e-CAC. Dê um prazo para eventuais correções ou esclarecimentos antes do fechamento do processo.</p>
      <button className="toggle-text-button" onClick={toggleText}>Ver menos..</button>
    </>
  );

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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <a href="#" className="user-link">Fernando Souza</a> <span>e +312 usuários assistiram esse vídeo</span>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <iframe 
              width="626" 
              height="350" 
              src="https://www.youtube.com/embed/PYBYVYINfVk" 
              title="YouTube video player"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
            
            <h2 className="modal-title">Passo a Passo do PERDCOMP</h2>
            <p className="modal-description">
              {isExpanded ? fullText : shortText}
            </p>
            <div className="stats-section">
              <div>313 Visualizações</div>
            </div>
            <div className="comments-section">
              <input type="text" placeholder="Adicione um comentário..." />
              
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FundamentosPage;
