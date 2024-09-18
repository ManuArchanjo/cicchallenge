import React from 'react';
import { Link } from 'react-router-dom';
import capaTrilha from '../../Imagens/Capa-trilha.png'; 
import capaCard1 from '../../Imagens/capa-trilha1.png'; 
import capaCard2 from '../../Imagens/financeiro.png';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import './style.css';

const Trilhas = () => (
    <div>
        <Header />
        <img src={capaTrilha} alt="Capa da trilha" className="card-image" />
        <div className="trilhas-container">
            <div className="title-container">
                <h2>COMECE POR AQUI</h2>
                <p>Amplie seus conhecimentos da nossa plataforma com as nossas trilhas</p>
                <hr />
            </div>
            <div className="cards-container-trilha">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="card-trilhas">
                        <img src={capaCard1} alt="Capa da trilha" className="card-image" />
                        <div className="card-content">
                            <h3>Nossa Plataforma</h3>
                            <p>Entenda e explore a plataforma da CIC+ com a nossa trilha.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="trilhas-container margin-bottom-78">
            <div className="title-container">
                <h2>FINANCEIRO</h2>
                <hr />
            </div>
            <div className="cards-container-trilha">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="card-trilhas">
                        <Link to="/financeiro">
                            <img src={capaCard2} alt="Capa da trilha" className="card-image" />
                            <div className="card-content">
                                <h3>Setor Tributário</h3>
                                <p>Descubra como minimizar sua carga tributária pessoal e empresarial. Estratégias eficazes para otimizar sua situação fiscal.</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);

export default Trilhas;
