import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './style.css';

const Card = ({ title, description, progress, total, cupIconIncomplete, cupIconComplete, arrowIcon }) => {
  
  const cupIcon = progress === total ? cupIconComplete : cupIconIncomplete;

  return (
    <div className="card">
      
      <p>{title}</p>
      <div className="progress-container-home">
        <ProgressBar
          now={(progress / total) * 100}
          className={`progress-bar-home ${progress === total ? 'progress-bar-home-complete' : 'progress-bar-home-incomplete'}`}
        />
        <img src={cupIcon} alt="Copo" className="cup-icon" />
        <div className="progress-info">
          <span>{`${progress} / ${total} concluído`}</span>
        </div>
      </div>
      {/* <div className="see-more">
        <a href="#" className="see-more-link">
          Ver mais <img src={arrowIcon} alt="Seta" className="arrow-icon" />
        </a>
      </div> */}
    </div>
  );
};

export default Card;
