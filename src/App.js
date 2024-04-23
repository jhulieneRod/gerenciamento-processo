import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Janela from './components/Janela'; // Importe o componente Janela

function App() {
  const [showJanela, setShowJanela] = useState(false);

  const handleCardClick = () => {
    setShowJanela(true);
  };

  const handleCloseJanela = () => {
    setShowJanela(false);
  };

  return (
    <div className="App">
      <div className="sidebar">
        {/* Conteúdo da barra lateral, se necessário */}
      </div>
      <div className="main-content">
        <Header />
        <Dashboard onCardClick={handleCardClick} /> {/* Passe a função de clique para o Dashboard */}
        <Footer />
      </div>
      {showJanela && <Janela onClose={handleCloseJanela} />} {/* Renderize o componente Janela fora do Dashboard */}
    </div>
  );
}

export default App;
