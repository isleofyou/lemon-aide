import React from 'react';
import ShoppingIcon  from '../../assets/hanger.png';
import './CartIcon.css';

export default function CartIcon({toggleCartHidden}) {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <img src={ShoppingIcon} className='shopping-icon'/>
    <span className='item-count'></span>
</div>
  )
}
