import React from 'react';
import './card.css';

const Card = ({ title, content, imageUrl, button }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
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