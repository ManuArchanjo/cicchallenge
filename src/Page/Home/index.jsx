import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../../component/Header';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [progress, setProgress] = useState(0);

  const data1 = {
    labels: ['Certificados'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#6bd1f7', '#eaeaea'],
        borderWidth: 6,
      },
    ],
  };

  const data2 = {
    labels: ['Progresso'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#8CE563', '#eaeaea'],
        borderWidth: 6,
      },
    ],
  };

  const data3 = {
    labels: ['Questionários'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#FFCD1E', '#eaeaea'],
        borderWidth: 6,
      },
    ],
  };

  const options = {
    cutout: '85%',
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-page">
      <Header />
      {/* <div className="dashboard-content">
        <div className="dashboard-header">
          <input type="text" className="search-bar" placeholder="Pesquisar..." />
          <div className="user-info">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-image"
            />
            <div>
              <p className="user-name">Karen Loren</p>
              <p className="user-role">Analista Jurídico</p>
            </div>
          </div>
        </div>

        <div className="dashboard-main">
          <div className="card">
            <h3>Certificados</h3>
            <Doughnut data={data1} options={options} />
          </div>
          <div className="card">
            <h3>Progresso</h3>
            <Doughnut data={data2} options={options} />
          </div>
          <div className="card">
            <h3>Questionários</h3>
            <Doughnut data={data3} options={options} />
          </div>
        </div>

        <div className="progress-section">
          <h4>Conteúdos em andamento</h4>
          <ul className="progress-list">
            <li className="progress-item">
              <span>Curso 1</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </li>
            <li className="progress-item">
              <span>Curso 2</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
            </li>
            <li className="progress-item">
              <span>Curso 3</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
