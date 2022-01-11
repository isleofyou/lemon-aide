import React from 'react';
import HangerIcon  from '../../assets/hanger.png';
import './CartIcon.css';

export default function CartIcon({toggleCartHidden}) {
  return (
    <div className='cart-icon'>
    <img src={HangerIcon} className='shopping-icon' onClick={toggleCartHidden}/>
    <span className='item-count'></span>
</div>
  )
}
