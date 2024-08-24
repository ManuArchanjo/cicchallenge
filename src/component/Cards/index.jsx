import React from 'react';
import './style.css';  
import fototrilhas1 from '../../Imagens/foto.trilhas1.png';


const Cards = ({ image, title, description }) => (
    <div className="card">
        
        <div className="card-image">
            <img src={fototrilhas1} alt={title} />
        </div>
        <div className="cards-section">
          <h2>COMECE POR AQUI</h2>
          <p>Amplie seus conhecimentos da nossa plataforma com as nossas trilhas</p>
        </div>

    </div>
);

export default Cards;