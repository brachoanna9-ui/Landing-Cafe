import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../../assets/images/logo.jpg';

export default function Navbar({ setShowAll, onOpenOrder }) {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <div className="navbar-logo-icon">
          <img src={logoImg} alt="KRONOS Café Logo" className="logo-img" />
        </div>
        
        <div className="navbar-brand">
          <span className="brand-title">KRONOS</span>
          <span className="brand-subtitle">CAFÉ</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            className={activeLink === '#home' ? 'active' : ''}
            onClick={() => setActiveLink('#home')}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className={activeLink === '#menu' ? 'active' : ''}
            onClick={() => {
              setActiveLink('#menu')
              setShowAll();
            }}
          >
            Menú
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === '#about' ? 'active' : ''}
            onClick={() => setActiveLink('#about')}
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === '#contact' ? 'active' : ''}
            onClick={() => setActiveLink('#contact')}
          >
            Contacto
          </a>
        </li>
      </ul>

      <div className="navbar-action">
        <button className="order-now-btn" onClick={onOpenOrder}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Ordenar Ahora
        </button>
      </div>
    </nav>
  );
}