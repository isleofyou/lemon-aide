import React, { Component } from 'react'
import './CartDropdown.css'
import CartItem from '../CartItem/CartItem'

export default class CartDropdown extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='cart-dropdown'>
      <div className='cart-items'>
          {
           this.props.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>
           )
          }
      </div>
      <button className='checkout-button'>GO TO CHECKOUT</button>
  </div>
    )
  }
}
