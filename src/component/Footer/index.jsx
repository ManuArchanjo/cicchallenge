import React from 'react';
import './style.css';
import whatsappIcon from '../../Imagens/WhatsApp.png';
import youtubeIcon from '../../Imagens/YouTube.png';
import twitterIcon from '../../Imagens/Twitter.png';
import facebookIcon from '../../Imagens/Facebook.png';
import linkedinIcon from '../../Imagens/LinkedIn.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://wa.me/" target="_blank" rel="noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
      <p>© 2024 CIC Controle Inteligente de Compensações. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
