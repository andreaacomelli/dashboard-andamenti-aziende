import React from 'react';
import '../Style/Card.css';
import LineChart from '../Components/LineChart';

const Card = ({ title, content, chartTest }) => {
  return (
    <div className="card">
      <LineChart chartData={chartTest} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <button>Sito dell'azienda</button>
        </a>
      </div>
    </div>
  );
};

export default Card;