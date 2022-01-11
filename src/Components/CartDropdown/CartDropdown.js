import React from 'react';
import './CartDropdown.css';


const CartDropdown = ({toggleCartHidden}) => {
    return (
    <>
      <div className='cart-dropdown'>
        <button onClick={() => toggleCartHidden()}>x</button>
      <button className='checkout-button'>CREATE OUTFIT</button>
  </div>
    </>
    )
  }

  export default CartDropdown;
