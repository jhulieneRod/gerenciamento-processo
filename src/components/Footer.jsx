import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Seu Nome ou Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
