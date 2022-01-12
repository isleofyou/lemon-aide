import React from 'react';
import HangerIcon  from '../../assets/hanger.png';
import './OutfitCartButton.css';

const OutfitCartButton = ({ toggleCart, outfitItems }) => {
  const numberOfItemsInCart = Object.values(outfitItems).filter(item => item !== null).length;

  return (
    <div className='cart-button-container'>
      <img 
        className='cart-button' 
        src={HangerIcon} 
        onClick={toggleCart}
      />
      <div className='cart-item-count'>
        {numberOfItemsInCart} 
      </div>
    </div>
  );
}

export default OutfitCartButton;
