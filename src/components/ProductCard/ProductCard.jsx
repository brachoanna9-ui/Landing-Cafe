import React from 'react';
import './ProductCard.css';

export default function ProductCard({ image, name, price, onAdd }) {
  const limpiarPrecio = typeof price === 'string' ? price.replace('$', '') : price;
  const precioNumerico = Number(limpiarPrecio) || 0;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">${precioNumerico.toFixed(2)}</p>
      </div>
      <button className="add-btn" onClick={onAdd}>
        +
      </button>
    </div>
  );
}