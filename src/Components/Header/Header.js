import React, { useState } from 'react';
import logo from '../../assets/Lululemon_Athletica_logo.png';
import './Header.css';
import Aside from '../Aside/Aside';
import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';

const Header = () => {
  const [hidden, setHidden] = useState(true); 

  const toggleCartHidden = () => {
    setHidden(!hidden)
  }

  return (
    <header className='header-container'>
      <Aside />
      <img className='logo-img' alt='Lulu Lemon Logo' src={logo}/>
      <h1>Lemon Aide</h1>
      <CartIcon toggleCartHidden={toggleCartHidden}/>
      {
        hidden ? null: <CartDropdown cartItems={[]}/>
      }
    </header>
  )
};

export default Header;