import React from 'react';
import logo from '../../assets/red-omega.png';
import './Header.css';
import Aside from '../Aside/Aside';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header-container'>
      <Aside />
      <img className='logo-img' alt='Lulu Lemon Logo' src={logo}/>
        <h1>Lemon Aide</h1>
    </header>
  )
};

export default Header;