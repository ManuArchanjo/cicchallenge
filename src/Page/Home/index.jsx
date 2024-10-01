import React from 'react';
import Header from '../../component/Header';
import Card from '../../component/Card';
import { FaSearch } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import capaVideo from '../../Imagens/capa-home.png'; 
import perfil from '../../Imagens/perfil.jpeg';
import likeIcon from '../../Imagens/like.png';
import commentIcon from '../../Imagens/reply.png';
import arrowIcon from '../../Imagens/arrowIcon.png';
import cupIconIncomplete from '../../Imagens/copo.png';
import cupIconComplete from '../../Imagens/copo2.png';
import './style.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {

  const data = {
    labels: ['Análise', 'Restituição', 'Compensação', 'Tributação'],
    datasets: [
      {
        data: [30, 20, 15, 35], // Ajuste conforme seus dados
        backgroundColor: ['#6bd1f7', '#8CE563', '#FFCD1E', '#6C63FF'], // Cores conforme o exemplo
        hoverBackgroundColor: ['#58C4ED', '#78d055', '#e3b917', '#5f57e3'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutout: '65%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="painel-gestao-container">
      <Header />
      <div className="management-panel">
        <div className="search">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Pesquise..." className="search-input" />
          </div>
          <div className="profile-info">
            <img 
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?crop=faces&fit=crop&h=40&w=40" 
              alt="Profile" 
              className="profile-picture" 
            />
            <div className="profile-text">
              <p className="profile-name">Karen Loren</p>
              <p className="profile-position">Analista jurídico</p>
            </div>
          </div>
        </div>

        <div className="dashboard-container-home">
          {/* Gráfico de Skills */}
          <div className="skills-card">
            {/* <h3>Skills</h3>
            <p>Skills que você está desenvolvendo ao concluir cursos no CIC+</p> */}
            

<div className='display-flex'> 


<div className="chart-container">
              <Doughnut data={data} options={options} />
              <div className="chart-center-text">
                <span>64%</span>
                <p>Geral</p>
              </div>
            </div>


<div className="courses-card-container">
              <div className="course-card">
             

            <div className="courses-content">
              <div className="course-item course-color-1 completed">
                <Card
                  title="Risco operacional"
                  description="Lorem ipsum dolor sit amet."
                  progress={0}
                  total={1}
                  cupIconIncomplete={cupIconIncomplete}
                  cupIconComplete={cupIconComplete}
                  arrowIcon={arrowIcon}
                />
              </div>

              {/* <div className="course-item course-color-2 completed">
                <Card
                  title="Abertura de perdcomp"
                  description="Lorem ipsum dolor sit amet."
                  progress={2}
                  total={3}
                  cupIconIncomplete={cupIconIncomplete}
                  cupIconComplete={cupIconComplete}
                  arrowIcon={arrowIcon}
                />
              </div>

              <div className="course-item course-color-3 incomplete">
                <Card
                  title="Risco operacional"
                  description="Lorem ipsum dolor sit amet."
                  progress={1}
                  total={3}
                  cupIconIncomplete={cupIconIncomplete}
                  cupIconComplete={cupIconComplete}
                  arrowIcon={arrowIcon}
                />
              </div> */}
            </div>
          </div>
        </div>

</div>

 



            

        
          </div>
          <div className="profile-card-home">
            <div className="profile-card-header-home"></div>
            <div className="profile-image-container-home">
              <img 
                src="https://img.freepik.com/fotos-gratis/mulher-de-porte-medio-que-trabalha-como-advogada_23-2151054033.jpg"  
                alt="Nayla Souza Ribeiro" 
                className="profile-image-home" 
              />
            </div>

            <div className="profile-info-text-home">
              <h4>Nayla Souza Ribeiro</h4>
            </div>
            <div className="text-home">
              <p className='text-home'>Analista Tributário | MBA Direito Tributario</p>
            </div>
          </div>

        </div>


<div className='display-flex'>
  <div>


  <div className="course-item course-color-2 completed">
                <Card
                  title="Abertura de perdcomp"
                  description="Lorem ipsum dolor sit amet."
                  progress={2}
                  total={3}
                  cupIconIncomplete={cupIconIncomplete}
                  cupIconComplete={cupIconComplete}
                  arrowIcon={arrowIcon}
                />
              </div>

              <div className="course-item course-color-3 incomplete">
                <Card
                  title="Risco operacional"
                  description="Lorem ipsum dolor sit amet."
                  progress={1}
                  total={3}
                  cupIconIncomplete={cupIconIncomplete}
                  cupIconComplete={cupIconComplete}
                  arrowIcon={arrowIcon}
                />
              </div> 
    
  </div>





</div>



       

       
      </div>
    </div>
  );
};

export default Home;
