import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, subtitle, alt, src, id }) {
  return (
    <Link className="Card" to={`/photos/${id}`}>
      <img className="Card-image" alt={alt} src={src} />
      <p className="Card-title">{title}</p>
      <p className="Card-subtitle">{subtitle}</p>
    </Link>
  );
}

export default Card;
