import React from 'react';
import './Janela.css';

const Janela = (props) => {
  return (
    <div className="janela">
      <div className="janela-content">
        <h2>Título da Janela</h2>
        <p>Conteúdo da Janela</p>
        <button onClick={props.onClose}>Fechar</button> {/* Botão para fechar a Janela */}
      </div>
    </div>
  );
}

export default Janela;
