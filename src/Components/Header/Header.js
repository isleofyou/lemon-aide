import React, { useState } from 'react';
import logo from '../../assets/Lululemon_Athletica_logo.png';
import './Header.css';
import Aside from '../Aside/Aside';
import CartDropdown from '../CartDropdown/CartDropdown';
import OutfitCartButton from '../OutfitCartButton/OutfitCartButton';

const Header = () => {
  const [hidden, setHidden] = useState(true); 

  const toggleCart = () => {
    setHidden(!hidden);
  }

  return (
    <header className='header-container'>
      <Aside />
      <img 
        className='logo-img' 
        alt='Lulu Lemon Logo' 
        src={logo}
      />
      <h1>Lemon Aide</h1>
      <OutfitCartButton 
        toggleCart={toggleCart}
      />
      { hidden ? null 
        : 
        <CartDropdown 
          toggleCart={toggleCart}
        />
      }
    </header>
  );
};

export default Header;