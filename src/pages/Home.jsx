import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import MenuCard from '../features/coffee-shop/components/MenuCard';
import Promotions from '../components/Promotions/Promotions';
import { coffeeProducts } from '../features/coffee-shop/data/coffeeData';
import './Home.css';
import imagenPrincipalImg from '../assets/images/imagen-principal.jpg';

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orden, setOrden] = useState([]);
  const [pedidoExitoso, setPedidoExitoso] = useState(false);

  const displayedProducts = showAll ? coffeeProducts : coffeeProducts.slice(0, 4);

  const handleAddItem = (item) => {
    let itemName = item?.name || "Producto";
    let rawPrice = item?.price ?? item; 

    if (typeof rawPrice === 'string') {
      rawPrice = rawPrice.replace('$', '').trim();
    }

    const itemPrice = Number(rawPrice) || 0;

    setMensajeExito(`¡Has añadido ${itemName} a tu orden!`);
    
    setOrden(prev => {
      const existe = prev.find(i => i.name === itemName);
      if (existe) {
        return prev.map(i => i.name === itemName ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { name: itemName, price: itemPrice, quantity: 1 }];
    });

    setTimeout(() => {
      setMensajeExito(null);
    }, 4000);
  };

  const calcularTotal = () => {
    return orden.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="home-container">
      <Navbar 
        setShowAll={() => setShowAll(prev => !prev)} 
        onOpenOrder={() => {
          setPedidoExitoso(false);
          setIsModalOpen(true);
        }} 
      />

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-text-content">
            <h1>Donde el tiempo sabe mejor.</h1>
            <p>Ven a disfrutar de un café hecho con dedicación y repostería que te hará sentir como en casa.</p>
            
            <div className="hero-features-badges">
              <div className="feature-badge-item">
                <span className="badge-icon">🐾</span>
                <span>Pet-Friendly</span>
              </div>
              <div className="feature-badge-item">
                <span className="badge-icon">💻</span>
                <span>Espacio para Trabajar</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src={imagenPrincipalImg}
              alt="Café y repostería artesanal"
              className="hero-img"
            />
          </div>
        </section>

        {mensajeExito && (
          <div className='promo-alert'>
            {mensajeExito}
          </div>
        )}

        <section id="menu" className="menu-section">
          <div className="menu-header">
            <h2>★ Más Vendidos</h2>
          </div>

          <div className="menu-grid">
            {displayedProducts.map((product) => (
              <MenuCard 
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
                onAdd={() => handleAddItem(product)}
              />
            ))}
          </div>
        </section>

        <Promotions onAddPromotion={handleAddItem} />
        <About />
      </main>

      <Footer />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>☕ Tu Orden</h3>
              <button 
                className="modal-close" 
                onClick={() => {
                  setIsModalOpen(false);
                  setPedidoExitoso(false);
                }}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              {pedidoExitoso ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0', color: '#3D2B22' }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>🎉</span>
                  <h4 style={{ fontFamily: 'Merriweather, serif', fontSize: '1.2rem', marginBottom: '8px' }}>¡Pedido realizado con éxito!</h4>
                  <p style={{ fontSize: '0.95rem', color: '#6b5344' }}>Gracias por elegir KRONOS. Tu pedido ya está en preparación.</p>
                </div>
              ) : orden.length === 0 ? (
                <p>No tienes productos en tu orden todavía.</p>
              ) : (
                <ul className="order-list">
                  {orden.map((item, index) => (
                    <li key={index} className="order-item">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-footer">
              {!pedidoExitoso && orden.length > 0 && (
                <div className="order-total">
                  <span>Total:</span>
                  <strong>${calcularTotal()}</strong>
                </div>
              )}
              
              <button 
                className="checkout-btn"
                disabled={!pedidoExitoso && orden.length === 0}
                style={{
                  opacity: (!pedidoExitoso && orden.length === 0) ? 0.5 : 1,
                  cursor: (!pedidoExitoso && orden.length === 0) ? 'not-allowed' : 'pointer'
                }}
                onClick={() => {
                  if (pedidoExitoso) {
                    setIsModalOpen(false);
                    setPedidoExitoso(false);
                  } else if (orden.length > 0) {
                    setPedidoExitoso(true);
                    setOrden([]);
                  }
                }}
              >
                {pedidoExitoso ? "Cerrar" : "Proceder al Pago"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}