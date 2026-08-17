import React, { useState } from 'react';
import './Promotions.css';
import promo1Img from '../../assets/images/promo1.jpg';
import promo2Img from '../../assets/images/promo2.jpg';
import promo3Img from '../../assets/images/promo3.jpg';

export default function Promotions({ onAddPromotion }) {
  const [mensajeExito, setMensajeExito] = useState(null);

  const promos = [
    {
      titulo: 'Latte + Croissant',
      precio: 4.50,
      precioOriginal: 8.20,
      imagen: promo1Img
    },
    {
      titulo: 'Cold Brew + Cookie',
      precio: 4.20,
      precioOriginal: 7.00,
      imagen: promo2Img
    },
    {
      titulo: 'Matcha + Roll',
      precio: 4.80,
      precioOriginal: 8.50,
      imagen: promo3Img
    }
  ];

  const handleOrder = (promo) => {
    setMensajeExito(`¡Has añadido ${promo.titulo} a tu orden por $${promo.precio.toFixed(2)}!`);
    
    if (onAddPromotion) {
      onAddPromotion({
        name: promo.titulo,
        price: promo.precio
      });
    }

    setTimeout(() => {
      setMensajeExito(null);
    }, 4000);
  };

  return (
    <section className="promotions">
      <h2>♥ Promociones Ideales</h2>

      {mensajeExito && (
        <div className="promo-alert">
          {mensajeExito}
        </div>
      )}

      <div className="promos-grid">
        {promos.map((p, i) => {
          const ahorro = (p.precioOriginal - p.precio).toFixed(2);

          return (
            <div 
              key={i} 
              className="promo-card" 
              onClick={() => handleOrder(p)}
            >
              <img src={p.imagen} alt={p.titulo} />
              <div className="promo-info">
                <h4>{p.titulo}</h4>
                <p className="price">${p.precio.toFixed(2)}</p>
                <span className="savings">¡Ahorras ${ahorro}!</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}