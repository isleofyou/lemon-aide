import React from 'react';
import './CartDropdown.css';

const CartDropdown = ({ toggleCart, outfitItems, deleteItemFromOutfit, addOutfit, products }) => {
  //this will display our outfitItemCards
  return (
    <div className='cart-dropdown'>
      <button onClick={() => toggleCart()}>X</button>
      <button 
        className='create-outfit-button'
        onClick={() => {
          addOutfit();
        }}
      >
      Save Outfit
      </button>
    </div>
  );
}

export default CartDropdown;
