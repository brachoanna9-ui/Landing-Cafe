import React from 'react';
import './About.css';
import aboutImagenImg from '../../assets/images/about-imagen.jpg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img src={aboutImagenImg} alt="Interior de KRONOS Café" className="about-img" />
        </div>
        <div className="about-text-content">
          <h2>Sobre Nosotros</h2>
          <p className="about-subtitle">Donde el tiempo se detiene para saborear el momento.</p>
          <p>
            En <strong>KRONOS Café</strong> creemos que cada taza cuenta una historia y que las mejores pausas merecen detener el tiempo. Fundados con la pasión por ofrecer una experiencia única, combinamos la tradición del café artesanal con un ambiente cálido y moderno diseñado especialmente para ti.
          </p>
          <p>
            Seleccionamos cuidadosamente cada grano y cuidamos cada detalle de nuestro proceso desde el tostado hasta la preparación final para garantizar que cada sorbo sea excepcional. Ya sea que busques un lugar para concentrarte, conversar o simplemente disfrutar de un buen momento, KRONOS es tu segundo hogar.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-icon">☕</span>
              <span>100% Artesanal</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌿</span>
              <span>Granos Seleccionados</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Ambiente Único</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}