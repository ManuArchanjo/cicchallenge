import React from 'react';
import Header from '../../component/Header'
import Card from '../../component/Card'
import capaVideo from '../../Imagens/capa-video.png';
import capaHome from '../../Imagens/capa-home.png'; 
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
          <h1>Avance na sua capacitação <br/>para uma gestão fiscal eficiente e segura com o CIC+</h1>
        </div>
      </div>
      <section className="section-content">
        <h2>Retorne de onde parou:</h2>
        <div className="cards-container">
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
    </div>
  );
}

export default Home;
