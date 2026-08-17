import React from 'react';
import './MenuCard.css';

export default function MenuCard({ name, description, price, imageUrl, onAdd }) {
  const limpiarPrecio = typeof price === 'string' ? price.replace('$', '') : price;
  const precioNumerico = Number(limpiarPrecio) || 0;

  return (
    <div className="menu-card">
      <div className="menu-card-img-container">
        <img src={imageUrl} alt={name} className="menu-card-img" />
      </div>
      <div className="menu-card-content">
        <div className="menu-card-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="menu-card-footer">
          <span className="menu-card-price">${precioNumerico.toFixed(2)}</span>
          <button className="menu-card-btn" onClick={onAdd}>+</button>
        </div>
      </div>
    </div>
  );
}