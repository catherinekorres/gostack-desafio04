import React from 'react';

import Logo from '../assets/logo.png';
import User from '../assets/user.png';

import './Header.css';

function Header() {
  return(
    <header>
      <div id="logo">
        <img src={Logo} />
      </div>

      <div id="perfil">
        <h5>Meu perfil</h5>
        <img src={User} />
      </div>
    </header>
  );
};

export default Header;