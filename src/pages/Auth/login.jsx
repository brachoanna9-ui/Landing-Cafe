import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const [signUpError, setSignUpError] = useState('');
  const [signInError, setSignInError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!signUpName.trim() || !signUpEmail.trim() || !signUpPassword.trim()) {
      setSignUpError("El campo no puede estar vacío");
      return;
    }
    setSignUpError('');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!signInEmail.trim() || !signInPassword.trim()) {
      setSignInError("El campo no puede estar vacío");
      return;
    }
    setSignInError('');
  };

  const userIconSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <div className={`container-glass ${isRightPanelActive ? "right-panel-active" : ""}`}>
      
      <div className="form-container sign-up-container">
        <form className="form-content" onSubmit={handleSignUp}>
          <div className="avatar-icon">
            {userIconSvg}
          </div>
          <h2>Crea una cuenta</h2>
          
          <div className="input-group">
            <span className="input-icon">{userIconSvg}</span>
            <input 
              type="text" 
              placeholder="Nombre" 
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">✉️</span>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
          </div>

          {signUpError && <p className="error-msg">{signUpError}</p>}

          <button type="submit" className="btn-glass">Registrarse</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form className="form-content" onSubmit={handleSignIn}>
          <div className="avatar-icon">
            {userIconSvg}
          </div>
          <h2>Iniciar Sesión</h2>
          
          <div className="input-group">
            <span className="input-icon">✉️</span>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
            />
          </div>

          <div className="options-row">
            <label className="remember-me">
              <input type="checkbox" /> Recuérdame
            </label>
            <a href="#forgot" className="forgot-link" onClick={(e) => e.preventDefault()}>¿Olvidaste tu contraseña?</a>
          </div>

          {signInError && <p className="error-msg">{signInError}</p>}

          <button type="submit" className="btn-glass">Entrar</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>¡Bienvenido de nuevo!</h2>
            <p>Para mantenerse conectado con nosotros, por favor inicia sesión con tu información personal.</p>
            <button className="btn-glass ghost-btn" onClick={() => setIsRightPanelActive(false)}>Iniciar Sesión</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>¡Hola, amigo!</h2>
            <p>Introduce tus datos personales y comienza tu viaje con nosotros.</p>
            <button className="btn-glass ghost-btn" onClick={() => setIsRightPanelActive(true)}>Registrarse</button>
          </div>
        </div>
      </div>

    </div>
  );
}