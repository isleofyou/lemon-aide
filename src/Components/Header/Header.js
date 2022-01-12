import React from 'react';
import logo from '../../assets/red-omega.png';
import './Header.css';
import Aside from '../Aside/Aside';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  
  return (
    <header className='header-container'>
      <Aside />
        <img className='logo-img' alt='lemon aide logo' src={logo} onClick={() => {navigate('/')}}/>
        <h1 onClick={() => {navigate('/')}}>Lemon Aide</h1>
    </header>
  )
};

export default Header;