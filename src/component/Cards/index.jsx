import React from 'react';
import './style.css';

const Card = ({ title, description, imageUrl }) => (
  <div className="card">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const CardsSection = () => (
  <section className="cards-section">
    <h2>COMECE POR AQUI</h2>
    <p>Amplie seus conhecimentos da nossa plataforma com as nossas trilhas</p>
    <div className="cards-container">
      <Card
        title="Nossa Plataforma"
        description="Entenda e explore a plataforma da CIC+ com a nossa trilha."
        imageUrl={'../../../'}
      />
      <Card
        title="Nossa Plataforma"
        description="Entenda e explore a plataforma da CIC+ com a nossa trilha."
        imageUrl="/path/to/image2.jpg"
      />
      <Card
        title="Nossa Plataforma"
        description="Entenda e explore a plataforma da CIC+ com a nossa trilha."
        imageUrl="/path/to/image3.jpg"
      />
    </div>
  </section>
);

export default CardsSection;
