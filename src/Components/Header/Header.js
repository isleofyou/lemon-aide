import React from 'react';
import logo from '../../assets/Lululemon_Athletica_logo.png';
import './Header.css';
import Aside from '../Aside/Aside';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  let navigate = useNavigate();
  
  return (
    <header className='header-container'>
      <Aside />
        <img className='logo-img' alt='Logo' src={logo} />
        <h1 onClick={() => {navigate('/')}}>Lemon Aide</h1>
    </header>
  )
};

export default Header;