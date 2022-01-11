import React from 'react';
import HangerIcon  from '../../assets/hanger.png';
import './OutfitCartButton.css';

const OutfitCartButton = ({ toggleCart }) => {
  return (
    <div className='cart-button-container'>
      <img 
        className='cart-button' 
        src={HangerIcon} 
        onClick={toggleCart}
      />
      <div className='cart-item-count'>(3)</div>
    </div>
  );
}

export default OutfitCartButton;
