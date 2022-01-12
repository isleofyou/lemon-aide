import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '../Aside/Aside';
import CartDropdown from '../CartDropdown/CartDropdown';
import OutfitCartButton from '../OutfitCartButton/OutfitCartButton';
import logo from '../../assets/red-omega.png';
import './Header.css';

const Header = ({ outfitItems, deleteItemFromOutfit, addOutfit, products, outfits }) => {
  const [hidden, setHidden] = useState(true); 
  let navigate = useNavigate();

  const toggleCart = () => {
    setHidden(!hidden);
  }

  return (
    <header className='header-container'>
      <Aside />
      <img 
        className='logo-img' 
        alt='lemon aide logo' 
        src={logo}
        onClick={() => {navigate('/')}}
      />
      <h1 onClick={() => {navigate('/')}}>Lemon Aide</h1>
      <OutfitCartButton 
        toggleCart={toggleCart}
        outfitItems={outfitItems}
      />
      { hidden ? null 
        : 
        <CartDropdown 
          toggleCart={toggleCart}
          outfitItems={outfitItems}
          deleteItemFromOutfit={deleteItemFromOutfit}
          addOutfit={addOutfit}
          products={products}
          outfits={outfits}
        />
      }
    </header>
  );
};

export default Header;