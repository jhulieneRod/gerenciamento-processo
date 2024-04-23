import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <i className="fas fa-gavel"></i> {/* Ícone do logo */}
        <span>Gerenciamento de Processos</span>
      </div>
      <div className="user-menu">
        <div className="user-info">
          <i className="fas fa-user"></i> {/* Ícone do usuário */}
          <span>Usuário</span> {/* Nome do usuário */}
        </div>
      </div>
    </div>
  );
}

export default Header;
