import React from 'react';
import Header from '../../component/Header'
import Card from '../../component/Card'
import capaVideo from '../../Imagens/capa-video.png'; // Importe a imagem
import capaHome from '../../Imagens/capa-home.png'; 

const Home = () => {
  return (
    <div>
        <Header />
        <div className="home-image-container">
        <img src={capaHome} alt="Capa Home" className="home-image" />
        <div className="overlay-text">
          <h1>Avance na sua capacitação <br/>para uma gestão fiscal eficiente e segura com o CIC+</h1>
        </div>
      </div>
      <section className="section-content">
        <h2>Retorne de onde parou:</h2>
        <div className="cards-container">
          <Card
            image={capaVideo}
            title="Diferença entre Risco de Compliance e Risco Operacional"
            description="Lorem ipsum dolor sit amet."
          />
          <Card
            image={capaVideo}
            title="Dicas de Compliance com Controles Internos"
            description="Lorem ipsum dolor sit amet."
          />
          <Card
            image={capaVideo}
            title="Outro Curso"
            description="Lorem ipsum dolor sit amet."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
