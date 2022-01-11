import React from 'react';
import './CartDropdown.css';

const CartDropdown = ({ toggleCart }) => {
  //this will display our outfitItemCards
  return (
    <div className='cart-dropdown'>
      <button onClick={() => toggleCart()}>X</button>
      <button className='checkout-button'>Create Outfit</button>
    </div>
  );
}

export default CartDropdown;
