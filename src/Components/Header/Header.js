import React from 'react';
import logo from '../../assets/Lululemon_Athletica_logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className='header-flex'>
      <img className='logo-img' alt='Lulu Lemon Logo' src={logo}/>
      <h1>Lemon Aide</h1>
    </header>
  )
};

export default Header;