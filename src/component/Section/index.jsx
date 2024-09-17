
import React from 'react';
import './style.css';  // Importa o arquivo CSS

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="sectionTitle">
      <h2 className="title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
