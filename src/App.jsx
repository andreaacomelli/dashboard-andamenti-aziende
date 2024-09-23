import React from 'react';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dati aggiornati</h1>
      <div className="card-container">
        <Card 
          title="Azienda 1" 
          content="Azienda che si occupa di ." 
          imageUrl="https://via.placeholder.com/300"
          button="Button"
        />
        <Card 
          title="Azienda 2" 
          content="Azienda che si occupa di ." 
          imageUrl="https://via.placeholder.com/300"
        />
        <Card 
          title="Azienda 3" 
          content="Azienda che si occupa di ." 
          imageUrl="https://via.placeholder.com/300"
        />
        <Card 
          title="Azienda 4" 
          content="Azienda che si occupa di ." 
          imageUrl="https://via.placeholder.com/300"
        />
      </div>
    </div>
  );
}

export default App;