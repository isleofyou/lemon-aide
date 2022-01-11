import React from 'react';
import HangerIcon  from '../../assets/hanger.png';
import './CartIcon.css';

export default function CartIcon({toggleCartHidden}) {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <img src={HangerIcon} className='shopping-icon'/>
    <span className='item-count'></span>
</div>
  )
}
