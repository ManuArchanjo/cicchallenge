import React from 'react';
import Header from '../../component/Header';
import '../Trilhas/style.css';  
import Cards from '../../component/Cards'

const Trilhas = () => (
  <div>
      <Header />
      <section className="hero-section">
          <div className="hero-content">
              <h1>Trilhe seu desenvolvimento</h1>
              <p>Desenvolvimento contínuo, resultados extraordinários</p>
          </div>
      </section>
      
          <div className="cards-container">
              <Cards />
              <Cards />
              <Cards />
          </div>
  </div>
);



export default Trilhas;








