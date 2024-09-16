import React from 'react';
import './style.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <button>Ver mais</button>
    </div>
  );
};

export default Card;
