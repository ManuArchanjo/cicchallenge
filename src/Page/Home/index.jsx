import React from 'react';
import Header from '../../component/Header';
import Card from '../../component/Card';
import Footer from '../../component/Footer'
import capaVideo from '../../Imagens/capa-video.png';
import capaHome from '../../Imagens/capa-home.png'; 
import fundoHome from '../../Imagens/fundo-home.png';
import perfil from '../../Imagens/perfil.jpeg';
import perfil1 from '../../Imagens/perfil1.jpg';
import likeIcon from '../../Imagens/like.png';
import commentIcon from '../../Imagens/reply.png';
import moreIcon from '../../Imagens/more.png';
import arrowIcon from '../../Imagens/arrowIcon.png';
import cupIconIncomplete from '../../Imagens/copo.png';
import cupIconComplete from '../../Imagens/copo2.png';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-image-container">
        <img src={capaHome} alt="Capa Home" className="home-image" />
        <div className="overlay-text">
          <h1>Avance na sua capacitação <br />para uma gestão fiscal eficiente e segura com o CIC+</h1>
        </div>
      </div>
      <section className="section-content">
        <h2>Retorne de onde parou:</h2>
        <div className="cards-container">
          {/* arrumar trofeu amarelo */}
          <Card
            image={capaVideo}
            title="Loren"
            description="Lorem ipsum dolor sit amet."
            progress={0}
            total={1}
            cupIconIncomplete={cupIconIncomplete}
            cupIconComplete={cupIconComplete}
            arrowIcon={arrowIcon}
          />
          <Card
            image={capaVideo}
            title="Loren"
            description="Lorem ipsum dolor sit amet."
            progress={1}
            total={6}
            cupIconIncomplete={cupIconIncomplete}
            cupIconComplete={cupIconComplete}
            arrowIcon={arrowIcon}
          />
          <Card
            image={capaVideo}
            title="Loren"
            description="Lorem ipsum dolor sit amet."
            progress={2}
            total={3}
            cupIconIncomplete={cupIconIncomplete}
            cupIconComplete={cupIconComplete}
            arrowIcon={arrowIcon}
          />
        </div>
      </section>
      <section className="forum-section">
        <img src={fundoHome} alt="Fundo Home" className="fundo-home" />
        <div className="forum-content">
          <div className="forum-left">
            <h2>Fórum</h2>
            <p>
              Neste espaço, você pode ver quais cursos outros colaboradores estão 
              fazendo e trocar experiências com eles. Aproveite para fazer perguntas, 
              compartilhar dicas e ajudar seus colegas!
            </p>
            <a href="#" className="forum-link">
              <span>→</span>
            </a>
          </div>
          <div className="forum-right">
            <div className="forum-post">
              <div className="forum-post-header">
                <img src={perfil} alt="Avatar" className="forum-avatar" />
                <div className="forum-post-info">
                  <span>Carla A.</span>
                  <p className='margin-0'>Analista Fiscal | Analista Tributário | MBA Direito Tributario e Auditoria Digital</p>
                  <p className='sub-title'>1 m</p>
                </div>
                
              </div>
              <p>Não consigo visualizar onde estão minhas perdComps em atraso. Poderiam me ajudar?</p>
                 
                <p className='min'> Do vídeo: <a href="#">Ressarcimento e Declaração de Compensação (03:08)</a> </p>
              <div className="forum-post-body">
                <p className='line'>2 pessoas gostaram • 1 resposta</p>
                <div className="forum-actions">
                  <img src={likeIcon} alt="Gostei" className="action-icon" />
                  <span>Gostei</span>
                  <img src={commentIcon} alt="Comentar" className="action-icon" />
                  <span>Comentar</span>
                </div>
              </div>

              <div className='comments'>
                <div className="forum-reply">
                  <input type="text" />
                </div>
                <div className="forum-comment">
                  <img src={perfil1} alt="Avatar" className="forum-avatar" />
                  <div className="forum-post-info">
                    <span>Alessandro Ribeiro</span>
                    <p className='margin-0'>Assistente Tributário</p>
                    <p className='sub-title'>1 m</p>
                    <p className='secondy-coments'>Olá Carla! Indico esse vídeo aqui, ele é curto e prático: PerdComps pendentes.</p>
                  </div>
                </div>
                <div className="forum-reply-actions">
                  <span>Gostei</span>
                  <span>Comentar</span>
                  <span>2 comentários</span>
                </div> 
              </div>
               
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
