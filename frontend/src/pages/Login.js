import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function Login() {
  return(
    <div className="login-container">
      <form action="">
      <img src={logo} alt="Tindev"/>
      <input 
      placeholder= "Digite se usuario do GitHub"
      />
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

